import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {Card, Col} from "react-bootstrap";

const BrandBar = observer(() => {
    const {cosmetic} = useContext(Context)

    return (
            <div className='d-flex'>
                {cosmetic.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className='p-3'
                    onClick={() => cosmetic.setSelectedBrand(brand)}
                    border={brand.id === cosmetic.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
                )}
            </div>
    );
});

export default BrandBar;