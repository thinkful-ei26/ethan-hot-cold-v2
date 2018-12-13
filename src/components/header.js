import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    console.log(props);
    if(props.rules === true){
        return <InfoModal handleWhatToggle={props.handleWhatToggle}/>
    }
    return (
        <header>
            <TopNav handleWhatToggle={props.handleWhatToggle}/>
            {/* <InfoModal /> */}
            <h1>HOT or COLD</h1>
        </header>
    );
};
