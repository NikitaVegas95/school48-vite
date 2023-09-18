import {Route, Routes} from "react-router-dom";
import {FC, useEffect} from "react";
import HomePage from "./pages/Home-page/Home-page.tsx";
import RegistrationPage from "./pages/Registration-page/Registration-page.tsx";
import MainPage from "./pages/Main-page/MainPage.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "./store";
import {selectIsAuth} from "./store/slices/auth.ts";
import featchAuthMe from "./store/thunk/featchAuthMe.ts";

const App:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isAuth = useSelector(selectIsAuth)
    useEffect(() => {
        dispatch(featchAuthMe())
    }, [])

    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/registration' element={<RegistrationPage />}/>
            <Route path='/tasks' element={<MainPage />}/>
        </Routes>
    )
};

export default App;
