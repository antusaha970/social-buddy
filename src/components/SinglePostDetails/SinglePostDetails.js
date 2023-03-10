import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './SinglePostDetails.css';
import Comments from '../Comment/Comments';
import { Grid } from '@mui/material';
import AddComment from '../AddComment/AddComment';


const SinglePostDetails = () => {
    const [postData, setPostsData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostsData(data));
    }, [])
    const { title, body, userId } = postData;
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [])
    const [userPhoto, setUserPhoto] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(data => setUserPhoto(data.results));
    }, [])

    return (
        <Container fixed>
            <h1 className='text-center header-text'>Post Details</h1>
            <div className='main-post'>
                <h1>{title}</h1>
                <p className='userId'>Posted by : user {userId} <PersonIcon style={{ fontSize: '20px' }} /> </p>
                <p>Description: {body}</p>
            </div>
            <h3>Comment section</h3>
            <Grid spacing={2}>
                {
                    comments?.map((comment, ind) => <Comments comment={comment} photo={userPhoto[ind]}></Comments>)
                }
            </Grid>
            <AddComment comments= {comments} setComments={setComments}></AddComment>

        </Container>
    );
};

export default SinglePostDetails;