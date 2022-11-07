import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {cosmetic} = useContext(Context)
    return (
        <div>

        </div>
    );
});

export default TypeBar;