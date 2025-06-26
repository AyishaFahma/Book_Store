
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


//api to get latest 4 book in home
export const homeBookApi = async() =>{
    return commonApi('GET' , `${serverurl}/home-books`)
}



// ----------------------------------------------------------------
//                          USER API'S

// api to add a book by user only logined user so we have to check wheather the user has token or not so this data place in req header
// req header is not mandatory , inthis case we want that so in axios declaring part(commonapi) these reqheader must be placed

export const addBookApi = async( reqBody , reqHeader ) =>{
    return commonApi('POST' , `${serverurl}/add-book` , reqBody , reqHeader)
}



// api to get all books - user
export const allBooksUserApi = async(reqHeader) => {
    return await commonApi('GET' , `${serverurl}/all-books-user` , "" , reqHeader)
}

//api to view a book
export const viewBookApi = async(id) => {
    return await commonApi('GET' , `${serverurl}/view-book/${id}`)
}