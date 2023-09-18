import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";
import fetchTasks from "../../store/thunk/fetchTasks.ts";
import {logout} from "../../store/slices/auth.ts";
import {useNavigate} from "react-router-dom";

const getTasks = state => state.task.tasks

const MainPage:FC = () => {
    const setTasks = useSelector(getTasks)
    const dispatch = useDispatch<AppDispatch>()
    const isAuthToken = window.localStorage.getItem('token')
    const navigateToLogin = useNavigate()

    useEffect(() => {
        if (isAuthToken) {
            dispatch(fetchTasks())
        }
        if (!isAuthToken) {
            navigateToLogin('/')
        }
    }, [])

    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
        if (isAuthToken) {
            navigateToLogin('/')
        }
    }



    return (
        <div>
            {setTasks.map((task, index) => (
                <div key={index}>
                    <h1>{task.title}</h1>
                    <p>{task.text}</p>
                    <p>{task._id}</p>
                </div>
            ))}
            <div>
                <button onClick={onClickLogout}>выход</button>
            </div>
        </div>
    );
};

export default MainPage;