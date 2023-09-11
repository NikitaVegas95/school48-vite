import { getDatabase, ref, set } from "firebase/database";
import {WriteUser} from "../../interfaces/app.interface.ts";


const writeUserData:WriteUser = (userId, name, email, password) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        password : password
    });
}

export default writeUserData;