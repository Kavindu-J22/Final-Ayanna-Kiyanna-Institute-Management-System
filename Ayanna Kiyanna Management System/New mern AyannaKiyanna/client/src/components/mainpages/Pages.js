import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import Viyabox from './Other/ViyaBox'
import Sahithyabox from './Other/SahithyaBox/LitboxMain'

import Gadya from './Other/SahithyaBox/Gadya'
import Padya from './Other/SahithyaBox/Padya'
import Natya from './Other/SahithyaBox/Natya'
import Nuthanagadya from './Other/SahithyaBox/Nuthanagadya'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />


            <Route path="/boxes/viyabox" exact component={isLogged ? Viyabox :Login} />
            <Route path="/boxes/litbox" exact component={isLogged ? Sahithyabox :Login} />


            <Route path="/sahithya/gadya" exact component={Gadya} />
            <Route path="/sahithya/padya" exact component={Padya} />
            <Route path="/sahithya/natya" exact component={Natya} />
            <Route path="/gadya/Nuthanagadya" exact component={Nuthanagadya} />


            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />



            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
