import { useForm } from 'react-hook-form';
import {IFormInput} from '../../../../app.interface.ts';
import Fpass from '../../../../components/Fpass/Fpass.tsx';
import patternEmail from '../../pattern/pattern-email.tsx';
import style from './Login-form.module.scss'
import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../store";
import fetchAuth from "../../../../store/thunk/fetchAuth.ts";
import {selectIsAuth} from "../../../../store/slices/auth.ts";
import {useNavigate} from "react-router-dom";

const Form:FC = () => {
    const isAuth = useSelector(selectIsAuth)
    console.log(isAuth)
    const isAuthToken = window.localStorage.getItem('token')
    console.log(isAuthToken)
    const dispatch = useDispatch<AppDispatch>()
    const navigateToTasks = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors},
  } = useForm<IFormInput>({
      defaultValues: {
          email: '',
          password: '',
      },
    mode: 'onSubmit',
  });
    
    useEffect(() => {
        if (isAuthToken) {
            navigateToTasks('/tasks')
        }
    },[isAuth, isAuthToken, navigateToTasks])

  const onSubmit = async (values: any) => {
      const data = await dispatch(fetchAuth(values))
      console.log(data)
      if (!data.payload) {
          alert('Не удалось авторизоваться')
      }
      if ('token' in data.payload) {
          window.localStorage.setItem('token', data.payload.token)
      } else {
          alert('Не удалось авторизоваться')
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
      <Fpass />
      <button type="submit" className={`${style.btnReset} ${style.contentFormBtn} ${style.Margin24}`}>Войти</button>
    </form>
  )
}

export default Form;