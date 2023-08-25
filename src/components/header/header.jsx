import React from 'react';

import Title from "./title";
import Categories from "./categories";

const Header = () => {
    return (
        <header id="header">
            <Title/>
            <Categories/>
        </header>
    );
};

export default Header;