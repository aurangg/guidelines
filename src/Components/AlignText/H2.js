import React from 'react';

function H2(props){
  let className = props.props.classNameProp
    return(
        <div className="col-lg-6">
            <div className="s-bg sp-60 mb-30">
              <h2 className={`${className} h-2 p-30`}>
                H2 - Left Align
              </h2>
            </div>
          </div>
    )
}

export default H2;