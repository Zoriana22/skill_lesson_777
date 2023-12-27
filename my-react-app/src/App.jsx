import { useState } from 'react';
import './App.css';
import CardList from './MainPage/CardList';
import CardListWrapper from './MainPage/CardListWrapper';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CardListWrapper />
      </div>

    </>
  )
}

export default App
