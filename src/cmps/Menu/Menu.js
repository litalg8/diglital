import React from 'react';
import { bool } from 'prop-types'
import { Link } from 'react-scroll';
import { StyledMenu } from './Menu.styled';

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
Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;