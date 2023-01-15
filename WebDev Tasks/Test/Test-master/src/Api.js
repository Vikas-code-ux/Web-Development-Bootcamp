import React, { useEffect, useState } from 'react';
import './index.css';
var moment = require('moment');


export default () => {
    const [person, setPerson] = useState(null);

    useEffect(async () => {
        const response =await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const [item] =data.results;
        setPerson(item);
    }, []);
        
    let url = person && person.picture.large;

    return (
        <div id='profile'>
            <div id='imgdivision'><div id='image'><img src={url} width="100px" height="auto"/></div>
                <div id='name'>{person && <h1>{person.name.title + " " + person.name.first + " " + person.name.last}</h1>}
                <p>Update your photo and personal details </p></div>
            </div>
            <div id='username'>
                <div id='namediv1'><b>Username</b></div> {person && <div id='namediv'>{person.login.username}</div>} 
                <button >Edit</button>
            </div>
            <div id='gender'>
                <div id='genderdiv1'><b>Gender</b></div> {person && <div id='genderdiv'>{person.gender}</div>} 
                <button >Edit</button>
            </div>
            <div id='dob'>
                <div id='dobdiv1'><b>Date of Birth</b></div> <div id='dobdiv'>{moment(person && person.dob.date).format('DD MMM YYYY')}</div>
                <button >Edit</button>
            </div>
            <div id='phone'>
                <div id='phonediv1'><b>Phone Number</b></div> {person && <div id='phonediv'>{person.phone}</div>} 
                <button >Edit</button>
            </div>
            <div id='address'>
                <div id='addressdiv1'><b>Address</b></div> {person && <div id='addressdiv'>{person.location.city} , {person.location.state} , {person.location.country}</div>} 
                <button >Edit</button>
            </div>
            <div  id='jobtitle'>
                <div id='jobdiv1'><b>Job title</b></div> <div id='jobdiv'>Product Designer</div> 
                <button >Edit</button>
            </div>
            <div id='email'>
                <div id='emaildiv1'><b>Alternative Contact Email</b></div> {person && <div id='emaildiv'>{person.email}</div>} 
                <button >Edit</button>
            </div>
        </div>
    );
};