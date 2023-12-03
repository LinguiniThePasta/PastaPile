// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage.tsx';
import About from './pages/About Me.tsx';
import Projects from './pages/Projects.tsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;