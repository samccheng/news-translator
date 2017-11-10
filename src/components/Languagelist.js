import React from 'react';
import LanguagelistItem from './LanguagelistItem'


const Languagelist = (props)=> {
  return (
    <div className="list">
      {props.lang.map(l => <LanguagelistItem l={l} news={props.newButton}/>)}
    </div>
  )
}

export default Languagelist
