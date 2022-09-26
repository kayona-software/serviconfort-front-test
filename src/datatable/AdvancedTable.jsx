import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
  Content, Row, Box, Col, Inputs, LoadingSpinner, Button,
  DataTable
} from 'adminlte-2-react';

import data from '../data/Browsers.js';

const selectedQualification = ['0','1','2','3'];
const { Select2 } = Inputs;
const slectedStatus = ['Activo','Inactivo'];

const firstColumns = [
  { title: 'Codigo', data: 'code' },
  { title: 'Nombre y Apellido', data: 'name' },
  { title: 'DNI', data: 'dni' },
  { title: 'Localidad', data: 'city' },
  {
    title: 'Estado',
    data: 'status',
    render: (status) => {
      switch (status) {
        case 'Activo':
          return <div className="text-green">{status}</div>;
        case 'Inactivo':
            return <div className="text-red">{status}</div>;
        default:
          return status;
      }
    },
  },
  {
    title: 'Calificación',
    data: 'qualification',
    render: (qualification) => {
      switch (qualification) {
        case '1':
          return <div className="text-red">{qualification}</div>;
        case '2':
          return <div className="text-yellow">{qualification}</div>;
        case '3':
            return <div className="text-green">{qualification}</div>;
        default:
          return qualification;
      }
    },
  },
  {
    title: 'Opciones',
    data: null,
    render: () => (
      <Button
        icon="fas-info"
        className="clickable"
      />
    )
    ,
  },
];

class DatatablesExtended extends Component {
  state = {
    selectedRows: undefined,
    selectedEngine: undefined,
    useFooter: false,
    activePage: 0,
    order: { column: 'code', direction: 'asc' },
    filteredData: undefined,
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleRowSelect = this.handleRowSelect.bind(this);
    this.handleEngineChange = this.handleEngineChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true });
    const waitTime = Math.random() * 2000;
    setTimeout(() => {
      const { order, activePage, selectedEngine } = this.state;
      let localData;
      if (selectedEngine && selectedEngine.length > 0) {
        localData = data.filter(({ code }) => selectedEngine.indexOf(code) > -1);
      } else {
        localData = data;
      }
      const filteredData = localData.sort((a, b) => {
        if (a[order.column].toLowerCase() < b[order.column].toLowerCase()) { return order.direction === 'asc' ? -1 : 1; }
        if (a[order.column].toLowerCase() > b[order.column].toLowerCase()) { return order.direction === 'asc' ? 1 : -1; }
        return 0;
      }).slice(10 * activePage, 10 * activePage + 10);
      const hasMore = filteredData.slice(10 * activePage, 10 * activePage + 10).length === 10;
      this.setState({ filteredData, loading: false, hasMore });
    }, waitTime);
  }

  handleChange(event) {
    const { params: { data } } = event;
    this.setState({ selectedRows: data });
  }

  handleEngineChange(event) {
    const { params: { data } } = event;
    this.setState({ selectedEngine: data });
    this.getData();
  }

  handleRowSelect(data) {
    const selectedRows = [];
    if (data.length) {
      data.each(({ status }) => {
        selectedRows.push(status);
      });
    } else {
      selectedRows.push(data.status);
    }
    this.setState({ selectedRows });
  }

  render() {
    const {
      selectedRows, selectedEngine, useFooter, activePage, order, filteredData, loading,
    } = this.state;
    let localData;
    if (selectedEngine && selectedEngine.length > 0) {
      localData = data.filter(({ status }) => selectedEngine.indexOf(status) > -1);
    } else {
      localData = data;
    }
    return (
      <Content>
        <Row>
          <Col xs={4}>
            <Select2
              label="Calificación"
              options={selectedQualification}
              onChange={this.handleEngineChange}
              multiple
            />
          </Col>
          <Col xs={4}>
            <Select2
              label="Estado"
              options={slectedStatus}
              onChange={this.handleChange}
              //value={selectedRows}
              multiple
            />
          </Col>
          <Col xs={4}>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Box>
              <DataTable
                columns={firstColumns}
                options={{
                  // paging: true,
                  // lengthChange: false,
                  searching: false,
                  // info: false,
                  lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'Todos']],
                  autoWidth: false,
                  // select: true,
                  rowId: 'code',
                }}
                data={localData}
                selectedRows={selectedRows}
                onSelect={this.handleRowSelect}
                order={[order]}
                onClickEvents={{
                  clickable: () => {
                    // debugger;
                    alert(`works ${data.status}`);
                  },
                }}
                id="externally-controlled"
              />
            </Box>
          </Col>
          <Col xs={12}>
            <Box>
              <DataTable
                id="external-data"
                columns={firstColumns}
                options={{
                  searching: false,
                  autoWidth: false,
                  select: true,
                  rowId: 'code',
                }}
                data={filteredData}
                footer={useFooter}
                selectedRows={selectedRows}
                onSelect={this.handleRowSelect}
                page={activePage}
                pageSize={10}
                totalElements={(filteredData && localData.length) || 0}
                // hasMore={hasMore}
                onPageChange={(page) => {
                  this.setState({ activePage: page });
                  this.getData();
                }}
                onOrderChange={(newOrder) => {
                  this.setState({ order: newOrder[0] });
                  this.getData();
                }}
                onSearchChange={(searchData) => {
                  console.log('searchValue', searchData);
                }}
                // searchValue="firefox"
                onClickEvents={{
                  clickable: () => {
                    // debugger;
                    alert('works');
                  },
                }}
              />
              {loading && <LoadingSpinner />}
            </Box>
          </Col>
        </Row>
      </Content>
    );
  }
}


export default DatatablesExtended;