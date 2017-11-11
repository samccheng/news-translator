import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewsButton from './components/Newsbutton'
import Languagelist from './components/Languagelist'
import NewsBox from './components/NewsBox'
import apiKey from './api-key'

class App extends Component {
  state = {
    languages: ["spanish", "french", "japanese"],
    news: []
  }

  newsHandler = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
    .then( res => res.json())
    .then( data => this.setState({
      news: data.results
    }) )
  }

  newsTranslate = () => {
    alert('translated')
  }

  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <NewsButton click={this.newsHandler}/>
            <Languagelist languages={this.state.languages} newButton={this.newsTranslate}/>
            <NewsBox news={this.state.news}/>
          </div>
       </MuiThemeProvider>
    );
  }
}

export default App;
