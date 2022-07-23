import React from 'react';
import styled, { keyframes } from 'styled-components';
import ExpireEmoji from './ExpireEmoji';

const bubble = keyframes`
    0% {
			bottom: 72px;
			opacity: 1;
    }
		50% {
			opacity: 1;
		}
		55% {
			opacity: 0;
		}
    100% {
      bottom: 115%;
			opacity: 0;
    }
`;

const StyledEmojiBubble = styled.span`
	position: absolute;
	transform: rotate(${({ rotate }) => `${rotate}deg`});
	left: ${({ left }) => `${left}%`};
	animation: ${bubble} 6s ease-out;
	animation-delay: ${({ delay }) => `${delay}ms`};
	opacity: 0;
`;

function EmojiBubble(props) {
	return (
		<ExpireEmoji>
			<StyledEmojiBubble {...props}>{props.emoji}</StyledEmojiBubble>
		</ExpireEmoji>
	);
}

export default EmojiBubble;
