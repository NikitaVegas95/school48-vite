import {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../store";
import {selectIsAuth} from "../../../../store/slices/auth.ts";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {IFormInputReg} from "../../../../app.interface.ts";
import style from "../Login-form/Login-form.module.scss";
import patternEmail from "../../pattern/pattern-email.tsx";
import fetchRegistration from "../../../../store/thunk/featchRegistration.ts";

const RegistrationForm:FC = () => {
    const isAuth = useSelector(selectIsAuth)
    const isAuthToken = window.localStorage.getItem('token')
    const dispatch = useDispatch<AppDispatch>()
    const navigateToTasks = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors},
    } = useForm<IFormInputReg>({
        defaultValues: {
            fullName: 'Никита',
            email: 'nikitavegas95@gmail.com',
            password: '',
        },
        mode: 'onSubmit',
    });

    const onSubmit = async (values:any) => {
        const data = await dispatch(fetchRegistration(values))
        console.log(data)
        if (!data.payload) {
            alert('Не удалось зарегистрироваться')
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        } else {
            alert('Не удалось зарегистрироваться')
        }
        reset();
    };

    if (isAuth && isAuthToken) {
        navigateToTasks('/tasks')
    }

    return (
        <form className={style.contentForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.contentInputWrapper}>
                <input
                    autoComplete='on'
                    maxLength={40}
                    minLength={2}
                    className={style.Input}
                    {...register('fullName', {
                        required: true,
                        maxLength: 40,
                    })}
                    type=" "
                    placeholder=" "
                />
                <div>
                    {errors?.fullName && <span className={style.emptyInputError}>Обязательное поле для ввода</span>}
                </div>
                <label className={style.Placeholder} htmlFor="fullName">
                    ФИО
                </label>
            </div>
            <div className={style.contentInputWrapper}>
                <input
                    autoComplete='on'
                    maxLength={40}
                    minLength={8}
                    className={style.Input}
                    {...register('email', {
                        required: true,
                        maxLength: 40,
                        pattern: patternEmail,
                    })}
                    type=" "
                    placeholder=" "
                />
                <div>
                    {errors?.email && <span className={style.emptyInputError}>Обязательное поле для ввода</span>}
                </div>
                <label className={style.Placeholder} htmlFor="email">
                    E-mail
                </label>
            </div>
            <div className={style.contentInputWrapperMargin}>
                <input
                    autoComplete='on'
                    maxLength={40}
                    minLength={8}
                    className={style.Input}
                    {...register('password', {
                        required: true,
                        maxLength: 40,
                    })}
                    type="password"
                    placeholder=" "
                />
                <div>
                    {errors?.password && <span className={style.emptyInputError}>Обязательное поле для ввода</span>}
                </div>
                <label className={style.Placeholder} htmlFor="pass">
                    Пароль
                </label>
            </div>
            <button type="submit" className={`${style.btnReset} ${style.contentFormBtn} ${style.Margin24}`}>Регистрация</button>
        </form>

    );
};

export default RegistrationForm;