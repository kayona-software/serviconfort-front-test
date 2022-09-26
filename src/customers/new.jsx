import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';
import NewCustomerForm from '../forms/NewCustomerForm';

class NewCustomer extends Component {
    state = {}
  
    render() {
      return (
      <Content 
            title="Alta de Cliente" 
            subTitle="Formulario para agregar nuevo cliente" 
            browserTitle="Nuevo Cliente">
        <Row>
          <Col xs={12}>
              <NewCustomerForm />
          </Col>
        </Row>
      </Content>);
    }
  }
  
  export default NewCustomer; 