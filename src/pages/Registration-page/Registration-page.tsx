import {FC} from 'react';
import style from './Registration.module.scss';
import RegistrationForm from "../../moduls/form/components/Registration-form/Registration-form.tsx";
import {StrProps} from "../../app.interface.ts";

const RegistrationPage: FC = () => {
    const titleReg: StrProps = 'Регистрация';
    return (
        <div className={style.Container}>
            <div className={style.Img}></div>
            <div className={style.Content}>
                <h1 className={style.contentTitle}>{titleReg}</h1>
                <RegistrationForm/>
            </div>
        </div>
    );
};

export default RegistrationPage;
