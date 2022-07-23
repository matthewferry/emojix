import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import Chatbar from '../assets/Chatbar.png';
import CameraMic from '../assets/CameraMic.png';
import Love from './reactions/Love';
import Wow from './reactions/Wow';
import Confused from './reactions/Confused';
import Emoji from './Emoji';
import EmojiBubble from './EmojiBubble';

const StyledBottomBar = styled.div`
  align-items: center;
	display: flex;
	justify-content: center;
	padding: 24px 32px;
  width: 100%;
`;

const StyledReactionButton = styled.button`
	background-color: #F0EFEE;
	border: 0;
	border-radius: 48px;
	cursor: pointer;
	position: relative;
	width: 48px;
	height: 48px;
`;

const StyledReactionPopover = styled.div`
	align-items: center;
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0px 0px 20px hsla(30, 6%, 13%, 0.15);
	display: flex;
	justify-content: center;
	left: 50%;
	padding: 6px;
	position: absolute;
	top: calc(-100% - 28px);
	transform: translate3d(-50%, 0, 0);
`;

const StyledEmojiLabel = styled.div`
	background-color: ${({ bgColor }) => `${bgColor}`};
	color: ${({ color }) => `${color}`};
	padding: 8px 12px;
	border-radius: 24px;
	font-size: 12px;
	font-weight: bold;
	font-family: 'Gatheround Display', serif;
`;

function BottomBar() {
	const [emojiQueue, setEmojiQueue] = useState([]);
	const [showPopover, setShowPopover] = useState(false);
	const emojiList = [
		{
			name: 'Love',
			svg: <Love />,
			label: <StyledEmojiLabel bgColor='#FFBFC6' color='#7D1F00'>Love</StyledEmojiLabel>
		},
		{
			name: 'Wow',
			svg: <Wow />,
			label: <StyledEmojiLabel bgColor='#F8E5CD' color='#7D2800'>Wow</StyledEmojiLabel>
		},
		{
			name: 'Confused',
			svg: <Confused />,
			label: <StyledEmojiLabel bgColor='#BBD9C7' color='#052D14'>Confused</StyledEmojiLabel>
		},
	];

	const randomValueBetween = (min, max) => {
		return (Math.random() * (max - min + 1) + min).toFixed(2);
	};

	const randomLeft = () => {
		return Math.floor(Math.random() * 97 + 1);
	};

	const handleClick = emoji => {
		setEmojiQueue(prevState => [
			...prevState,
			{ emoji: emoji.svg, rotate: randomValueBetween(-28, 28), left: randomLeft(), delay: 0 },
			{ emoji: emoji.label, rotate: randomValueBetween(-28, 28), left: randomLeft(), delay: randomValueBetween(100, 400) },
			{ emoji: emoji.svg, rotate: randomValueBetween(-28, 28), left: randomLeft(), delay: randomValueBetween(200, 600) },
			{ emoji: emoji.svg, rotate: randomValueBetween(-28, 28), left: randomLeft(), delay: randomValueBetween(300, 800) },
			{ emoji: emoji.label, rotate: randomValueBetween(-28, 28), left: randomLeft(), delay: randomValueBetween(600, 1100) }
		]);
	};

	const emojiMarkup = emojiList.map((emoji, i) => (
		<Emoji key={i} emoji={emoji} handleClick={handleClick} />
	));

	const emojiBubbleMarkup = emojiQueue.map((emojiVals, i) => (
		<EmojiBubble key={i} {...emojiVals} />
	));

	return (
		<StyledBottomBar>
			<img src={CameraMic} width='312' alt='camera and mic buttons' />

			<img src={Chatbar} width='482' alt='chat input' style={{ margin: '0 16px' }} />

			<div style={{ width: '312px' }}>
				<StyledReactionButton
					onClick={() => setShowPopover(true)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width='24' height='24' fill='none' viewBox='0 0 24 24'>
						<path stroke="#23211F" strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M2.5 4h3M4 2.5v3M12.5 2 11 6m7.5-2h3M20 2.5v3M16 8l-2 2m4 3 4-1.5M18.5 20h3M20 18.5v3" />
						<path stroke="#23211F" strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M14 17.11s-.89-2.973-2.182-4.383C10.33 11.106 6.888 10 6.888 10l-4.79 10.451a1.094 1.094 0 0 0 1.45 1.45L14 17.111Z" clipRule='' />
					</svg>

					{showPopover && (
						<OutsideClickHandler
							onOutsideClick={() => setShowPopover(false)}
						>
							<StyledReactionPopover>
								{emojiMarkup}
							</StyledReactionPopover>
						</OutsideClickHandler>
					)}
				</StyledReactionButton>
			</div>


			{emojiBubbleMarkup}
		</StyledBottomBar>
	);
}
export default BottomBar;