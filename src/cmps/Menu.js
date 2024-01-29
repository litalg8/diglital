import React from 'react';
import { bool } from 'prop-types'
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Menu = ({ open, onClick }) => {
  return (
    <StyledMenu open={open}>
      <Link to="projects" spy={true} smooth={true}>
        projects
      </Link>
      <Link to="cta" spy={true} smooth={true} onClick={onClick}>
        about
      </Link>
      <Link to="contact" spy={true} smooth={true}  >
        contact
      </Link>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  display: ${({ open }) => open ? 'flex' : 'none'};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  background: ${({ theme }) => theme.primaryDark};
  padding: 3.5rem 1rem;
  position: absolute;
  top: 0;
  right:0;
  transition: transform 0.6s ease-in-out;
  


  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 700;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    :first-child{
      padding-top:3rem; 
  }
`;

Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;