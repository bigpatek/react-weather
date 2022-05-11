import React from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home/Components/Home";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./Shared/Header/Header";



function App() {
  return (
    <div className="container">
        <Header />
        <Home />
        <Routes>
            <Route path={'/Home'} element={<Home />} />
            <Route path={'/MonthStatistics'} element={<MonthStatistics />} />
        </Routes>
    </div>
  );
}

export default App;
