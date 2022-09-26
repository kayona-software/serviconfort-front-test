import React, {useState, useEffect} from 'react';
import { Row, Box, Col, Button, DataTable,LoadingSpinner } from 'adminlte-2-react';
import axios from 'axios';

const UserTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoaded] = useState([true]);
  useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_ENDPOINT}users`)
      .then(res=>{
          setData(res.data)
          setIsLoaded(false)  
      })
      .catch(err=>{
          console.log("Error")
          setData([])
          setIsLoaded(false)
      })
    },[])
  const firstColumns = [
    { title: 'Nombre y Apellido', data: 'username' },
    { title: 'DNI', data: 'dni' },
    { title: 'Rol', data: 'rolename' },
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
    {title: '',
      data: null,
      render: () => <Button text="Ver Más..." className="on-click-event" />,}
  ];

  const SpanishTextOption = {
    decimal: '',
    emptyTable: 'Información No Disponible',
    info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
    infoEmpty: 'Mostrando 0 a 0 de 0 entradas',
    infoFiltered: '(filtrado desde _MAX_ entradas totales)',
    infoPostFix: '',
    thousands: ',',
    lengthMenu: 'Mostrar _MENU_ entradas',
    loadingRecords: 'Cargando...',
    processing: 'Procesando...',
    search: 'Buscar:',
    zeroRecords: 'No se encontraron coincidencias',
    paginate: {
      first: 'Primero',
      last: 'Último',
      next: 'Siguiente',
      previous: 'Anterior',
    },
    aria: {
      sortAscending: ': activate to sort column ascending',
      sortDescending: ': activate to sort column descending',
    },
    select: {
      cells: {
        _: 'Selected %d cells',
        0: 'Click a cell to select it',
        1: '1 row selected',
      },
      rows: {
        _: '%d rows selected',
        0: 'Click a row to select it',
        1: '1 row selected',
      },
    },
  };
  

  return (
      <Row>
        <Col xs={12}>
          <Box>
            {
                isLoading ? <LoadingSpinner /> : <></>
            }    
            <DataTable
              columns={firstColumns}
              data={data}
              footer={false}
              options={{
                language:SpanishTextOption
              }}
              onClickEvents={{
                onClickEvent: (data, rowIdx, rowData) => {
                  debugger;
                  alert(data.name)
                },
              }}
            />
          </Box>
        </Col>
      </Row>
  );
};

export default UserTable;