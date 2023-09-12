import '../../../../styles/main.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import {IFormInput, WriteUser} from '../../../../interfaces/app.interface.ts';
import Fpass from '../../../../components/Fpass/Fpass.tsx';
import patternEmail from '../../pattern/pattern-email.tsx';
import style from './Login-form.module.scss'
import {FC, useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../../../../firebase.ts";
import {setUser} from "../../../../store/slices/userSlice.ts";
import {useAppDispatch} from "../../../../hooks/redux-hooks.ts";
import readUserData from "../../../../db/read/readUserData.ts";


const Form:FC = () => {
    const navigation = useNavigate();
    const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onSubmit',
  });
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const onSubmit: WriteUser = async (email, password) => {
      try {
          await signInWithEmailAndPassword(auth, email, password)
          .then(({user}) => {
              dispatch(setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.refreshToken,
              }))
              readUserData()
              navigation('/main')
          })
          .catch(console.error)

      } catch (err) {
          console.error(err)
      }

    reset();
  };

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
          onChange={(e) => setEmail(e.target.value)}
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
          {...register('pass', {
            required: true,
            maxLength: 40,
          })}
          type="password"
          placeholder=" "
          onChange={(e) => setPass(e.target.value)}
        />
        <div>
          {errors?.pass && <span className={style.emptyInputError}>Обязательное поле для ввода</span>}
        </div>
        <label className={style.Placeholder} htmlFor="pass">
          Пароль
        </label>
      </div>
      <Fpass />
      <button className={`${style.btnReset} ${style.contentFormBtn} ${style.Margin24}`}>Войти</button>
    </form>
  );
}

export default Form;