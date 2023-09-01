import {FC} from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import FormReg from "../../../../components/Form/Form.tsx";
import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux";

const RegistrationForm:FC = () => {
    // const dispatch = useDispatch();
    const navigation = useNavigate()

    const handleRegister = (email:string, password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Вы зарегистрировались')
                navigation('/')
            })
            .catch(() => {
                alert('Что-то делаете не так')
            })
    }
    return (
        <FormReg title='Регистрация' handleClick={handleRegister} />
    );
};

export default RegistrationForm;