import React, { useState } from 'react';
import TrybeMailContext from './TrybeMailContext';

function TrybeMailProvider({ children }) {
    const [emailList, setEmailList ] = useState([]);
    const contextValue = { emailList, setEmailList };
  return (
    <TrybeMailContext.Provider value={contextValue}>
      { children }
    </TrybeMailContext.Provider>
  )
}

export default TrybeMailProvider;
