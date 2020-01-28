import React, {Component} from 'react';
import List from './List';
import STORE from './store';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {

  state = {
    store: STORE,
  }; 

  deleteItemButton = (cardId) => {
    const {lists, allCards} = this.state.store;
    const newArray = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }))

    const newCard = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newArray,
        allCards: newCard
      }
    })
  }

  

  addRandomCardButton = (listId) => {
    const newToken = newRandomCard()
    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newToken.id]
        }
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newToken.id]: newToken
        }
      }
    })
  } 

  render() {
    const { store } = this.state
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
                id={list.id}
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