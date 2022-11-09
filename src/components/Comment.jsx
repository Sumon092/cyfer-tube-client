import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import channelImage from '../img/videoimage.png'

const Container = styled.div`
display:flex;
margin:25px 0px;
gap:10px;
`
const Avatar = styled.img`
width:40px;
height:40px;
border-radius:50%;
`
const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
const Name = styled.span`
font-size:16px;
font-weight:500;
`
const Date = styled.span`
font-size:13px;
font-weight:400px;
color:#606060;
margin-left:5px;
`
const Text = styled.span`
font-size:14px;
`


const Comment = ({ comment }) => {
    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get(`/users/find/${comment.userId}`);
            setChannel(res.data)
        };
        fetchComment();
    }, [comment.userId]);
    return (
        <Container>
            <Avatar src={channel.img} />
            <Details>
                <Name>{channel.name}<Date>2 hours ago</Date></Name>
                <Text>{comment.desc}</Text>
            </Details>
        </Container>
    );
};

export default Comment;