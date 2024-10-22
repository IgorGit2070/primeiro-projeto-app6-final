import logo from './logo.svg';
import './App.css';

//Importar o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar o gerenciador de rotas
import { BrowserRouter , Route, Routes } from "react-router-dom"

//Importar as páginas
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

//Importar a NavBar
import NavBarra from './components/NavBarra';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarra />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
