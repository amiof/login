import React, {useState, useEffect} from 'react';
import validation from './validation';
import styles from "./signup.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [data, setData]= useState({
        name : "",
        email: "",
        password:"",
        confirmPassword:'',
        IsAccept :false

    })
    const [error , setError]=useState({})
    const [clicked , setClicked]=useState({})
   const changeHandler=(event)=>{
    if(event.target.name!=="IsAccept"){
        setData ({...data, [ event.target.name] :  event.target.value })
    }else {
        setData ({...data, [event.target.name]:event.target.checked })
    }
        
    }

    useEffect(()=>{
       setError(validation(data)) 
    },[data])

    const focusHandler= (event)=>{
        setClicked({...clicked, [event.target.name]: true })

    }
    console.log (clicked)


    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

   
    return (
        <div className={styles.container}>
            <form>
                <h1>sign up</h1>
                <div className={error.name&& clicked.name? styles.formfildsError:styles.formfilds}>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                    <span>{error.name&& clicked.name && error.name}</span>
                </div>
                <div className={error.email&& clicked.email? styles.formfildsError:styles.formfilds}>
                    <label>email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                     <span>{error.email&& clicked.email && error.email}</span>
                </div>
                <div  className={error.password&& clicked.password?styles.formfildsError:styles.formfilds} >
                    <label>password</label>
                    <input  type="password"name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                     <span>{error.password&& clicked.password && error.password}</span>
                </div>
                <div  className={error.confirmPassword&& clicked.confirmPassword ?styles.formfilds:styles.formfilds}>
                    <label>confirmPassword</label>
                    <input  type="password"name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                     <span>{error.confirmPassword&& clicked.confirmPassword && error.confirmPassword}</span>
                </div>
                < div className={styles.policy}>
                    <label>I Accept term of policy </label>
                    <input type="checkbox" name="IsAccept" value={data.IsAccept} onChange={changeHandler} onFocus={focusHandler}/>
                    <span className={styles.policySpan}>{error.IsAccept&& clicked.IsAccept && error.IsAccept}</span>
                     
                </div>
                <div className={styles.buttonContainer}>
                    <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />

                    <button onClick={notify} id={styles.login}>login</button>
                    <button onClick={notify} id= {styles.signup}>sign up </button>
                     <ToastContainer />
                </div>


        
            </form>
           
        </div>
    );
};

export default Signup;