import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [greeting, setGreeting] = useState({});

  async function fetchGreeting() {
    const response = await fetch("http://localhost:3001/find");
    setGreeting(await response.json());
  }

  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{greeting.greeting} + React</p>
        <p>Hello MERN</p>
      </header>
    </div>
  );
}

export default App;
