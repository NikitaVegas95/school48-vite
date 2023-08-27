import {FC} from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import FormReg from "../../../../components/Form/Form.tsx";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const RegistrationForm:FC = () => {
    const handleRegister = (email:string, password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then()
            .catch(error)
    }
    return (
        <FormReg title='Регистрация' handleClick={handleRegister} />

    );
};

export default RegistrationForm;