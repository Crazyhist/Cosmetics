import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from "react-router-dom";
import {fetchOneCosmetic} from "../http/cosmeticAPI";

const CosmeticsPage = () => {
    // const cosmetic = { id: 1, name: 'Nars', price: 10500, rating: 5,img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdoctor-veterinar.ru%2Fkoshki%2Fkot-ne-pisaet&psig=AOvVaw3tlbaAad4ksED04qy-OKbw&ust=1668239435329000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjl16nSpfsCFQAAAAAdAAAAABAJ'}
    // const description = [
    //     {id: 1, title: 'Область использования: ', description: 'брови'},
    //     {id: 2, title: 'Тип кожи: ', description: 'все типы кожи'},
    //     {id: 3, title: 'Вес в упаковке: ', description: '16 г'},
    //     {id: 4, title: 'Текстура: ', description: 'гелевая'},
    // ]
    const [cosmetic, setCosmetic] = useState({info: []})
    const {id} = useParams()
    // console.log(params)

    useEffect(() => {
        fetchOneCosmetic(id).then(data => setCosmetic(data))
    }, [])

        return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + cosmetic.img}/>
                </Col>
                <Col md={4}>
                    <div className='d-flex flex-column align-items-center'>
                        <h2>{cosmetic.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}

                        >
                            {cosmetic.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {cosmetic.price}</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <div className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {cosmetic.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} {info.description}
                    </Row>
                )}
            </div>
        </Container>
    );
};

export default CosmeticsPage;