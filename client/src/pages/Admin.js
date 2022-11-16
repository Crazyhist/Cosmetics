import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateCosmetic from "../components/modals/CreateCosmetic";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [cosmeticVisible, setCosmeticVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-2'
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-2'
                onClick={() => setBrandVisible(true)}
            >
                Добавить брэнд
            </Button>
            <Button
                variant={'outline-dark'}
                className='mt-4 p-2'
                onClick={() => setCosmeticVisible(true)}
            >
                Добавить косметику
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateCosmetic show={cosmeticVisible} onHide={() => setCosmeticVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;