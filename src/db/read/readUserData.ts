import {collection, getDocs} from 'firebase/firestore';
import {db} from "../../firebase.ts";

const readUserData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`)
        })
    } catch (error) {
        console.error(error)
    }

}

export default readUserData