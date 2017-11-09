import React from 'react';
import LanguagelistItem from './LanguagelistItem'


const Languagelist = (props)=> {
  return (
    <div>
      {props.lang.map(l => <LanguagelistItem l={l} news={props.newButton}/>)}
    </div>
  )
}

export default Languagelist
