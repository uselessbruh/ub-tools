import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WebApps from './pages/WebApps';
import Apps from './pages/Apps';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<WebApps />} />
                        <Route path="/apps" element={<Apps />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
