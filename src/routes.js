import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import addClients from "./view/Clients/addClients";
import listClients from "./view/Clients/listClients";
import addProducts from "./view/Products/addProducts";
import listProducts from "./view/Products/listProducts";
import Home from "./view/Home"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/addClients' component={addClients} />
                <Route path='/listClients' component={listClients} />
                <Route path='/addProducts' component={addProducts} />
                <Route path='/listProducts' component={listProducts} />
            </Switch>
        </BrowserRouter>
    )
}