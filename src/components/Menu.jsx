import React from 'react';
import styled from 'styled-components';
import logoImage from "../img/logo.png"
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Container = styled.div`
flex:1;
background-color:#202020;
height:100vh;
color:#ffff;
font-size:14px;
position:sticky;
top:0;
`
const Wrapper = styled.div`
padding:18px 16px;
`
const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:15px;
`
const Image = styled.img`
height:25px;
`
const Item = styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding:5px 0;
&:hover{
    background-color:#606060;
}
`
const Hr = styled.hr`
margin:10px 0px;
border:0.5px solid #373737;
`
const Login = styled.div`
font-size:10px;
`
const Button = styled.div`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
margin-top:7px;
cursor:pointer;
text-align:center;
display:flex;
align-items:center;
gap:5px; 
`
const Title = styled.h1`
font-size:14px;
font-weight:500px;
color:#aaaa;
margin-bottom:15px 0px;
`
const NavLink = styled.a`
text-decoration:none;

`

const Menu = ({ type, video }) => {
    const { currentUser } = useSelector(state => state.user);
    // console.log(video);
    return (
        <Container>
            <Wrapper>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo style={{ textDecoration: 'none' }}>
                        <Image src={logoImage} alt="logoImage" />
                        Cifer Tube
                    </Logo>
                </Link>
                <NavLink to="/home">
                    <Item>
                        <HomeIcon />
                        Home
                    </Item>
                </NavLink>
                <Link to="/trend" style={{ textDecoration: 'none', color: 'inherit' }}>

                    <Item>
                        <ExploreOutlinedIcon />
                        Explore
                    </Item>
                </Link>

                <Link to="/subscribed" style={{ textDecoration: 'none', color: 'inherit' }}>

                    <Item>
                        <SubscriptionsOutlinedIcon />
                        Subscription
                    </Item>
                </Link>
                <Hr />
                <Item>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
                <Hr />
                {!currentUser && <><Link to="/signIn" style={{ textDecoration: "none", color: 'inherit' }}>
                    <Login>
                        SignIn to like, comment and subscribe
                        <Button><AccountCircleOutlinedIcon />SIGN IN</Button>
                    </Login>
                </Link>
                    <Hr /></>}
                <Title>BEST OF CIFER</Title>
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>

                <Item>
                    <ArticleOutlinedIcon />
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Setting
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item>
                    <SettingsBrightnessOutlinedIcon />
                    Light Mode
                </Item>
            </Wrapper>
        </Container >
    );
};

export default Menu;