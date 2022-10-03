import React, {useState, useEffect} from 'react';
import { Row, Box, Col, Button, DataTable, LoadingSpinner } from 'adminlte-2-react';
import AcceptDeclineModal from '../utils/AcceptDeclineModal';
import axios from 'axios';

const DataTables = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoaded] = useState([true]);
  const [showModal, setShowModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState(false);

  const deleteCustomer = (id)=>{
    setShowModal(false)
    setIsLoaded(true)
    axios.delete(`${process.env.REACT_APP_API_ENDPOINT}customers/${id}`)
      .then(res=>{
        setIsLoaded(false)
        let newData = data.filter(dat=>dat.id!==id)
        setData(newData)
      })
      .catch(err=>{
        console.log(`Error al eliminar cliente: ${err}`)
      })
  }

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
      render: () => 
      <>
        <Button className="see-more-customer" icon='fa-eye' title="Ver Más"/>
        <Button className="edit-customer"     icon='fa-user-edit' title="Editar"/>  
        <Button className="delete-customer"   icon='fa-trash' title="Eliminar"/>       
      </>
    }
  ];
  //EN ESTA TABLA COMUN VER DE APLICAR FILTRO PARA CALIFICACION, Y LA PAGINACION CORRESPONDIENTE
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
    <>
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
                seeMoreCustomer: (data,rowIdx,rowData) => {
                  alert(`Ver más de: ${rowIdx.name}`)
                  console.log(rowIdx.name)
                  console.log(rowData)
                },
                editCustomer: (data,rowIdx,rowData) => {
                  alert(`Editar: ${rowData.name}`)
                },
                deleteCustomer: (data,rowIdx,rowData) => {
                  setShowModal(true);
                  setCustomerInfo(data)      
                },
              }}
            />
          </Box>
        </Col>
      </Row>
      <AcceptDeclineModal 
        title="Atención"
        message={`¿Está seguro que desea eliminar al / a la cliente: ${customerInfo.code} - ${customerInfo.name}`}
        show={showModal}
        setShow={setShowModal}
        acceptFunction={deleteCustomer}
        data={customerInfo}
      />
    </>
  );
};

export default DataTables;