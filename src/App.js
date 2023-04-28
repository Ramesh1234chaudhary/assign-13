import { Routes, Route } from 'react-router-dom'
import './App.css';
import FormItem from './componets/FormItem';
import Item from './componets/Item';
import Nav from './componets/Nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={ <Item /> } />
        <Route path='/form' element={ <FormItem /> } />
      </Routes>
          </div>
          );
        }
        export default App;
          