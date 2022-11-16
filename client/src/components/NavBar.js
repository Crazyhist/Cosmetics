import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {ADMIN_ROUTE, COSMETIC_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Cosmetica</NavLink>
                {user.isAuth
                    ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Link style={{ textDecoration: 'none' }} to={ADMIN_ROUTE}>
                            <Button variant={'outline-light'}>Админ панель</Button>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to={LOGIN_ROUTE}>
                            <Button
                                variant={'outline-light'}
                                className="ml-4"
                                onClick={() => logOut()}
                            >
                                Выйти
                            </Button>
                        </Link>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Link style={{ textDecoration: 'none' }} to={LOGIN_ROUTE}>
                            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;