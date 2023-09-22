import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";
import fetchTasks from "../../store/thunk/fetchTasks.ts";
import {logout} from "../../store/slices/auth.ts";
import {useNavigate} from "react-router-dom";
import style from './MainPage.module.scss';
import fetchAuthMe from "../../store/thunk/fetchAuthMe.ts";

const getTasks = (state:any) => {
    return state.taskSlice.tasks;
}

const getUser = (state:any) => {
    return state.authMeSlice.authMe.fullName
}

const MainPage:FC = () => {
    const setTasks = useSelector(getTasks)
    const setUser = useSelector(getUser)
    const dispatch = useDispatch<AppDispatch>()
    const isAuthToken = window.localStorage.getItem('token')
    const navigateToLogin = useNavigate()

    useEffect(() => {
        if (isAuthToken) {
            dispatch(fetchTasks())
            dispatch(fetchAuthMe())
        }
        if (!isAuthToken) {
            navigateToLogin('/')
        }
    }, [dispatch, isAuthToken, navigateToLogin])

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
        <div className={style.container}>
            <aside className={style.asideContainer}>
                <div className={style.asideBtnsWrapper}>
                    <button className={`${style.btnReset} ${style.asideBtns}`}>
                        Главная
                    </button>
                    <button className={`${style.btnReset} ${style.asideBtns}`}>
                        Мои варианты
                    </button>
                </div>
                <button className={`${style.btnReset} ${style.exitBtn}`} onClick={onClickLogout}>Выйти</button>
            </aside>
            <header className={style.header}>
                <div className={style.user}>
                    Привет, {setUser}
                </div>
            </header>
            <div className={style.main}>
                <div className={style.mainTasks}>
                    {setTasks.map((task:any, index:any) => (
                        <div className={style.taskWrapper} key={index}>
                            <h1>{task.title}</h1>
                            <p>{task.text}</p>
                            <p>{task._id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;