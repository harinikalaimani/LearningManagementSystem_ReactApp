import React from 'react';

export default function Dashboarddetails(props) {
    return (
        <div className="card status m-3 box-width">
            <div className="card-body ccontent">
                <h5 className="card-title sm-small">{props.number}</h5>
                <p className="card-text lh-1">{props.course}</p>
            </div>
        </div>
    );
}
