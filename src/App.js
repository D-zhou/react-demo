import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
	
	state = {
		characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
	}

	removeCharacterData = (index) => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			}),
		});
	}

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character] })
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Table characterData={ this.state.characters } removeCharacterData={ this.removeCharacterData } />
					<Form handleSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
