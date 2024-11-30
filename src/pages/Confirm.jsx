import React from 'react';
import * as H from '@/styles/HomeStyle';
import Header from '@/components/Header'
import Bookmark from '@/components/Bookmark';
import WaitingPage from '@/components/WaitingPage';
import PlayerList from '@/components/PlayerList';



const Confirm = ({ }) => {

  return (
    <>
      <H.Home>
        <Bookmark/>
        <H.Tab>
          <Header />
          <H.RowBox>
            <PlayerList />
            <WaitingPage /> 
          </H.RowBox>
        </H.Tab>
      </H.Home>
    </>
  )
}

export default Confirm;