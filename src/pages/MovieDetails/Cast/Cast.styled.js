import styled from 'styled-components';



export const ImgBox = styled.div`
	height: 175px;
	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
`;

export const Content = styled.div`
	flex: 60%;
`;

export const Title = styled.h2`
	font-weight: 60;
	line-height: 1.2;
	font-size: 30px;
	margin-bottom: 30px;
`;

export const List = styled.ul`
	margin-bottom: 40px;
`;

export const Item = styled.li`
	display: flex;
	align-items: center;
	column-gap: 50px;
	font-size: 15px;
	&:not(:last-child) {
			margin-bottom: 10px;
	}
`;

export const Name = styled.p`
	min-width: 100px;
	color: var(--gray);
`;

export const Value = styled.p`
	span {
		display: inline-block;
		text-align: center;
		border-radius: 8px;
		line-height: 1.2;
		width: 50px;
		border: 2px solid var(--secondary);
	}
`;

export const Overview = styled.b`
	display: block;
	font-size: 18px;
	margin-bottom: 15px;
`;

export const Text = styled.p`
	font-size: 15px;
	line-height: 1.3;
`;

export const BtnList = styled.ul`
	display: flex;
	align-items: center;
	column-gap: 30px;
	margin-bottom: 60px;
`;