
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



// ----------------------------------------------------------------
//                          USER API'S

// api to add a book by user only logined user so we have to check wheather the user has token or not so this data place in req header
// req header is not mandatory , inthis case we want that so in axios declaring part(commonapi) these reqheader must be placed

export const addBookApi = async( reqBody , reqHeader ) =>{
    return commonApi('POST' , `${serverurl}/add-book` , reqBody , reqHeader)
}
