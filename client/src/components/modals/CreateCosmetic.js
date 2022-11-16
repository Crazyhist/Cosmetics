import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import Row from "react-bootstrap/Row";
import {
    createCosmetic,
    createDevice,
    createType,
    fetchBrands,
    fetchCosmetics,
    fetchTypes
} from "../../http/cosmeticAPI";
import {observer} from "mobx-react-lite";

const CreateCosmetic = observer(({show, onHide}) => {
    const {cosmetic} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    // const [brand, setBrand] = useState(null)
    // const [type, setType] = useState(null)
    const [info,setInfo] = useState([])


    useEffect(() => {
        fetchTypes().then(data => cosmetic.setTypes(data))
        fetchBrands().then(data => cosmetic.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter( i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i,[key]: value} : i))
    }

    const selectFile = e => {
        // console.log(e.target.files)
        setFile(e.target.files[0])
    }

    const addCosmetic = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', cosmetic.selectedBrand.id)
        formData.append('typeId', cosmetic.selectedType.id)
        formData.append('info', JSON.stringify(info))

        createCosmetic(formData).then(data => onHide())
        // console.log(info)
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
                        Добавить косметику
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className='mt-3 mb-2'>
                            <Dropdown.Toggle>
                                {cosmetic.selectedType.name || 'Выберите тип'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {cosmetic.types.map(type =>
                                    <Dropdown.Item
                                        onClick={() => cosmetic.setSelectedType(type)}
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='mt-3 mb-2'>
                            <Dropdown.Toggle>
                                {cosmetic.selectedBrand.name || 'Выберите брэнд'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {cosmetic.brands.map(brand =>
                                    <Dropdown.Item
                                        onClick={() => cosmetic.setSelectedBrand(brand)}
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className='mt-3'
                            placeholder='Введите название косметики'
                        />
                        <Form.Control
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                            // onChange={setFile}
                            className='mt-3'
                            placeholder='Введите стоимость косметики'
                            type='number'
                        />
                        <Form.Control
                            className='mt-3'
                            type='file'
                            onChange={selectFile}
                        />
                        <hr/>
                        <Button
                            variant={'outline-dark'}
                            onClick={addInfo}
                        > Добавить Новое свойство
                        </Button>
                        {
                            info.map(i =>
                                <Row className='mt-2' key={i.number}>
                                    <Col md={4}>
                                        <Form.Control
                                            value={i.title}
                                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                            placeholder='Введите название свойства'
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control
                                            value={i.description}
                                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                            placeholder='Введите описание свойства'
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Button
                                            onClick={() => removeInfo(i.number)}
                                            variant={'outline-danger'}
                                        >
                                            Удалить
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        }



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                    <Button  variant={'outline-success'} onClick={addCosmetic}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
});

export default CreateCosmetic;