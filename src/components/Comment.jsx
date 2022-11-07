import React from 'react';
import styled from 'styled-components';

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

`
const Date = styled.span`

`
const Text = styled.span`

`


const Comment = () => {
    return (
        <Container>
            <Avatar />
            <Details>
                <Name>Cifer Tube</Name>
                <Date>2 hours ago</Date>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatum doloremque recusandae ab, nihil quos.</Text>
            </Details>
        </Container>
    );
};

export default Comment;