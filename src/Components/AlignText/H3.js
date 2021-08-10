import React from 'react';

function H3(props){
  let className = props.props.classNameProp
    return(
        <div className="col-lg-6">
            <div className="s-bg sp-60 mb-30">
              <h3 className={`${className} h-3 p-30`}>
                H3 - Left Align
              </h3>
            </div>
          </div>
    )
}

export default H3;