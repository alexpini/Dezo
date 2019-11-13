import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render(){
        return(
            <div>
                <NavLink to='/products'>Products</NavLink>
            </div>
        )
    }
}

export default Nav