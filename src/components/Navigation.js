import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar  = styled.div `
    margin-bottom: 15px;
    background-color: lightgray;
`;
const Styledlink = styled(Link) `
    padding-left: 5px;
`;
export default () => (
    <NavigationBar>
        <Styledlink className="btn btn-primary" to='/'>
            To-Do List
        </Styledlink>
        <Styledlink className="btn btn-secondary" to='/new-item'>
            + Add New
        </Styledlink>
    </NavigationBar>
);