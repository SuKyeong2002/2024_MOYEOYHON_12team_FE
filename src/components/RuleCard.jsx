import React, { useState } from 'react';
import * as R from '@/styles/RuleStyle';
import Ruel_1 from '@/assets/Rule_1.png';
import Rule_2 from '@/assets/Rule_2.png';
import Rule_3 from '@/assets/Rule_3.png';
import Rule_4 from '@/assets/Rule_4.png';
import Rule_5 from '@/assets/Rule_5.png';
import NextBtn from '@/assets/NextBtn.png';
import PrevBtn from '@/assets/PrevBtn.png';

const HeadText = {
  ko : '게임 규칙',
  en : 'How to Play',
}
const ruleData = {
  ko: [
    {
      img: Ruel_1,
      title: '1. 제시어 선정',
      description: 'AI가 제시어를 하나 정합니다. \n(주제: 모임, 문화, 낭만)',
    },
    {
      img: Rule_2,
      title: '2. 질문',
      description: '플레이어들은 자기 차례에 \n한 가지 질문을 해요',
    },
    {
      img: Rule_3,
      title: '3. 답변',
      description: 'AI가 질문에 대한 답을 알려줘요. \n(네 또는 아니오)',
    },
    {
      img: Rule_4,
      title: '4. 점수 부여',
      description: '정답을 맞출 때까지 반복합니다. \n맞출 시 게임이 종료됩니다',
    },
    {
      img: Rule_5,
      title: '5. 추천',
      description: '[모여]에서 관련된 내용을 추천해드려요! \n 이제 게임을 시작해볼까요?',
    },
  ],
  en: [
    {
      img: Ruel_1,
      title: '1. Theme Selection',
      description: 'The AI chooses a theme. \n(Topics: gathering, culture, romance)',
    },
    {
      img: Rule_2,
      title: '2. Question',
      description: 'Players take turns \nto ask one question.',
    },
    {
      img: Rule_3,
      title: '3. Answer',
      description: 'The AI answers the question. \n(Yes or No)',
    },
    {
      img: Rule_4,
      title: '4. Scoring',
      description: 'Repeat until the correct answer is found. \nThe game ends when guessed correctly.',
    },
    {
      img: Rule_5,
      title: '5. Recommendation',
      description: 'Get related content recommended by [MOYEO]! \n Shall we start the game?',
    },
  ],
};

const RuleCard = ({ language }) => {
  const [currentRule, setCurrentRule] = useState(0);

  const handleNext = () => {
    setCurrentRule((prevRule) => (prevRule + 1) % ruleData[language].length);
  };

  const handlePrev = () => {
    setCurrentRule((prevRule) =>
      prevRule === 0 ? ruleData[language].length - 1 : prevRule - 1
    );
  };

  const { img, title, description } = ruleData[language][currentRule];

  return (
    <R.RuleCard>
      <h2>{HeadText[language]}</h2>
      <R.ContentBox>
        <h3>{title}</h3>
        <R.Thumnail src={img} alt={`Rule ${currentRule + 1}`} />
        <p id="description">{description}</p>
      </R.ContentBox>
      <R.Footer>
        <button onClick={handlePrev}>
          <img src={PrevBtn} />
        </button>
        <p>
          {currentRule + 1} / {ruleData[language].length}
        </p>
        <button onClick={handleNext}>
          <img src={NextBtn} />
        </button>
      </R.Footer>
    </R.RuleCard>
  );
};

export default RuleCard;
