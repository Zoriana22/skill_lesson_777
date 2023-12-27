import { useState } from 'react';
import './App.css';
import CardList from './MainPage/CardList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CardList />
      </div>

    </>
  )
}

export default App
