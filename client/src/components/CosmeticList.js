import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import CosmeticsItem from "./CosmeticsItem";

const CosmeticList = observer(() => {
    const {cosmetic} = useContext(Context)
    return (
        <Row>
            {cosmetic._cosmetics.map(cosmetic =>
                <CosmeticsItem key={cosmetic.id} cosmetic={cosmetic}/>
            )}
        </Row>
    );
});

export default CosmeticList;