import React from 'react' 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loader from '../Template/Loading'
import App from '../App'


export default function Routes(){


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Loader}/>
                <Route exact path='/portifolio' component={App}/>
            </Switch>
        </BrowserRouter>
    )
}