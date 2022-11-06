import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";

const Auth = () => {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
            >
            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите свой email..."
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="Введите свой пароль..."
                    />
                    <Row className='d-flex justify-content-between mt-3'>
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                        </div>
                        <div>
                            <Button
                                variant={'outline-success'}
                            >
                                Войти
                            </Button>
                        </div>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;