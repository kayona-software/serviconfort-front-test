import React from 'react';
import { Row, Col, Box, Button, Inputs } from 'adminlte-2-react';
import SelectCity from '../utils/SelectCity';
import SelectDNI from '../utils/SelectDNI';
import '../Styles.css';


const { Text } = Inputs;

//          <Text name="exampleInputPassword1" label="File input" labelPosition="above" inputType="file" help="Example block-level help text here." />
//          <Text type="success" labelPosition="above" label="Input with success" labelIcon="fas-check" placeholder="Enter ..." help="Help block with success" />
//          <Text type="warning" labelPosition="above" label="Input with warning" labelIcon="far-bell" placeholder="Enter ..." help="Help block with warning" />
//          <Text type="error" labelPosition="above" label="Input with error" labelIcon="far-times-circle" placeholder="Enter ..." help="Help block with error" />

const NewCustomerForm = () => 
(  
<>  
    <Row>
      <Col md={3}>
        <Box type="info">
          <div className='label-text'>Código de Cliente: <span className='code'>CD003900</span></div>
        </Box>
      </Col>
      <Col md={9}>
        <Box type="info">
          <Button classes='mx-2' size='md' type="danger" text="Borrar" className='mx-2' pullRight/>                 
          <Button classes='mx-2' size='md' type="primary" text="Volver" className='mx-2' pullRight/>   
          <Button classes='mx-2' size='md' type="info" text="Crear" className='mx-2' pullRight/>    
        </Box>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Box type="primary" title="Datos generales" border>
          <Text name="name" placeholder="Ingrese Nombre y Apellido" label="Nombre y Apellido" labelPosition="above" />
          <Text name="dni" placeholder="Ingrese N° de DNI" label="DNI" labelPosition="above" inputType="number" />
          <SelectDNI />
        </Box>
        <Box type="warning" title="Adjuntos" border>
          <Text name="Fotos" label="Fotos" labelPosition="above" inputType="file" help="Fotos de la ubicación
          " />
        </Box>
      </Col>
      <Col md={6}>
        <Box type="success" title="Información de Contacto" border>
            <Text name="phone" placeholder="Número de Teléfono" label="Teléfono" labelPosition="above" inputType="phone"/>
            <Text name="address" placeholder="Dirección" label="Dirección" labelPosition="above" inputType="text" />
            <SelectCity />
            <Text label="Referencia" inputType="textarea" rows={5} labelPosition="above" placeholder="Descripción de la ubicación..." />  
        </Box>
      </Col>
    </Row>
  </> 
  );
  
  export default NewCustomerForm;