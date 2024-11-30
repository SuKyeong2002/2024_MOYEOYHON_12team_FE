// Congrats.jsx
import React from 'react';
import Confetti from 'react-confetti';
import * as S from '@/styles/CongratsStyle';

function Congrats({ message, onClose }) {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <S.Overlay>
      <S.Message>{message || '축하합니다!'}</S.Message>
      <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={200} />
      <S.CloseButton onClick={onClose}>다음</S.CloseButton>
    </S.Overlay>
  );
}

export default Congrats;
