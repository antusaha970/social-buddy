import React from 'react';
import { Button } from '@mui/material';

const AddComment = ({comments,setComments}) => {
    const handleClick = ()=>{
        const userEmail = document.getElementById('userEmail').value;
        const userBody = document.getElementById('userText').value;
        setComments([...comments,{email:userEmail,body:userBody}]);
        document.getElementById('userEmail').value = '';
        document.getElementById('userText').value = '';
    }
    return (
        <div style={{marginBottom:'20px'}}>
            <h5>Add Comment</h5>
            <label htmlFor="userEmail">E-mail : </label>
            <input type="text" placeholder='E-mail' id='userEmail' />
            <br />
            <br />
            <label htmlFor="userText">Write Comment : </label>
            <input type="text" placeholder='Write comment'  id='userText'/>
            <br />
            <br />
            <Button color="secondary" onClick={handleClick}>Add Comment</Button>
        </div>
    );
};

export default AddComment;