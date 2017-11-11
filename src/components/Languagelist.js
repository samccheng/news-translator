import React from 'react';
import LanguagelistItem from './LanguagelistItem'


const Languagelist = (props)=> {
  return (
    <div className="list">
      <h4>translate to</h4>
      {props.languages.map(language => <LanguagelistItem language={language} news={props.newButton}/>)}
    </div>
  )
}

export default Languagelist
