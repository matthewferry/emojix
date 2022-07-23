import React from 'react';
import styled from 'styled-components';

export const StyledEmoji = styled.span`
	display: flex;
	margin: 0;
	align-items: center;
	transform: scale(0.75);
	justify-content: center;
	margin: 0.5rem;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	&:hover {
		transform: scale(1);
	}
	&:active {
		transform: scale(0.9);
	}
`;

function Emoji({ emoji, handleClick }) {
	return (
		<StyledEmoji onClick={() => handleClick(emoji)}>
			{emoji.svg}
		</StyledEmoji>
	);
}

export default Emoji;
