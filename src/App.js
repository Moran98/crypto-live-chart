import React from 'react';
import logo from './images/example.png';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Withdraw from './components/withdraw';
import Register from './components/register';
import Login from './components/login';
import {FaUserCircle} from 'react-icons/fa';





class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/content"> <img src={logo} width="100px" height="90px"></img></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/content">Market</Nav.Link>
              <Nav.Link href="/read">Wallet</Nav.Link>
              <Nav.Link href="/create">Purchase</Nav.Link>
              <Nav.Link href="/withdraw">Withdraw</Nav.Link>


            </Nav>
            <Nav>
            <Nav.Link a href="/register"> <FaUserCircle size={50}/></Nav.Link>
            </Nav>

          </Navbar>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/content" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
            <Route path="/withdraw/:id" component={Withdraw} />
            <Route path="/withdraw" component={Withdraw} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />



          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;