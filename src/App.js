import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ComingSoonPage from './assets/jsx/pages/comingsoon';
import './assets/style/main-style.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ComingSoonPage />}></Route>    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
