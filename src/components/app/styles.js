import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    background-color: aliceblue;
    padding: 10px 0;
`;

export const Li = styled.li`
    flex: 1;
    text-align: center;  
`;

export const H2 = styled.h2`
    background-color: pink;
    color: purple;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;

    &.active {
        background-color: aquamarine;
    }
`;
