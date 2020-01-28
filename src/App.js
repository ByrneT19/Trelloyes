import React, {Component} from 'react';
import List from './List';
import './App.css';

class App extends Component {

  state = {
    store: {
      lists: [],
      allCards: {}
    }
  }; 

  deleteItemButton() {
    console.log('delete item clicked')
  }

  addRandomCardButton() {
    console.log('random card button clicked')
  }

  render() {
    const { store } = this.props
    return (
      <div>
        <main className='App'>
          <header className='App-header'>
            <h1>Trelloyes!</h1>
          </header>
          <div className='App-list'>
            {store.lists.map(list => (
              <List 
                key={list.id}
                header={list.header}
                card={list.cardIds.map(id => store.allCards[id])}
                onDeleteItem={this.deleteItemButton}
                addRandomItem={this.addRandomCardButton}
              />
            ))}
          </div>
        </main>
      </div>
    )
  }
}

export default App


// Nick Chang10:20 PM
// let a = () => {};    Empty function