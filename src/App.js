import React, { Component } from 'react';
import AdminLTE, { Sidebar, Footer } from 'adminlte-2-react';
import Sales from './sales';
import Products from './products';
import Customers from './customers';
import NewCustomer from './customers/new';
import Users from './users';
import './App.css';

const { Item } = Sidebar;

const customerSideBar=[
    <Item key="newCustomer" text="Alta de Cliente" to="/new-customer" isSubItem="true" /> ,
    <Item key="all" text="Lista" to="/customers" isSubItem="true" /> 
  ]

const saleSideBar=[
    <Item key="newSale" text="Cargar Venta" to="/sales" isSubItem="true" /> ,
    <Item key="paying" text="Pago Cuota" to="/sales" isSubItem="true" /> ,
    <Item key="refinanciacion" text="Refinanciación" to="/sales" isSubItem="true" /> ,
    <Item key="anulacion" text="Anulación" to="/sales" isSubItem="true" /> ,
    <Item key="pedidos" text="Registrar Pedido" to="/sales" isSubItem="true" />
  ] 

const productSideBar=[
    <Item key="product" text="Productos" to="/products" isSubItem="true" /> ,
    <Item key="buying" text="Compras" to="/products" isSubItem="true" /> ,
    <Item key="prices" text="Precios" to="/products" isSubItem="true" />
  ]

const settingsSideBar=[
    <Item key="comisiones" text="Comisiones" to="/settings" isSubItem="true" /> ,
    <Item key="cobros" text="Cobros" to="/settings" isSubItem="true" /> ,
    <Item key="liquidaciones" text="Liquidaciones" to="/settings" isSubItem="true" /> ,
    <Item key="otros" text="Otros Egresos" to="/settings" isSubItem="true" />
  ]

const adminSideBar=[
    <Item key="users" text="Usuarios" to="/users" isSubItem="true" /> ,
    <Item key="roles" text="Roles" to="/roles" isSubItem="true" /> ,
    <Item key="sets" text="Configuraciones" to="/config" isSubItem="true" />
  ]

const reportsSideBar=[
    <Item key="reports" text="Ver Reportes" to="/reports" isSubItem="true" /> ,
  ]  
  
  const mainSideBar = [
    <Item key="customers" text="Clientes" to="#" children={customerSideBar} icon='fa-user' /> ,
    <Item key="sales" text="Ventas" to="#" children={saleSideBar} icon='fa-shopping-cart' /> ,
    <Item key="products" text="Productos" to="#" children={productSideBar} icon='fa-dolly' /> ,
    <Item key="reports" text="Reportes" to="#" children={reportsSideBar} icon='fa-chart-line' /> ,
    <Item key="settings" text="Gestión" to="#" children={settingsSideBar} icon='fa-user-shield' /> ,
    <Item key="admin" text="Admin" to="#" children={adminSideBar} icon='fa-cogs'/>
  ]

class App extends Component {

  render() {
    return (
      <AdminLTE title={["Servi", "Confort"]} titleShort={["S", "C"]} theme="purple" sidebar={mainSideBar}>
        <Customers path="/customers" />
        <NewCustomer path="/new-customer" />
        <Products path="/products" />
        <Sales path="/sales" />
        <Users path="/users" />
        <Footer includeVersionInfo={false} className="footer-center">
          KYN - 2022        
        </Footer>
      </AdminLTE>
    );
  }
}

export default App;
