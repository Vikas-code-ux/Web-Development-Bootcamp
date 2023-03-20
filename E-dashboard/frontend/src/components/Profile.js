import { useState } from "react";
import boyimg from "../boy_img.jpg";
import girlimg from "../girl_img.png";

const auth=localStorage.getItem('user');

const Profile=()=>{

    const [aboutme, setAboutme]=useState("");

    return(
        <div>
            <div className="profile_header">
                <h2>Profile</h2>
            </div>
            <div className="profile_body">
                <div className="about-me">
                    <div className="detail_header">
                        <h3>About Me</h3>
                    </div>
                    <textarea className="editaboutme" type="text" rows="5" columns="10" placeholder="Write about yourself..." value={aboutme} onChange={(e)=>(setAboutme(e.target.value))}/>
                </div>
                <div className="photodiv">
                    { JSON.parse(auth).gender===("male"||"Male"||"MALE")?   
                    <img className="dp" src={boyimg} alt="dp"/>
                    :
                    <img className="dp" src={girlimg} alt="dp"/>
                    }
                    <h3>Lead Product Engineer</h3>
                </div>
                <div className="details">
                    <div className="detail_header"><h3>Details</h3></div>
                    <ul className="detail-item">
                        <ul><li><b>Name:</b></li><li>{JSON.parse(auth).name}</li></ul>
                        <ul><li><b>Location:</b></li><li>{JSON.parse(auth).country}</li></ul>
                        <ul><li><b>E-mail:</b></li><li>{JSON.parse(auth).email}</li></ul>
                        <ul><li><b>Gender:</b></li><li>{JSON.parse(auth).gender}</li></ul>
                        <ul><li><b>Age:</b></li><li>{JSON.parse(auth).age} years</li></ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;