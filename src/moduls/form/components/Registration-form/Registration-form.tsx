import {FC} from 'react';
import FormReg from "../../../../components/Registrationform/Registrationform.tsx";
import {WriteUser} from "../../../../interfaces/app.interface.ts";


const RegistrationForm:FC = () => {
    const handleRegister:WriteUser = async (email, password) => {
        try {
            await console.log(email,password)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <FormReg title='Регистрация' handleClick={handleRegister} />
    );
};

export default RegistrationForm;