import React from 'react';
import NewsBoxItem from './NewsBoxItem'

const NewsBox = (props) => {
  return (
    <div className="box">
      {props.news.map( item =>  <NewsBoxItem news={item.title} />)}
    </div>
  )
}

export default NewsBox
