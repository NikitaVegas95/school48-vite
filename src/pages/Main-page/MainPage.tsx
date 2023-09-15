import {FC, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import fetchTasks from "../../req/get/getTask.ts";


const MainPage:FC = () => {
    const [task, setTask] = useState([]);
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTasks(setTask))
    }, [])

    return (
        <div>
            {task.map((task, index) => (
                <div key={index}>
                    <h1>{task.title}</h1>
                    <p>{task.text}</p>
                    <div>{task._id}</div>
                </div>
            ))}
        </div>
    );
};

export default MainPage;