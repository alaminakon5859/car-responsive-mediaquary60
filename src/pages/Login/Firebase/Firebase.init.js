import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeathentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeathentication;