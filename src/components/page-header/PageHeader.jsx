import React from 'react';

import './page-header.scss';

import bg from '../../assets/footer-bg.jpg';

const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
            {/* <h1>Hello there</h1> */}
        </div>
    );
}


export default PageHeader;
