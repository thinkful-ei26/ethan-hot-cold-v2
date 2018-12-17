import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export function Header(props) {
    // console.log(props);
    if(props.rules){
        return <InfoModal />
        // return <InfoModal handleWhatToggle={props.handleWhatToggle}/>

    }
    return (
        <header>
            {/* <TopNav handleWhatToggle={props.handleWhatToggle} handleNewGame={props.handleNewGame} /> */}
            <TopNav />
            {/* <InfoModal /> */}
            <h1>HOT or COLD</h1>
        </header>
    );
};

export const mapStateToProps = state => ({
    rules: state.rules,
});

export default connect (mapStateToProps)(Header); 