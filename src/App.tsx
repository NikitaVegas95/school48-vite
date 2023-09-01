import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import HomePage from "./pages/Home-page/Home-page.tsx";
import RegistrationPage from "./pages/Registration-page/Registration-page.tsx";
import MainPage from "./pages/Main-page/MainPage.tsx";

const App:FC = () => (
 <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/registration' element={<RegistrationPage />}/>
     <Route path='/main' element={<MainPage />}/>
 </Routes>
);

export default App;
