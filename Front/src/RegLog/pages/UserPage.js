import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ShowPhoto from '../components/ShowPhoto';
import {get} from './../../plugins/http'


const UserPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const isSecretValid = async () => {
            const secret = localStorage.getItem("secret") 
            const res = await get("getIsValidSecret/" + secret);
            !res.data ? navigate("/") : setIsLoaded(true);
        }

        isSecretValid();
    });



    return (
        <>
            {isLoaded &&
                <div>
                    <div className='userWraper'></div>
                    <div><ShowPhoto /></div>
                    <button>Change foto</button>
                    <button onClick={() => navigate("/allpost")}>All Post</button>
                </div>
            }
        </>
    );
};

export default UserPage;