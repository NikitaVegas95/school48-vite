import {FC} from 'react';
import {useForm} from "react-hook-form";
import {IFormInputTask} from "../../../../app.interface.ts";
import style from '../../../form/components/Login-form/Login-form.module.scss'
import axios from "../../../../axios.ts";


const CreateTaskForm:FC = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormInputTask>({
        defaultValues: {
            title: '',
            text: '',
        },
        mode: 'onChange',
    })

    const onSubmit = async (value:any) => {
        try {
            const { data } = await axios.post('/task/create', value)
            return data
        } catch (err) {
            console.log(err)
            alert('Ошибка создания статьи')
        }
    }

    return (
        <form className={style.contentForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.contentInputWrapper}>
                <input
                    autoComplete='on'
                    maxLength={256}
                    minLength={3}
                    className={style.Input}
                    {...register('title', {
                        required: true,
                        maxLength: 256,
                    })}
                    type=" "
                    placeholder=" "
                />
                <div>
                    {errors?.title && <span className={style.emptyInputError}>Обязательное поле для ввода</span>}
                </div>
                <label className={style.Placeholder} htmlFor="title">
                    Заголовок задачи
                </label>
            </div>
            <div className={style.contentInputWrapperMargin}>
                <input
                    autoComplete='on'
                    maxLength={256}
                    minLength={3}
                    className={style.Input}
                    {...register('text', {
                        required: true,
                        maxLength: 256,
                    })}
                    type="text"
                    placeholder=" "
                />
                <div>
                    {errors?.text && <span className={style.emptyInputError}>Обязательное поле для ввода</span>}
                </div>
                <label className={style.Placeholder} htmlFor="text">
                    Текст задачи
                </label>
            </div>
            <button type="submit" className={`${style.btnReset} ${style.contentFormBtn} ${style.Margin24}`}>Создать задачу</button>
        </form>
    );
};

export default CreateTaskForm;