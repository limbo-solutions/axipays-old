import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ComingSoonPage from './assets/jsx/pages/comingsoon';
import './assets/style/main-style.css'

import Animation from "./assets/jsx/components/animation"
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ComingSoonPage />}></Route>    
                    <Route path="/animation" element={<Animation />}></Route>  
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
