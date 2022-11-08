import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CommentImage from '../img/videoimage.png'

const Container = styled.div`
 
 `
const NewComment = styled.div`
 display:flex;
 align-items:center;
 gap:10px;
 `
const Avatar = styled.img`
 width:40px;
 height:40px;
 border-radius:50%;
 `
const Input = styled.input`
 border:none;
 border-bottom:1px dotted #606060;
 background-color:transparent;
 outline:none;
 padding:5px;
 width:100%;
 `
 
 const Comments = () => {
    const [videos,setVideos]=useState([]);
    useEffect (()=>{
const fetchVideos=()=>{
    const res=axios.get("/video/random")
}
    },[])
    return (
        <Container>
            <NewComment>
                <Avatar src={CommentImage} />
                <Input placeholder='Add a comment here...' />
            </NewComment>
        </Container>
    );
};

export default Comments;