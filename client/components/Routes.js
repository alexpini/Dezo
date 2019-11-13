import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './Products/Products'

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/products" component={Products} />
            </Switch>
        )
    }
}

export default Routes