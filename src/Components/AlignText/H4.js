import React from 'react';

function H4(props){
  let className = props.props.classNameProp
    return(
        <div className="col-lg-6">
            <div className="s-bg sp-60 mb-30">
              <h4 className={`${className} h-4 p-30`}>
                H4 - Left Align
              </h4>
            </div>
          </div>
    )
}

export default H4;