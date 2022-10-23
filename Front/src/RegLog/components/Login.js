import {useRef, useState} from 'react';
import {post} from "../../plugins/http";
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();
    const emailRef = useRef()
    const passRef = useRef()

    const [msg, setMsg] = useState("")
    async function login() {
        const user = {
            email:emailRef.current.value,
            password: passRef.current.value
        }
    const res = await post ('login', user)

    if(!res.error) { 
        localStorage.setItem("secret", res.data.secret);
        navigate("/userprofile");
    }

    setMsg(res.message);

    
    }


    return (
        <div className='login'>
           
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passRef} type="text" placeholder="password"/>
            <button onClick={login}>Login</button>
            <h1>{msg}</h1>
            
        </div>
        
    );
};

export default Login;