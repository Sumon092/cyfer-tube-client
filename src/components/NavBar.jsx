import React from 'react';
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from 'react-router-dom';

const Container = styled.div`
position:sticky;
top:0;
height:66px;
padding:0 20px;
background-color:#FFFF
`

const Wrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 10px;
  position: relative;
`
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`
const Input = styled.input`
background-color:transparent;
border:none;
outline:none;
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

let NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'></Input>
          <SearchOutlinedIcon />
        </Search>
        <Link to="/signIn" style={{ textDecoration: "none", color: 'inherit' }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NavBar;