import styled from 'styled-components';

export const Form = styled.form`
	margin-bottom: 40px;
`;

export const Input = styled.input`
	background-color: var(--lightGray);
	width: 500px;
	height: 50px;
	font-weight: 500;
	color: var(--gray);
	padding: 0 20px;
	caret-color: var(--gray);
	margin-right: 10px;
	border-radius: 7px;
`;

export const Btn = styled.button`
	display: inline-block;
	padding: 0 30px;
	height: 50px;
	border-radius: 7px;
	background-color: var(--secondary);
	color: #fff;
	border: 1px solid var(--lightGray);
	transition: all var(--anim);
	&:hover {
		background-color: var(--lightGray);
		color: var(--primary);
		border-color: var(--secondary);
	}
`;


export const Section = styled.section`
padding: 30px 0;
`;

export const Title = styled.h1`
font-weight: 600;
font-size: 26px;
white-space: nowrap;
display: flex;
align-items: center;
flex-direction: row;
column-gap: 20px;
margin-bottom: 25px;

`;


