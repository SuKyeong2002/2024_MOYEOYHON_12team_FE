import { useState } from 'react';
import MainHeader from '@/components/user/MainHeader'
import Login from '@/components/user/Login';
import RuleCard from '@/components/RuleCard';
import * as H from '@/styles/HomeStyle';
import Bookmark from '@/components/Bookmark';

const Main = ({ }) => {
  const [language, setLanguage] = useState('ko'); // 기본값: 한국어

  return (
    <>
      <H.Home>
        <Bookmark />
        <H.Tab>
          <MainHeader language={language} setLanguage={setLanguage}/>
          <H.RowBox>
            <Login language={language} />
            <RuleCard language={language}/>
          </H.RowBox>
        </H.Tab>
      </H.Home>
    </>
  )
}

export default Main;