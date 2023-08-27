import { FC } from 'react';
import '../../styles/main.scss';
import style from './Progressbar.module.scss';

const Progressbar: FC = () => (
  <div className={style.contentProgressBar}>
    <div className={style.textWrapper}>
      <span className={style.progressBarText}>Заполнено</span>
      <span className={style.progressBarValue}>0%</span>
    </div>
    <div className={style.progressBar}></div>
  </div>
);

export default Progressbar;
