import React from 'react';

function H6(props){
  let className = props.props.classNameProp;
    return(
        <div className="col-lg-6">
            <div className="s-bg sp-60 mb-30">
              <h6 className={`${className} h-6 p-30`}>
                H6 - Left Align
              </h6>
            </div>
          </div>
    )
}

export default H6;