'use client';

import * as S from './style';
import { useState } from 'react';

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <S.Container onClick={() => setIsOn(!isOn)}>
      <S.Circle isOn={isOn} />
    </S.Container>
  );
}
