import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged} from "firebase/auth";
import initializeathentication from "../pages/Login/Firebase/Firebase.init";



initializeathentication();

const useFirebase=()=> {
    const [user, setUsers]=useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const signinusinggoogle=()=>{
        signInWithPopup(auth, provider)
         .then(result=>{
             setUsers(result.user);
         })

    }
      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUsers(user);
              
            } else {
                setUsers({});
             
            }
          });
      },[])
    const logOut=()=>{
        signOut(auth)
        .then(()=>{});
    }
    return{
        user,
        logOut,
        signinusinggoogle
    }
}

export default useFirebase;