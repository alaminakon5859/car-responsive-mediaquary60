import { useContext } from "react"
import { Authcontext } from "../Contex/AuthProvider"

const useAuth=()=>{
    return useContext(Authcontext);
}
export default useAuth;