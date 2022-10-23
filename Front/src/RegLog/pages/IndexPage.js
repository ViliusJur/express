import React, {useContext} from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const IndexPage = () => {

    return (
        <div className="d-flex">
            <div>
                <h2>Register</h2>
                <Register/>
            </div>
            <div>
                <h2>Login</h2>
                <Login/>
            </div> 
        </div>
    );
};

export default IndexPage;