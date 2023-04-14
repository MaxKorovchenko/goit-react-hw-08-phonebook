import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 26px;
  font-weight: 700;
  color: whitesmoke;
  transition: transform 250ms linear;

  &.active {
    color: #e84a5f;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
