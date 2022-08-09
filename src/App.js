import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Counter from './feature/counter/Counter';

function App() {
  const c = useSelector((state)=> state.count.sar.name);
  return (
    <div className="App">
     <Counter/>
     <p>{c}</p>
     <img src={logo} />
    </div>
  );
}

export default App;
