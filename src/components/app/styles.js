import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    background-color: aliceblue;
    padding: 0;
`;

export const Li = styled.li`
    flex: 1;
    text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    display: block;
    padding: 10px 0;
    
    &.active {
        background-color: aquamarine;
    }
`;
