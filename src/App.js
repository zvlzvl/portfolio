import './App.css';
import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import IndexPage from "./pages/IndexPage";
import CVPage from "./pages/CVPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="flex flex-col items-center bg-primary">
            <BrowserRouter>
                <Toolbar />
                <div className="w-full bg-primary">
                    <Routes>
                        <Route path="zvPortfolio/" element={<IndexPage />} />
                        <Route path="zvPortfolio/cv" element={<CVPage />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
