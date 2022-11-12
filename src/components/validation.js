

const validation = (data) => {
  const error={}
  if(!data.name){
    error.name = "please import your name"
  }else {
    delete error.name
  }
  if (!data.email){
    error.email="please import your email"
  }else if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.email)))
   {
    error.email="your email not valid"
   }else {
    delete error.email
   }
   if (!data.password){
    error.password= "please insert your password"
   }else if (data.password.length < 6){
    error.password="your password must be 6 characters"
   }else {
    delete error.password
   }
   if(!data.confirmPassword){
    error.confirmPassword= "please insert your password again"

   }else if (data.confirmPassword!==data.password){
    error.confirmPassword= "your password in not match"
   }else {
    delete error.confirmPassword
   }
   if (!data.IsAccept){
    error.IsAccept="please accept policy"
   }
   return error


} 

export default validation;