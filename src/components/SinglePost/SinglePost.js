import { Button } from '@mui/material';
import React from 'react';
import './SinglePost.css';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Link } from 'react-router-dom';


const SinglePost = (props) => {
    const {title,id,userId} = props.post;

    return (
        <div>
            <h3 className='post-title'><i>{id}</i>  {title}</h3>
            <small className='userId'>Posted by user no: {userId}</small>
            <br />
            <Link to={`/post/${id}`} style={{textDecoration:"none"}}><Button className='btn' variant="outlined" size="small" startIcon={<MarkEmailUnreadIcon></MarkEmailUnreadIcon>}> Read More</Button></Link>
        </div>
    );
};

export default SinglePost;