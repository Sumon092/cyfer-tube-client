import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { auth, provider } from '../firebase.js';
import { signInWithPopup } from 'firebase/auth';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:calc(100vh);
`
const Wrapper = styled.div`
display:flex;
width:200px;
height:350px;
align-items:center;
flex-direction:column;
background-color:white;
border:1px solid #f5f5f5;
padding:20px 50px;
gap:10px;
`
const Title = styled.h1`
font-size:20px;
`
const Subtitle = styled.h2`
font-size:16px;
font-weight:300;
`
const Input = styled.input`
border:1px solid #606060;
border-radius:3px;
padding:10px;
background-color:transparent;
width:100%;
`
const Button = styled.button`
border-radius:3px;
border:none;
padding:10px 20px;
font-weight:500;
cursor:pointer;
background-color:#aaaaaa;
`
const More = styled.div`
display:flex;
margin-top:10px;
font-size:11px;
color:#606060;
`
const Links = styled.div`
margin-left:50px;
`
const NavLink = styled.a`
margin-left:30px;
`

const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleSignIn = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const res = await axios.post("/auth/signIn", { name, password });
            dispatch(loginSuccess(res.data));
        } catch (error) {
            dispatch(loginFailure());
        }
    };
    const signInWithGoogle = (e) => {
        e.preventDefault()
        dispatch(loginStart())
        signInWithPopup(auth, provider).then((result) => {
            // console.log(result);

            axios.post("auth/google", {
                name: result.user.displayName,
                email: result.user.email,
                img: result.user.photoURL,
                result: result.user
            }).then((res) => {
                console.log(res.data)
                dispatch(loginSuccess(res.data))

            })
        }).catch((error) => {
            dispatch(loginFailure())
        })
    }
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Subtitle>to continue ciferTube</Subtitle>
                <Input type='text' placeholder="user name" onChange={e => setName(e.target.value)} />
                <Input type='password' placeholder="password" onChange={e => setPassword(e.target.value)} />
                <Button onClick={handleSignIn}>Sign in</Button>


                <Title>Or</Title>
                <Button onClick={signInWithGoogle}>SignIn with Google</Button>
                <Title>Or</Title>


                <Input type='text' placeholder="Enter your name" onChange={e => setName(e.target.value)} />
                <Input type='email' placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
                <Input type='password' placeholder="password" onChange={e => setPassword(e.target.value)} />
                {/* <Button onClick={handleSignUp}>Sign up</Button> */}
                <More>
                    English(USA)
                    <Links>
                        <NavLink>Help</NavLink>
                        <NavLink>Privacy</NavLink>
                        <NavLink>Terms</NavLink>
                    </Links>
                </More>
            </Wrapper>
        </Container>
    );
};

export default SignIn;