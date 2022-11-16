import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {COSMETIC_ROUTE} from "../utils/consts";
import {useNavigate, useLocation, useHistory, useRoutes, Link} from 'react-router-dom'


const CosmeticsItem = ({cosmetic}) => {
    const navigate = useNavigate()
    // console.log(navigate)
    return (
        <Col md={3} className={'mt-3'}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Link style={{ textDecoration: 'none' }} to={COSMETIC_ROUTE + '/' + cosmetic.id}>
                    <Image width={150} height={150} src={process.env.REACT_APP_API_URL + cosmetic.img}/>
                    <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                        <div>Epica...</div>
                        <div className='d-flex align-items-center'>
                            <div>
                                {cosmetic.rating}
                            </div>
                            <Image width={18} src={star}/>
                        </div>
                    </div>
                    <div>{cosmetic.name}</div>
                </Link>
            </Card>
        </Col>
    );
};

export default CosmeticsItem;