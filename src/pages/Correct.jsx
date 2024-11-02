import React from 'react';
import MainHeader from '@/components/user/MainHeader'
import RuleCard from '@/components/RuleCard';
import * as H from '@/styles/HomeStyle';
import Congratulations from '@/components/Congratulations';

const Correct = ({ }) => {


  return (
    <>
      <H.Home>
        <H.Tab>
          <MainHeader />
          <H.RowBox>
            <Congratulations />
          </H.RowBox>
        </H.Tab>
      </H.Home>
    </>
  )
}

export default Correct;