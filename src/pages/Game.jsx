import React from 'react';
import * as H from '@/styles/HomeStyle';
import ChatApp from '@/components/ChatApp'
import Header from '@/components/Header'
import Bookmark from '@/components/Bookmark';
import PlayerList from '@/components/PlayerList';

const Game = ({ }) => {


  return (
    <>
      <H.Home>
        <Bookmark/>
        <H.Tab>
          <Header />
          <H.RowBox>
            <PlayerList />
            <ChatApp />
          </H.RowBox>
        </H.Tab>
      </H.Home>
    </>
  )
}

export default Game;