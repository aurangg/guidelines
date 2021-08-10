import React from 'react';

function H6(props){
    let className = props.props.className
    let name = props.name
    return(
        <div className="col-lg-12">
            <div className="s-bg sp-60 mb-30">
              <p className={`${className} paragraph p-30`}>
                {name} - Left Align
              </p>
            </div>
          </div>
    )
}

export default H6;