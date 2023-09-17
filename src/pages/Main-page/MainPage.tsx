import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";
import fetchTasks from "../../store/thunk/fetchTasks.ts";

const getTasks = state => state.task.tasks

const MainPage:FC = () => {
    const setTasks = useSelector(getTasks)
    console.log(setTasks)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    return (
        <div>
            {setTasks.map((task, index) => (
                <div key={index}>
                    <h1>{task.title}</h1>
                    <p>{task.text}</p>
                    <p>{task._id}</p>
                </div>
            ))}
        </div>
    );
};

export default MainPage;