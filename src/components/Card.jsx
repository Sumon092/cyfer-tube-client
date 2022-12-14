import React, { useEffect, useState } from 'react';
import videoImage from '../img/videoimage.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { format } from "timeago.js";
import axios from "axios";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "250px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "5px" : "10px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "90px" : "202px")};
  background-color: #999;
  flex: 1;
  
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "12px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
font-size:15px;
font-weight:500;
color:black;
`
const ChannelName = styled.h2`
font-size:13px;
color:#606060;
margin:5px 0px;
`
const Info = styled.div`
font-size:12px;
color:#606060
`

const Card = ({ type, video }) => {

  const [channelInfo, setChannelInfo] = useState([]);
  console.log(channelInfo);
  // console.log(videos);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannelInfo(res.data)
    }
    fetchVideos()
  }, [video.userId])


  // console.log(video);
  const { videoTitle, imgaeUrl, views, createdAt } = video;
  const { image, name } = channelInfo;

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image type={type} src={videoImage} />
        <Details type={type}>
          <ChannelImage type={type} src={image} />
          <Texts>
            <Title>{videoTitle}</Title>
            <ChannelName>{name}</ChannelName>
            <Info>{views} views, {format(createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;