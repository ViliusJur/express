import React, {useRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {post} from '../../plugins/http'



const CreatePostPage = () => {
    const navigate = useNavigate();

    const titleRef = useRef()
    const ImageRef = useRef()

    const [postCreated, setAlert] = useState("")
    
     async function createpost() {
        const user = {
            title: titleRef.current.value,
            image: ImageRef.current.value,
        }

        const data = await post('createPost', user)
        setAlert(data.message)
    }
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
                <h1>Create Post</h1>
                    <div>
                        <input ref={titleRef} type="text" placeholder="title"/>
                        <input ref={ImageRef} type="text" placeholder="image"/>
                    </div>
                    <div>{postCreated}</div>
                    <button onClick={createpost}>Create Post</button>
                    <button onClick={() => navigate("/allpost")}>All Post</button>
                </div>
        </>
    );
};

export default CreatePostPage;