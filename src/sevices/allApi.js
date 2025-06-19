
import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"


// api for register
export const registerApi = async(reqBody) =>{
    return commonApi( 'POST' , `${serverurl}/register` , reqBody)
}

//login api
export const loginApi = async(reqBody) =>{
    return commonApi( 'POST' , `${serverurl}/login` , reqBody)
}
