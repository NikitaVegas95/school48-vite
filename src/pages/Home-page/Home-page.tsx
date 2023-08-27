import { FC } from 'react';
import '../../styles/main.scss';
import Title from '../../components/Title/Title.tsx';
import Text from '../../components/Text/Text.tsx';
import Name from '../../components/Name/Name.tsx';
import LoginForm from '../../moduls/form/components/Login-form/Login-form.tsx';
import style from './Home.module.scss';
import {Link} from "react-router-dom";

const HomePage: FC = () => {
  const mainTitle = 'Авторизация';
  const homePageText = 'Только для зарегистрированных пользователей';
  return (
    <div className={style.Container}>
      <div className={style.Img}></div>
      <div className={style.Content}>
        <Name />
        <Title title={mainTitle} />
        <Text title={homePageText} />
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
