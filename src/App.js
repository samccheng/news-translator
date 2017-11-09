import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
// import NewsButton from './components/Newsbutton'
import Languagelist from './components/Languagelist'
import NewsBox from './components/NewsBox'

class App extends Component {
  state = {
    lang: ["spanish", "french", "japanese"],
    news: 'daily news'
  }

  newsHandler = () => {
    return this.setState({
      lang: ['chinese']
    })
  }

  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <RaisedButton onClick={this.newsHandler} label="find daily news" primary={true} />
            <Languagelist lang={this.state.lang} newButton={this.newsHandler}/>
            <NewsBox news={this.state.lang[1]}/>
          </div>
       </MuiThemeProvider>
    );
  }
}

export default App;
