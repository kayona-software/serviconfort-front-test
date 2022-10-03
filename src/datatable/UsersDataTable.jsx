import React, {useState, useEffect} from 'react';
import { Row, Box, Col, Button, DataTable,LoadingSpinner } from 'adminlte-2-react';
import axios from 'axios';
import AcceptDeclineModal from '../utils/AcceptDeclineModal';

const UserTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoaded] = useState([true]);

  const deleteUser = (id)=>{
    axios.delete(`${process.env.REACT_APP_API_ENDPOINT}users/${id}`)
      .then(res=>{
        setShowModal(false)
        console.log(res) //poner un alert bootstrap 
      })
      .catch(err=>{
        console.log(`Error al eliminar usuario: ${err}`)
      })
  }

  useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_ENDPOINT}users`)
      .then(res=>{
          setData(res.data)
          setIsLoaded(false)  
      })
      .catch(err=>{
          console.log(`Error al buscar datos: ${err}`)
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
      render: () => 
      <>
        <Button className="see-more-user" icon='fa-eye'       title="Ver Más" />
        <Button className="edit-user"     icon='fa-user-edit' title="Editar"/>  
        <Button className="delete-user"   icon='fa-trash'     title="Eliminar"/>       
      </>,
    }
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
    <>
      <Row>
        <Col xs={12}>
          <Box>
            {
                isLoading && <LoadingSpinner /> 
            }    
            <DataTable
              columns={firstColumns}
              data={data}
              footer={false}
              options={{
                language:SpanishTextOption
              }}
              onClickEvents={{
                seeMoreUser: (data, rowIdx, rowData) => {
                  alert(`Ver más de: ${data.username}`)
                },
                editUser: (data, rowIdx, rowData) => {
                  alert(`Editar: ${data.username}`)
                },
                deleteUser: (data, rowIdx, rowData) => {
                  setShowModal(true);
                  setUserInfo(data)                    
                },
              }}
            />
          </Box>
        </Col>
      </Row>
      <AcceptDeclineModal 
        title="Atención"
        message={`Está seguro que desea eliminar al usuario ${userInfo.username}`}
        show={showModal}
        setShow={setShowModal}
        acceptFunction={deleteUser}
        data={userInfo}
      />
    </>
  );
};

export default UserTable;