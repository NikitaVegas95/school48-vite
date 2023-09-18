import {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../../axios.ts";


const RegistrationForm:FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const userRegister = () => {
        dispatch(userRegistration(setEmail))
    }

    const userRegistration = createAsyncThunk('/registration/userRegistration', async (getState) => {
        try {
            await axios.post('/registration')
                .then((req) => {
                    getState(req)
                })
        } catch (err) {
            console.log(err)
        }

    })


    const [email, setEmail ] = useState('');
    const [pass, setPass] = useState('');
    const [fullName, setFullName] = useState('');


    return (
        <div>
            <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)}/>
            <input type="text" value={fullName} placeholder="fullName" onChange={(e) => setFullName(e.target.value)}/>
            <button onClick={() => userRegister()}>Регистрация</button>
        </div>
    );
};

export default RegistrationForm;