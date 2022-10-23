import {useRef, useState} from 'react';
import {post} from "../../plugins/http";

const Register = () => {
    const emailRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()
    const photoRef = useRef()

    const [msg, setMsg] = useState("")


    async function register() {
        const user = {
            email: emailRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
            photo: photoRef.current.value
        }

        const data = await post('register', user)

        setMsg(data.message)
        
    }


    return (
        <div className='register'>
            <input ref={photoRef} type="text" placeholder="photo"/>
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passOneRef} type="text" placeholder="pass one"/>
            <input ref={passTwoRef} type="text" placeholder="pass two"/>
            <button onClick={register}>Register</button>
            <h1>{msg}</h1>
        </div>
    );
};

export default Register;