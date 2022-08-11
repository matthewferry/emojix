import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GatheroundDisplayWoff from '../assets/GatheroundDisplay.woff';
import GatheroundDisplayWoff2 from '../assets/GatheroundDisplay.woff2';
import StageVideo from '../assets/StageVideo.webm';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import { Tldraw, useFileSystem } from '@tldraw/tldraw';

const FontStyles = createGlobalStyle`
	@font-face {
		font-family: 'Gatheround Display';
		src: url(${GatheroundDisplayWoff2}) format('woff2'),
			url(${GatheroundDisplayWoff}) format('woff');
	}
`;

const StyledApp = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const StyledStage = styled.div`
	width: 100%;
	display: flex;
	flex: 1 auto;
	flex-direction: column;
	// justify-content: center;
	align-items: center;
`;

const StyledCanvasWrapper = styled.div`
	border-top: 1px solid #E1E1E0;
	border-bottom: 1px solid #E1E1E0;
	position: relative;
	width: 100%;
	height: 500px;
	overflow: hidden;
`;

const StyledVideoWrapper = styled.div`
	border-bottom: 1px solid #E1E1E0;
	width: 270px;
	height: 270px;
	overflow: hidden;
	position: relative;
	border-radius: 24px;
	transform: rotate(-3deg);
	margin:16px 0 36px;

	video {
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
	}
`;

function App() {
	return (
		<>
			<FontStyles />
			<StyledApp>
				<TopBar />
					<StyledStage>
						<div style={{borderBottom: '1px solid #E1E1E0', display: 'inline-flex', justifyContent: 'center', width: '100%'}}>
							<StyledVideoWrapper>
								<video src={StageVideo} autoPlay loop muted playsInline />
							</StyledVideoWrapper>
						</div>
						
						{/*
						<StyledCanvasWrapper>
							<div className='tldraw'>
								<Tldraw 
									autofocus
									disableAssets
									showPages={false}
								/>
							</div>
						</StyledCanvasWrapper>
						*/}
					</StyledStage>
				<BottomBar />
			</StyledApp>
		</>
	);
}

export default App;
