import React from 'react';

function SectionTitle(props){
  console.log(props)
    return(
        <div className="col-lg-12">
            <div className="sp-90">
              <h1 className="text-left">
                {props.textName}
              </h1>
            </div>
          </div>
    )
}
export default SectionTitle;