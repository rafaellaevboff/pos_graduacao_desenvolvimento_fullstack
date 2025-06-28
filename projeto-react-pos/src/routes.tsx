import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Conteudo from './pages/Conteudo';
import Navbar from './components/Navbar';
import Template from './components/Template';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
    return(
        <div className='container-fluid px-0 bg-warning'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Template/>}>
                        <Route index element={<Home/>} />
                        <Route path="/conteudo" element={<Conteudo/>} />
                    </Route>
                    <Route path="/sobre" element={<Sobre/>} />
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default AppRoutes;