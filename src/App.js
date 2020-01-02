import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';

import Navigation from './components/Navigation';
import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <Navigation />
            <Route exact path='/' component={ToDoListContainer} />
            <Route exact path='/new-item' component={AddToDo} />
            {/* <AddToDo />
            <ToDoListContainer /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
