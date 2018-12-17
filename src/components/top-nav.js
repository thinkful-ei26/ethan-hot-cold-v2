import React from 'react';
import {connect} from 'react-redux';

import './top-nav.css';
import {openWhat, newGame} from '../actions';

export function TopNav(props) {
    // console.log(props);
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={() => props.dispatch(openWhat())}>
                        What?
                    </a>
                </li>
                <li>
                    {/* <a className="new" href="#" onClick={props.handleNewGame}> */}
                    <a className="new" href="#" onClick={() => props.dispatch(newGame())}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

// export const mapStateToProps = state => ({
//     rules: state.rules,
// });

// export default connect (mapStateToProps)(TopNav); 

export default connect ()(TopNav); 

