import React from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';

export default function Sales() {


        return (<Content title="Ventas" subTitle="Getting started with adminlte-2-react" browserTitle="Ventas">
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
      </Content>);
}
