import React from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import channelImage from "../img/videoimage.png"

const Container = styled.div`
display:flex;
gap:24px;
`
const Content = styled.div`
flex:5;
`
const Recommendation = styled.div`
flex:2; 
`
const VideoWrapper = styled.div`

`
const Title = styled.h1`
font-size:14px;
font-weight:400;
margin-top:15px;
margin-bottom:10px;
`

const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const Info = styled.span`
font-size:12px;
color:#606060;
`
const Buttons = styled.div`
display:flex;
gap:15px;
font-size:12px;
`
const Button = styled.div`
display:flex;
align-items:center;
gap:5px;
cursor:pointer;
`
const Hr = styled.hr`
border:0.2px solid #606060;
margin:15px 0px;
`
const Channel = styled.div`
display:flex;
justify-content:space-between;
`
const ChannelInfo = styled.div`
display:flex;
gap:15px;
`
const Image = styled.img`
width:40px;
height:40px;
border-radius:50%;
`
const ChannelDetails = styled.div`
display:flex;
flex-direction:column;
color:#606060;
`
const ChannelName = styled.span`
font-weight:500;
color:black;
`
const ChannelCounter = styled.span`
font-size:12px;
margin-top:5px;
margin-bottom:10px;
`
const Description = styled.p`
font-size:14px;
color:black;
`
const Subscribe = styled.button`
background-color:#cc1a00;
font-weight:500;
border:none;
border-radius:3px;
height:max-content;
padding:7px 15px;
cursor:pointer;
color:#ffffff;
`

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        title="youtube video player"
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/thatthingonvideourl" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,948,154 Views, Jun,22,2022</Info>
                    <Buttons>
                        <Button ><ThumbUpOutlinedIcon />123</Button>
                        <Button><ThumbDownOffAltOutlinedIcon />Dislike</Button>
                        <Button><ReplyOutlinedIcon />Share</Button>
                        <Button><AddTaskOutlinedIcon />Save</Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src={channelImage} />
                        <ChannelDetails>
                            <ChannelName>Cifer Tube</ChannelName>
                            <ChannelCounter>200k Subscriber</ChannelCounter>
                            <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis, fuga hic eos soluta deserunt?
                            </Description>
                        </ChannelDetails>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
            </Content>
            <Recommendation>Recommendation</Recommendation>
        </Container>
    );
};

export default Video;