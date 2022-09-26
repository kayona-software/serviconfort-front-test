import React, {useState, useEffect} from 'react';
import { Row, Box, Col, Button, DataTable,LoadingSpinner } from 'adminlte-2-react';
import axios from 'axios';

const DataTables = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoaded] = useState([true]);
  useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_ENDPOINT}customers`)
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
    { title: 'Código', data: 'code' },
    { title: 'Nombre y Apellido', data: 'name' },
    { title: 'DNI', data: 'dni' },
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
          case '001-Mal Cliente':
            return <div className="text-red">{qualification}</div>;
          case '002-Cliente Medio':
            return <div className="text-yellow">{qualification}</div>;
          case '003-Buen Cliente':
              return <div className="text-green">{qualification}</div>;
          default:
            return qualification;
        }
      },
    },
    { title: 'Localidad', data: 'city' },
    { title: 'Teléfono', data: 'phone' },
    {title: '',
      data: null,
      render: () => <Button text="Ver Más..." className="on-click-event" />,}
  ];
  //EN ESTA TABLA COMUN VER DE APLICAR FILTRO PARA CALIFICACION Y VER DE TRAER LOS DATOS CON LOADING, Y LA PAGINACION CORRESPONDIENTE
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
              footer
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

export default DataTables;