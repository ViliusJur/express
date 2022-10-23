import React, {useState} from 'react';
import {get} from "../../plugins/http";

const ShowPhoto = () => {

    const [photo, setPhoto] = useState("")

    const getPhoto = async () => {
        const secret = localStorage.getItem("secret")
        const res = await get("getPhoto/" + secret)

        if(!res.error) {
            setPhoto(res.data.photo)
        }
        
    }
getPhoto()
    return (
        <div>
            {photo && <img src={photo} alt=""/>}
            
        </div>
    );
};

export default ShowPhoto;