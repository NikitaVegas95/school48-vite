import {FC, useEffect} from "react";
import {fetchTasks} from "../../store/slices/taskSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";

const getTask = (state) => state.task


const MainPage:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const task = useSelector(getTask)
    console.log(task)



    useEffect(() => {
        dispatch(fetchTasks())
    }, [])


    return  (

        <div>

        </div>
    );
};

export default MainPage;