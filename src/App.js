import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DeshBoard from './components/DeshBoard/DeshBoard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/deshboard" element={<DeshBoard></DeshBoard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
