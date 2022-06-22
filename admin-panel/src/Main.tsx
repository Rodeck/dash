import { Routes, Route } from 'react-router-dom';
import Expenses from './components/expenses/Expenses';
import Trello from './components/trello/Trello';
import Home from './Home';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/expenses' element={<Expenses/>} />
    <Route path='/trello' element={<Trello/>} />
  </Routes>
);
}
export default Main;