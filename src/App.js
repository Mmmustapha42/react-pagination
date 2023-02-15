
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [items , setItems] = useState([])
  const [visible , setVisible] = useState(3)


  const showMoreItems = () => {
    setVisible(prev => prev + 3);

  }


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => setItems(data))
  }, [])
  return (
    <div className="App">
      <div className='container'>
        {items.slice(0, visible).map(item => (
          <div className='card'>
            <div className='id'>
              <span>{item.id}</span>
              </div>
              <p>{item.body}</p>
              </div>
        ))}
        <button onClick={showMoreItems}>Load More</button>
      </div>
    </div>
  );
}

export default App;
