import { StyleSheet } from "react";
import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
        0 10px 10px rgba(0,0,0,0.22);
position: relative;
overflow: hidden;
width: 768px;
max-width: 100%;
min-height: 480px;
`;

export const FormContainer = styled.div`
position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
`;

export const SignInContainer = styled.div`
left: 0;
	z-index: 2;
    transform: translateX(16%) translateY(30%);
`;

export const SignUpContainer = styled.div`
left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
`;

export const OverlayContainer = styled.div`
position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
    background-color: #6B9080;
`;

export const Overlay = styled.div`
background: #073B3A;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
`;

export const OverlayPanel = styled.div`
position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(120%) translateY(150%);
	transition: transform 0.6s ease-in-out;
`;

export const OverlayLeft = styled.div`
transform: translateX(-25%) translateY(140%);
`;

export const OverlayRight = styled.div`
right: 0;
	transform: translateX(0);
`;

export const SocialContainer = styled.div`
margin: 20px 0;
`;

export const SocialContainerA = styled.a`
border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
`;