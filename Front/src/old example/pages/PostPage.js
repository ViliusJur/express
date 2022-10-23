import React, {useState} from 'react';
import PostFind from '../components/PostFind';
import PostForm from "../components/PostForm";
import PostUpdate from '../components/PostUpdate';
// import { post } from '../plugins/http';


const PostPage = () => {

    const [post, setPost] = useState([]);

    return (
        <>
        <div className="d-flex">
            <PostForm/>
            <PostFind setPost={setPost}/>
            <PostUpdate setPost={setPost}/>
        </div>
        <div>
            {post.map((val, i) => {
                        return (
                            <div key={`username-${i}`}>
                                <div>Username: {val.username}</div>
                                <div>Title: {val.title}</div>
                            </div>
                        );
            })}
        </div>
        </>
    );
};

export default PostPage;