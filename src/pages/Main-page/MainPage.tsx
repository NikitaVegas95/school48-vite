import {Navigate} from 'react-router-dom'
import {FC} from "react";
import {removeUser} from '../../store/slices/userSlice.ts'
import {useAppDispatch} from "../../hooks/redux-hooks.ts";
import {useAuth} from "../../hooks/useAuth.ts";

const MainPage:FC = () => {
    const dispatch = useAppDispatch()
    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Привет {email}</h1>
            <button onClick={() => dispatch(removeUser())}>Выход {email}</button>
        </div>
        ) : (
            <div>
                <Navigate to='/'/>
            </div>
    );
};

export default MainPage;