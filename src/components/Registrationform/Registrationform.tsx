import {FC, useState} from 'react';


const FormReg:FC<any> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fullName, setFullName] = useState('');

    return (
        <div>
            <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)}/>
            <input type="text" value={fullName} placeholder="fullName" onChange={(e) => setFullName(e.target.value)}/>
            <button onClick={() => handleClick(email, pass)}>{title}</button>
        </div>
    );
};

export default FormReg;