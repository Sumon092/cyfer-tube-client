import React from 'react';
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
font-size:13px;
font-weight:500;
`
const Date = styled.span`
font-size:11px;
font-weight:400px;
color:#606060;
margin-left:5px;
`
const Text = styled.span`
font-size:13px;
`


const Comment = () => {
    return (
        <Container>
            <Avatar src={channelImage} />
            <Details>
                <Name>John Doe <Date>2 hours ago</Date></Name>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatum doloremque recusandae ab, nihil quos.</Text>
            </Details>
        </Container>
    );
};

export default Comment;