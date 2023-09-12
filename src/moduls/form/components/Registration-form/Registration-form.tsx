import {FC} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import FormReg from "../../../../components/Registrationform/Registrationform.tsx";
import {useNavigate } from "react-router-dom";
import {WriteUser} from "../../../../interfaces/app.interface.ts";
import {auth} from "../../../../firebase.ts";
import {setUser} from "../../../../store/slices/userSlice.ts";
import {useAppDispatch} from "../../../../hooks/redux-hooks.ts";
import writeUserData from "../../../../db/write/writeUserData.ts";

const RegistrationForm:FC = () => {
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const handleRegister:WriteUser = async (email:string, password:string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                writeUserData(email, password)
                navigation('/')
            })
            .catch(console.error)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <FormReg title='Регистрация' handleClick={handleRegister} />
    );
};

export default RegistrationForm;