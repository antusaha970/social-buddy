import { Grid } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import './Comments.css';


const Comments = ({ comment, photo }) => {
    const { email, body } = comment;
    const profile = photo?.picture.large;

    return (
        <>
            <Grid item md={2} xs={12}>
                <img src={profile} alt="No image available" />
            </Grid>
            <Grid item md={10} xs={12} className='comment'>
                <h5>{email}</h5>
                <p>{body}</p>
            </Grid>
            <hr />
        </>
    );
};

export default Comments;