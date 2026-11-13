import './App.css';
import React, { useState } from 'react';
import {Routes, Route, HashRouter} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import IndexPage from "./pages/IndexPage";
import CVPage from "./pages/CVPage";
import Footer from "./components/Footer";


function App() {
    const [language, setLanguage] = useState('en');
    
    return (
        <div className="flex flex-col items-center bg-primary">
            <HashRouter>
                <Toolbar language={language} setLanguage={setLanguage} />
                <div className="w-full bg-primary">
                    <Routes>
                        <Route path="/" element={<IndexPage language={language} />} />
                        <Route path="/cv" element={<CVPage language={language}/>} />
                    </Routes>
                </div>
                <Footer language={language} />
            </HashRouter>
        </div>
    );
}

export default App;
