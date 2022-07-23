import React from 'react';
import styled from 'styled-components';
import Playbar from '../assets/Playbar.png';
import Rightbar from '../assets/Rightbar.png';
import Leftbar from '../assets/Leftbar.png';

const StyledTopBar = styled.div`
  align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 24px 32px;
  width: 100%;
`;

function TopBar() {
	return (
		<StyledTopBar>
      <img src={Leftbar} width='265' alt='event title' />
      <img src={Playbar} width='484' alt='playbar' />
      <img src={Rightbar} width='265' alt='secondary actions' />
    </StyledTopBar>
	);
}
export default TopBar;