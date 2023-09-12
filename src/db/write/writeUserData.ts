import { collection, addDoc } from "firebase/firestore";
import {WriteUser} from "../../interfaces/app.interface.ts";
import {db} from "../../firebase.ts";


const writeUserData:WriteUser = async (email, password) => {
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            email,
            password,
        })
        console.log("Document written with ID: ", docRef.id)
    } catch (error) {
        console.error(error)
    }
}

export default writeUserData;