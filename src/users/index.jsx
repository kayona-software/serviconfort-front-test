import React, { Component } from 'react';
import { Content, Row, Col, Button } from 'adminlte-2-react';
import UsersDataTable from '../datatable/UsersDataTable';
import '../styles.css';

class Users extends Component {
    state = {}
    
    render() {
      return (
      <Content title="Usuarios" subTitle="Lista de usuarios" browserTitle="Usuarios">
        <Row className='row-spacing'>
          <Col xs={12}>
            <Button 
                text="Nuevo Usuario" 
                className="on-click-event" 
                to='/new-user'
                color='purple'
                icon='fa-user-plus'
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <UsersDataTable />
          </Col>
        </Row>
      </Content>);
    }
  }

  export default Users;   