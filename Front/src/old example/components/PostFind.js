import React from 'react';
import {useRef} from 'react';
import {get} from "../plugins/http";



const PostFind = ({setPost}) => {

    const inpRef = useRef()

    async function find() {
        const {posts} = await get(`find/${inpRef.current.value}`);
        setPost(posts);
    }

    return (
        <>
            <div>
                <input ref={inpRef} type="text" placeholder="username"/>
                <button onClick={find}>Find</button>
            </div>  
        </>
    );




}

export default PostFind;