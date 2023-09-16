import { useForm } from 'react-hook-form';
import {IFormInput, WriteUser} from '../../../../interfaces/app.interface.ts';
import Fpass from '../../../../components/Fpass/Fpass.tsx';
import patternEmail from '../../pattern/pattern-email.tsx';
import style from './Login-form.module.scss'
import {FC} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../store";
import {fetchAuth} from "../../../../store/slices/auth.ts";

const Form:FC = () => {
    const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
      defaultValues: {
          email: 'test1@test.com',
          password: '741258963',
      },
    mode: 'onSubmit',

  });



  const onSubmit: WriteUser = async (values) => {
      dispatch(fetchAuth(values))
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
        />
        <div>
          {errors?.pass && <span className={style.emptyInputError}>Обязательное поле для ввода</span>}
        </div>
        <label className={style.Placeholder} htmlFor="pass">
          Пароль
        </label>
      </div>
      <Fpass />
      <button type="submit" className={`${style.btnReset} ${style.contentFormBtn} ${style.Margin24}`}>Войти</button>
    </form>
  );
}

export default Form;