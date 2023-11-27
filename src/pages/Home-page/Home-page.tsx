import { FC } from 'react';
import LoginForm from '../../moduls/form/components/Login-form/Login-form.tsx';
import style from './Home.module.scss';
import {Link} from "react-router-dom";
import {StrProps} from "../../app.interface.ts";

const HomePage: FC = () => {
  const name: StrProps = 'Платформа для обучения'
  const mainTitle: StrProps = 'Авторизация';
  const homePageText: StrProps = 'Только для зарегистрированных пользователей';
  return (
    <div className={style.Container}>
      <div className={style.Img}></div>
      <div className={style.Content}>
        <h1 className={style.name}>{name}</h1>
        <h2 className={style.contentTitle}>{mainTitle}</h2>
        <p className={style.contentText}>{homePageText}</p>
        <LoginForm />
        <div className={style.contentRegWrapper}>
          <p className={`${style.contentText} ${style.contentTextGray}`}>Еще не зарегистрированы?</p>
          <Link to={'/registration'} className={`${style.btnReset} ${style.contentReg}`}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
