import React, { Component } from 'react';
import { Content, Row, Col, Button } from 'adminlte-2-react';
import CustomersDataTable from '../datatable/CustomersDataTable';
import '../Styles.css';

class Customers extends Component {
    state = {}
    
    render() {
      return (
      <Content title="Clientes" subTitle="Lista de clientes" browserTitle="Clientes">
        <Row className='row-spacing'>
          <Col xs={12}>
            <Button 
                text="Nuevo Cliente" 
                className="on-click-event" 
                to='/new-customer'
                color='purple'
                icon='fa-user-plus'
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CustomersDataTable />
          </Col>
        </Row>
      </Content>);
    }
  }

  export default Customers;   