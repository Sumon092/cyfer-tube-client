import React from 'react';
import videoImage from '../img/videoimage.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
width:250px;
margin-bottom:15px;
cursor:pointer;
`
const Image = styled.img`
width:100%;
height:202px;
background-color:#999;
`
const Details = styled.div`
display:flex;
margin-top:12px;
gap:10px;
`
const ChannelImage = styled.img`
width:25px;
height:25px;
border-radius:50%; 
background-color:#999;
`
const Texts = styled.div`

`
const Title = styled.h1`
font-size:15px;
font-weight:500;
color:black;
`
const ChannelName = styled.h2`
font-size:13px;
color:#606060;
margin:9px 0px;
`
const Info = styled.div`
font-size:8px;
color:#606060
`

const Card = () => {
    return (
        <Link to="/video/test" style={{ textDecoration: 'none' }}>
            <Container>
                <Image src={videoImage} />
                <Details>
                    <ChannelImage src={videoImage} />
                    <Texts>
                        <Title>The Best Video</Title>
                        <ChannelName>Cifer Tube</ChannelName>
                        <Info>687,234 views, 1day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
};

export default Card;