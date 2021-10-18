import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #C5C5C5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height 100%;
  cursor: pointer;

  &.active {
    color: #DF0C0C;
  }

  &:hover {
    color: #fff;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display:none;
  }

`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display:none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #DF0C0C;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position:absolute;
  right: 1%;

  &.active {
    color: #DF0C0C;
    background: #fff;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #DF0C0C;
  }
`
export const NavBtnLinkLog = styled(Link)`
  border-radius: 4px;
  background: #000;
  padding: 10px 22px;
  color: #DF0C0C;
  border:  1px solid #DF0C0C;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: absolute;
  right: 115px;

  &.active {
    color: #DF0C0C;
    background: #fff;
    border: 1px solid #DF0C0C;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #DF0C0C;
  }
`
