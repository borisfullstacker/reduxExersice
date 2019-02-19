import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Cards from './components/cards'
import TableCont from './components/table'
import { Button,Container } from 'reactstrap';
import {connect} from 'react-redux';
import { getFullList } from './httpRequests/artistApi';


class App extends Component {
  render() {
    return (
  <Router>
    <Container>
      <nav>
      <Link to={'/'}><Button color="primary" size="sm">Cards view</Button></Link>
      <Link to={'/Table'}><Button color="secondary" size="sm">Table view</Button></Link>
      </nav>
    <Switch>
      <Route exact path="/" component={Cards} />
      <Route path="/table" component={TableCont} />
    </Switch>
    </Container>
  </Router>

    );
  }

  componentDidMount(){
    this.props.fetchAll();
}
}


const mapDispatchToProps=(dispatch)=>{
  return{
      fetchAll:async ()=>{
      let result = await getFullList()
      console.log(result);
      dispatch({
          type:"GET_ALL", payload:result
      })
   }
  }
}


export default connect(null, mapDispatchToProps)(App);
