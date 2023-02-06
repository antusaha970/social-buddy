import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import SinglePost from '../SinglePost/SinglePost';

const PostArea = (props) => {
    const data = props.postsData;
    return (
        <Container fixed>
            <div>
                <h2 className='header-text text-center'>THE POSTS</h2>
            </div>
            <Grid container spacing={3}>
                {
                    data?.map(post => {
                    return  <Grid item md={4} xs={12} sm={6}>
                        <SinglePost post = {post}></SinglePost>
                    </Grid>})
                }

            </Grid>
        </Container>
    );
};

export default PostArea;