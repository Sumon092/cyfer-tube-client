import React from 'react';
import videoImage from '../img/videoimage.png'
import styled from 'styled-components';

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
const ChannelImage = styled.div`
width:20px;
height:20px;
border-radius:50%;
`

const Card = () => {
    return (
        <Container>
            <Image src={videoImage} />
        </Container>
    );
};

export default Card;