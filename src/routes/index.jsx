import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<News/>} path="/news"/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;