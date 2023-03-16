import styled from "styled-components";

export const NavLink = styled.button`
padding: 5px 10px;
	border-radius: 7px;
	font-size: 12px;
	background-color: var(--secondary);
	color: #fff;
	border: 1px solid var(--lightGray);
	transition: all var(--anim);
	margin-bottom: 20px;
	&:hover {
		background-color: var(--lightGray);
		color: var(--primary);
		border-color: var(--secondary);
`
export const Link = styled.button`
padding: 5px 10px;
	border-radius: 7px;
	font-size: 12px;
	background-color: var(--secondary);
	color: #fff;
	border: 1px solid var(--lightGray);
	transition: all var(--anim);
	margin-bottom: 20px;
	&:hover {
		background-color: var(--lightGray);
		color: var(--primary);
		border-color: var(--secondary);}
`

export const BtnList =styled.ul`
display: flex;
	align-items: center;
	column-gap: 30px;
	margin-bottom:30px;`

