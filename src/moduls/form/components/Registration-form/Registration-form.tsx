import {FC} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import FormReg from "../../../../components/Registrationform/Registrationform.tsx";
import {useNavigate } from "react-router-dom";
import {WriteUser} from "../../../../interfaces/app.interface.ts";
import {auth} from "../../../../firebase.ts";
import writeUserData from "../../../../db/write/writeUserData.ts";

const RegistrationForm:FC = () => {
    const navigation = useNavigate()
    const handleRegister:WriteUser = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            writeUserData(email, password)
            navigation('/')
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <FormReg title='Регистрация' handleClick={handleRegister} />
    );
};

export default RegistrationForm;