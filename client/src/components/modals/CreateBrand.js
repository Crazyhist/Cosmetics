import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand, createType} from "../../http/cosmeticAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить  брэнд
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={'Введите название брэнда'}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                    <Button  variant={'outline-success'} onClick={addBrand}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateBrand;