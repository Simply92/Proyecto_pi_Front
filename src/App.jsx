import './App.css';
import Landing from './components/Landing_Page/Landing';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import ErrorPage from './components/ErrorPage/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Form/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
