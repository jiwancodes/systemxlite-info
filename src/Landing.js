import React, { useState, useEffect, Fragment } from 'react'
import { css } from "@emotion/react";
import SquareLoader from "react-spinners/SquareLoader";

import AppBar from './components/appbar/AppBar';
import Contacts from './containers/contact/Contacts';
import Questions from './containers/FAQ/Questions';
import Home from './containers/home/Home';
import Pricing from './containers/pricing/Pricing';

function Landing() {
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false)
        }, 2000);
    }, []);
    const override = css`
    align: center;
  display: block;
  margin: 15% auto;
  border-color: red;
`;
    return (
        <div className="Landing">
            { loading ? 
                <SquareLoader color='#4A90E2' loading={loading} css={override} size={150} />
            :
            <Fragment>
                <AppBar />
                <Home />
                <Pricing />
                <Questions />
                <Contacts />
            </Fragment>
        }
        </div>
    )
}

export default Landing
