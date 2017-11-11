import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const NewsButton = (props) => (
  <div>
    <RaisedButton onClick={props.click} label="get headlines" primary={true} />
  </div>
);

export default NewsButton
