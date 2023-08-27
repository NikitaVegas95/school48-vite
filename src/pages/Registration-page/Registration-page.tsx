import { FC } from 'react';
import Title from '../../components/Title/Title.tsx';
import Progressbar from '../../components/Progressbar/Progressbar.tsx';
import style from './Registration.module.scss';
import RegistrationForm from "../../moduls/form/components/Registration-form/Registration-form.tsx";

const RegistrationPage: FC = () => {
    const titleReg = 'Регистрация';
    return (
        <div className={style.Container}>
            <div className={style.Img}></div>
            <div className={style.Content}>
                <Title title={titleReg}/>
                <Progressbar/>
                <RegistrationForm/>
            </div>
        </div>
    );
};

export default RegistrationPage;
