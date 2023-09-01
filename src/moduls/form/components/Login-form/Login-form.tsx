import '../../../../styles/main.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormInput } from '../../../../interfaces/app.interface.ts';
import Fpass from '../../../../components/Fpass/Fpass.tsx';
import patternEmail from '../../pattern/pattern-email.tsx';
import style from './Login-form.module.scss'
import {FC, useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";


const Form:FC = () => {
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
  const navigation = useNavigate()
  const onSubmit: SubmitHandler<IFormInput> = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert('Вы вошли')
            navigation('/main')
        })
        .catch(() => {
          alert('Что-то не так')
        });
    reset();
  };

  return (
    <form className={style.contentForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.contentInputWrapper}>
        <input
          maxLength={30}
          minLength={8}
          className={style.Input}
          {...register('email', {
            required: true,
            maxLength: 20,
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
          maxLength={20}
          minLength={8}
          className={style.Input}
          {...register('pass', {
            required: true,
            maxLength: 20,
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