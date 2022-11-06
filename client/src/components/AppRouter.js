import React, {useContext} from 'react';
import {Routes, Route, Navigate, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    // const isAuth = false //заглушка (авторизован или нет)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {/*<Navigate to='/shop'/>*/}
            {/*в чем приколы redirect navigate*/}
        </Routes>
);
};

export default AppRouter;