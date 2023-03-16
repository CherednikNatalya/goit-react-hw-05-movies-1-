import styled from 'styled-components';

export const Btn = styled.button`
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
	}`