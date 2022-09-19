import { useState } from 'react';
import BingoContext from './BingoContext';

function BingoProvider({ children }) {
  const [bingo, setBingo] = useState([]);

  const contextValue = {
    bingo,
    setBingo,
  }

  return (
    <BingoContext.Provider value={contextValue}>
      { children }
    </BingoContext.Provider>
  )
}

export default BingoProvider;
