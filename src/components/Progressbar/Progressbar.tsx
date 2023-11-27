import { FC } from 'react';
import style from './Progressbar.module.scss';

const Progressbar: FC = () => {
    return (
        <div className={style.contentProgressBar}>
            <div className={style.textWrapper}>
                <span className={style.progressBarText}>Заполнено</span>
                <span className={style.progressBarText}>{1}</span>
            </div>
            <progress value={1} max={100} className={style.progressBar}></progress>
        </div>
    )
}

export default Progressbar;
