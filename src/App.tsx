import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import HomePage from "./pages/Home-page/Home-page.tsx";
import RegistrationPage from "./pages/Registration-page/Registration-page.tsx";

const App:FC = () => (
 <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/registration' element={<RegistrationPage />}/>
 </Routes>
);

export default App;
