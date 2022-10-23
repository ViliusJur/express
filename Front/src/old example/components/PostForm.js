import {useRef} from 'react';
import {post} from "../plugins/http";

const PostForm = () => {
    const postRefs = {
        title: useRef(),
        image: useRef(),
        username: useRef(),
        description: useRef(),
        
    }

    async function addPost() {
        const card = {
            title: postRefs.title.current.value,
            image: postRefs.image.current.value,
            username: postRefs.username.current.value,
            description: postRefs.description.current.value,
            
        }

        const res = await post('addPost', card)

        console.log(res)
    }

        

    return (
        <div className="d-flex flex-column card">
            <input ref={postRefs.title} type="text" placeholder="title"/>
            <input ref={postRefs.image} type="text" placeholder="image"/>
            <input ref={postRefs.username} type="text" placeholder="username"/>
            <input ref={postRefs.description} type="text" placeholder="description"/>

            <button onClick={addPost}>Add Post</button>
            <button>Update</button>
        </div>
    );
};

export default PostForm;