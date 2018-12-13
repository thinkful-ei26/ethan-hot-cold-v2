import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    // console.log(props);
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={props.handleWhatToggle}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={props.handleNewGame}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

