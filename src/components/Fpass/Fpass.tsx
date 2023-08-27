import { FC } from 'react';
import style from "./Fpass.module.scss";
import { Link } from 'react-router-dom';

const Fpass: FC = () => (
  <div className={style.resetWrapper}>
    <Link to=" " className={style.resetPass}>
      Забыли пароль?
    </Link>
  </div>
);

export default Fpass;
