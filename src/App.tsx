import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import HomePage from "./pages/Home-page/Home-page.tsx";
import RegistrationPage from "./pages/Registration-page/Registration-page.tsx";
import MainPage from "./pages/Main-page/MainPage.tsx";
// import {useDispatch} from "react-redux";
// import {AppDispatch} from "./store";
// import fetchAuthMe from "./store/thunk/fetchAuthMe.ts";

const App:FC = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/registration' element={<RegistrationPage />}/>
            <Route path='/tasks' element={<MainPage />}/>
        </Routes>
    )
};

export default App;
