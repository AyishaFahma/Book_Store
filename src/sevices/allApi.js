
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


//google login api
export const googleLoginApi = async(reqBody)=>{
    return await commonApi('POST', `${serverurl}/google-login` , reqBody)
}


//api to get latest 4 book in home
export const homeBookApi = async() =>{
    return commonApi('GET' , `${serverurl}/home-books`)
}


//api to get all jobs in both user and admin
export const getallJobsApi = async(searchKey)=>{
    return await commonApi('GET', `${serverurl}/all-jobs?search=${searchKey}`)
}


//api to edit profile
export const editprofileApi = async(reqBody , reqHeader)=>{
    return await commonApi('PUT' , `${serverurl}/edit-profile` , reqBody , reqHeader)
}



// ----------------------------------------------------------------
//                          USER API'S

// api to add a book by user only logined user so we have to check wheather the user has token or not so this data place in req header
// req header is not mandatory , inthis case we want that so in axios declaring part(commonapi) these reqheader must be placed

export const addBookApi = async( reqBody , reqHeader ) =>{
    return commonApi('POST' , `${serverurl}/add-book` , reqBody , reqHeader)
}



// api to get all books - user Books page
// here searchKey is a query parameter
// query parameter syntax => baseurl?key=searchvalue

export const allBooksUserApi = async(reqHeader , searchKey) => {
    return await commonApi('GET' , `${serverurl}/all-books-user?search=${searchKey}` , "" , reqHeader)
}




//api to view a perticular book so we need id for 
export const viewBookApi = async(id) => {
    return await commonApi('GET' , `${serverurl}/view-book/${id}`)
}



// api to get all user added book
export const allUserAddedBookApi = async(reqHeader) =>{
    return await commonApi('GET' , `${serverurl}/all-user-added-books` , "" , reqHeader)
}



// api to get all user brought book

export const allUserbroughtBookApi = async(reqHeader) => {
    return await commonApi('GET' , `${serverurl}/all-user-brought-books` , "" , reqHeader)
}


// api to delete a book by the user
export const removeBookApi = async(id) => {
    return await commonApi('DELETE' , `${serverurl}/delete-book/${id}`)
}


//api to add application
export const addApplicationApi = async(reqBody , reqHeader)=>{
    return await commonApi('POST', `${serverurl}/add-application` , reqBody , reqHeader)
}


//api to make payment
export const makePaymentApi = async(reqBody , reqHeader)=>{
    return await commonApi('PUT' , `${serverurl}/make-payment` , reqBody , reqHeader )
}



//---------------------ADMIN-------------------------




//api to get all book for approval rejection 
export const allBookApi = async()=>{
    return await commonApi('GET' , `${serverurl}/all-books`)
}


//api to approve book by admin
export const approveBookApi = async(id)=> {
    return await commonApi('PUT' ,`${serverurl}/approve-Book/${id}` )
}


//api to get all users
export const getAllUsersApi = async()=>{
    return await commonApi('GET' , `${serverurl}/all-users`)
}



//api to add job
export const addJobApi = async(reqBody)=>{
    return await commonApi('POST' , `${serverurl}/add-job` , reqBody)
}

//api to delete a job
export const removeJobApi = async(id)=>{
    return await commonApi('DELETE' , `${serverurl}/delete-job/${id}`)
}

//api to get all application
export const getAllApplicationApi = async()=>{
    return await commonApi('GET' , `${serverurl}/all-application`)
}