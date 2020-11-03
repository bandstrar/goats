import React from 'react';
import GoatCorral from '../components/GoatCorral';
import '../styles/_app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Goat Yoga</h2>
        <GoatCorral />
      </div>
    );
  }
}

export default App;
