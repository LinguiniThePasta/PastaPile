// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage.tsx';
import Projects from './pages/Projects.tsx';
import ControlPanel from "./pages/Control Panel.tsx";
import AboutMe from "./pages/About Me.tsx";
import Login from "./components/Login.tsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Projects />} />
                <Route path="/about" element={<AboutMe/>} />
                <Route path="/control" element={<ControlPanel />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;