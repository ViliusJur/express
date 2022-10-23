import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {get} from '../../plugins/http'


const AllPost = () => {
    const navigate = useNavigate();

    const [post, setAll] = useState(false);
    
    useEffect(() => {
        const getPost = async () => {
            const res = await get("getPost" );
            !res.data ? navigate("/") : setAll(true);
        }

       console.log(getPost()) ;
    });


    // useEffect(() => {
    //     const isSecretValid = async () => {
    //         const secret = localStorage.getItem("secret") 
    //         const res = await get("getIsValidSecret/" + secret);
    //         !res.data ? navigate("/") : setIsLoaded(true);
    //     }

    //     isSecretValid();
    // });

    

    return (
        <>
                <div>
                    <h1>All Post</h1>
                    <div>
                        <div>{post}</div>
                        <div>Username</div>
                    </div>
                    <button onClick={() => navigate("/createpost")}>Create Post</button>
                </div>
        </>
    );
};

export default AllPost;