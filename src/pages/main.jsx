import React from 'react';

import {useParams} from "react-router-dom";

import Header from '../components/header/header';
import Menu from '../components/menu';
import Footer from '../components/footer/footer';

const Main = () => {

    const {category} = useParams();

    return (
        <div>
            <Header />
                <Menu category={category}/>
            <Footer />
        </div>
    );
};

export default Main;