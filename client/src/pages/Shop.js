import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import CosmeticList from "../components/CosmeticList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchCosmetics, fetchTypes} from "../http/cosmeticAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {cosmetic} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => cosmetic.setTypes(data))
        fetchBrands().then(data => cosmetic.setBrands(data))
        fetchCosmetics(null, null, 1, 2).then(data => {
            cosmetic.setCosmetics(data.rows)
            cosmetic.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchCosmetics(cosmetic.selectedType.id, cosmetic.selectedBrand.id, cosmetic.page, 2).then(data => {
            cosmetic.setCosmetics(data.rows)
            cosmetic.setTotalCount(data.count)
        })
    }, [cosmetic.page, cosmetic.selectedType, cosmetic.selectedBrand,])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <CosmeticList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;