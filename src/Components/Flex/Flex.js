import React, { Fragment } from 'react';


function Flex(){
    return(
        <Fragment>
            <div className="col-12 mb-30">
                <h4 className="h-4 text-center">
                    Flex Complete Center
                </h4>
            </div>
            <div className="col-lg-12 s-bg mb-30 flex-center-align">
                <div className="p-30">
                    <div className="sample sp-60"></div>
                </div>
            </div>


            <div className="col-12 mb-30">
                <h4 className="h-4 text-center">
                    Flex Start
                </h4>
            </div>
            <div className="col-lg-12 s-bg mb-30 flex-start">
                <div className="p-30">
                    <div className="sample sp-60"></div>
                </div>
            </div>


            <div className="col-12 mb-30">
                <h4 className="h-4 text-center">
                    Flex End
                </h4>
            </div>
            <div className="col-lg-12 s-bg mb-30 flex-end">
                <div className="p-30">
                    <div className="sample sp-60"></div>
                </div>
            </div>

            <div className="col-12 mb-30">
                <h4 className="h-4 text-center">
                    Space Between
                </h4>
            </div>
            <div className="col-lg-12 s-bg mb-30">
                <div className="p-30 flex-space-between">
                    <div className="sample sp-60"></div>
                    <div className="sample sp-60"></div>
                    <div className="sample sp-60"></div>
                </div>
            </div>


            <div className="col-12 mb-30">
                <h4 className="h-4 text-center">
                    Space Evenly
                </h4>
            </div>
            <div className="col-lg-12 s-bg mb-30">
                <div className="p-30 flex-space-evenly">
                    <div className="sample sp-60"></div>
                    <div className="sample sp-60"></div>
                    <div className="sample sp-60"></div>
                    <div className="sample sp-60"></div>
                </div>
            </div>


            <div className="col-12 mb-30">
                <h4 className="h-4 text-center">
                    Space Around
                </h4>
            </div>
            <div className="col-lg-12 s-bg mb-30">
                <div className="p-30 flex-space-around">
                    <div className="sample sp-60"></div>
                    <div className="sample sp-60"></div>
                    
                </div>
            </div>

            <div className="col-12 mb-30">
                <h4 className="h-4 text-center">
                    Flex Direction - Vertical /Columnn
                </h4>
            </div>
            <div className="col-lg-12 s-bg mb-30">
                <div className="p-30 flex-column">
                    <div className="sample sp-60 mb-10"></div>
                    <div className="sample sp-60 mb-10"></div>
                    <div className="sample sp-60 mb-10"></div>
                    <div className="sample sp-60 mb-10"></div>
                </div>
            </div>
            
        </Fragment>
    )
}
export default Flex;