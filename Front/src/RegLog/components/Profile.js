import React, {useState} from 'react';
import {get} from "../../plugins/http";


const UserProfile = () => {
    const [photo, setPhoto] = useState("")

    const getPhoto = async () => {
        const secret = localStorage.getItem("secret")
        const res = await get("getPhoto/" + secret)

        if(!res.error) {
            setPhoto(res.data.photo)
        }
       
    }

    getPhoto();

    
    return (
        <div className='user'>
            {photo && <img src={photo} alt=""/>}
            <button>Change photo</button>
        </div>
    );
};

export default UserProfile;