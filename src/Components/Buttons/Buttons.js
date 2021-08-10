import React, { Fragment } from 'react';

function Buttons(){
    return(
        <Fragment>
            <div className="col-12 flex-space-evenly">
            <button className="s-btn p-20-15 br-5 text-center mb-10">
                Default Button
            </button>
            <button className="s-btn p-20 br-25 text-center mb-10">
                Round Button
            </button>
            </div>
            <div className="col-12 flex-space-evenly">
                <button className="s-btn w-100 p-20-15 br-5 text-center mb-10">
                    Full Width Button
                </button>
            </div>
        </Fragment>
    )
}
export default Buttons;