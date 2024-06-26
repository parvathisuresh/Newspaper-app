import logo from './logo.svg';
import './App.css';
import Addnewspaper from './components/Addnewspaper';
import SearchNewspaper from './components/SearchNewspaper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewSubscriberpage from './components/ViewSubscriberpage';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Addnewspaper/>}/>
      <Route path="/view"element={<ViewSubscriberpage/>}/>
      <Route path="/search"element={<SearchNewspaper/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
