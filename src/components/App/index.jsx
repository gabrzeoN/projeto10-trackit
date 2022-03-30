import { useState, useContext } from "react";
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import styledComponents from "styled-components";

import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";

import UserContext from "../../contexts/UserContext";

export default function App(){
    const [token, setToken] = useState(null);


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

/*

<UserContext.Provider value={ {token, setToken} } >
    <Route path="/habitos" element={<HabitsPage />} />
    <Route path="/hoje" element={<TodayPage />} />
    <Route path="/historico" element={<HistoryPage />} />
</UserContext.Provider>

*/