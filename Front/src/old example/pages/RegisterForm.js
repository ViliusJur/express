import {useRef} from 'react';
import {post} from "../plugins/http";

const RegistratioForm = () => {
    
        const emailRef= useRef()
        const passwordOneRef= useRef()
        const passwordTwoRef= useRef()
        
    

    async function submitRegistration() {
        const user = {
            email: emailRef.current.value,
            passwordOne: passwordOneRef.current.value,
            passwordTwo: passwordTwoRef.current.value
        }

        const data = await post("registration", user)

        console.log(data)
    }

        

    return (
        <div className="d-flex flex-column card">
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passwordOneRef} type="text" placeholder="password"/>
            <input ref={passwordTwoRef} type="text" placeholder="repeat password"/>

            <button onClick={submitRegistration}>Register</button>
        </div>
    );
};

export default RegistratioForm;