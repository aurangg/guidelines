import React from 'react';

function H5(props){
  let className = props.props.classNameProp
    return(
        <div className="col-lg-6">
            <div className="s-bg sp-60 mb-30">
              <h5 className={`${className} h-5 p-30`}>
                H5 - Left Align
              </h5>
            </div>
          </div>
    )
}

export default H5;