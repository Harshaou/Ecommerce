import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Details from './components/Details'
import Default from './components/Default' 

class App extends Component {
    render() {
        return (
            <div >
                <NavBar />
                <Switch>
                <Route exact path='/' component={ProductList} />
                <Route path='/details' component={Details} />
                <Route path='/Cart' component={Cart} />
                <Route component={Default} />
                </Switch>
                

                
            </div>
        );
    }
}

export default App;
