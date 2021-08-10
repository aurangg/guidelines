import React from 'react';

function H1(props){
  let className = props.propsAhead.classNameProp
  let name = props.name
    return(
        <div className="col-lg-6">
            <div className="s-bg sp-60 mb-30">
              <h1 className={`${className} h-1 p-30`}>
                {name} - Left Align
              </h1>
            </div>
          </div>
    )
}

export default H1;