import React from 'react';
import logo from './../../images/costo.png';
import { Form } from 'react-bootstrap';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnLinkLog} from './NavbarElements';

const Navbar = () => {

  /*const authButton = (props) => {
    if (props.sesion === false){
      return (
        <>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLinkLog to="/login">Log In </NavBtnLinkLog>
        </NavBtn>
        </>
      )
    } else {
      return (
        <NavBtn>
          <NavBtnLinkLog to="/login">Log Out </NavBtnLinkLog>
        </NavBtn>
        )
    }
  }*/

  return (
    <>
      <Nav>
        <NavLink to="/appPagos">
          <img src={logo} width= "100%" height= "100%" alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/appPagos" activeStyle>
          Inicio
          </NavLink>
          <NavLink to="/about" activeStyle>
          Acerca de
          </NavLink>
          <NavLink to="/productos" activeStyle>
          Productos
          </NavLink>
          <NavLink to="/contacto" activeStyle>
          Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLinkLog to="/login">Log In </NavBtnLinkLog>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
