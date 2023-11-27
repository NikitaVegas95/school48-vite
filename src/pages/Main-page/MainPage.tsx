import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";
import fetchTasks from "../../store/thunk/fetchTasks.ts";
import {logout} from "../../store/slices/auth.ts";
import {useNavigate} from "react-router-dom";
import style from './MainPage.module.scss';
import fetchAuthMe from "../../store/thunk/fetchAuthMe.ts";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {IAuthToken, IGetTasks} from "../../app.interface.ts";

const getTasks = (state: any) => state.taskSlice.tasks;
const getUser = (state: any) => state.authMeSlice.authMe.fullName

const MainPage:FC = () => {
    const setTasks = useSelector(getTasks)
    const setUser = useSelector(getUser)
    const dispatch = useDispatch<AppDispatch>()
    const isAuthToken: IAuthToken = window.localStorage.getItem('token')
    const navigateToLogin = useNavigate()

    useEffect(() => {
        if (isAuthToken) {
            dispatch(fetchTasks())
            dispatch(fetchAuthMe())
        }
        if (!isAuthToken) return navigateToLogin('/')
    }, [dispatch, isAuthToken, navigateToLogin])

    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        if (isAuthToken) return navigateToLogin('/')
    }

    const [ tabIndex, setTabIndex] = useState(0)

    return (
        <Tabs className={style.container} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <aside className={style.asideContainer}>
                <TabList className={`${style.asideBtnsWrapper} ${style.listReset}`}>
                    <Tab className={`${style.tabsText} ${style.asideBtns}`}>
                        Главная
                    </Tab>
                    <Tab className={`${style.tabsText} ${style.asideBtns}`}>
                        Мои варианты
                    </Tab>
                </TabList>
                <button className={`${style.btnReset} ${style.exitBtn}`} onClick={onClickLogout}>Выйти</button>
            </aside>
            <header className={style.header}>
                <div className={style.user}>
                    Привет, {setUser}
                </div>
            </header>
            <div className={style.main}>
                <TabPanel className={style.mainTasksContainer}>
                    <div className={style.mainTasks}>
                        {setTasks.map((task: IGetTasks, index: number) => (
                            <div className={style.taskWrapper} key={index}>
                                <h1>{task.title}</h1>
                                <p>{task.text}</p>
                                <p>{task._id}</p>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default MainPage;