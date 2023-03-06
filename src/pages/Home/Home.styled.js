import styled from 'styled-components';


export const Title = styled.h1`
	font-weight: 600;
	font-size: 26px;
	white-space: nowrap;
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	column-gap: 20px;
	margin-bottom: 25px;
	&::before {
		content: "";
		display: inline-block;
		width: 100%;
		height: 1px;
		background-color: var(--accent);
		transform: translateY(2px);
	}
`;