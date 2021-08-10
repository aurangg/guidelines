import React from 'react';
import H3 from './H3';
import H1 from './H1';
import H2 from './H2';
import H4 from './H4';
import H5 from './H5';
import H6 from './H6';
import Paragraph from './Paragraph';

function MainAlign(props){
    console.log('Console:', props)
    return(
        <React.Fragment>
            <H1 propsAhead={props} name="H1" />
            <H2 props={props} name="H2" />
            <H3 props={props} name="H3" />
            <H4 props={props} name="H4" />
            <H5 props={props} name="H5" />
            <H6 props={props} name="H6" />
            <Paragraph props={props} name="Paragraph" />
        </React.Fragment>
    )
}
export default MainAlign;