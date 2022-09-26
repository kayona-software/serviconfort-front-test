import React, { Component } from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';

class Products extends Component {
    state = {}
  
    render() {
      return (
      <Content title="Productos" subTitle="Getting started with adminlte-2-react" browserTitle="Productos">
        <Row>
          <Col xs={6}>
            <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
              Hello World
            </Box>
          </Col>
          <Col xs={6}>
            <Box title="Another box">
              Content goes here
            </Box>
          </Col>
        </Row>
      </Content>
      );
    }
  }

export default Products;  