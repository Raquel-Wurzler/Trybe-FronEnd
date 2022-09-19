import FormContext from "./FormContext";
import { useState } from 'react';

import React from 'react'

function FormProvider({ children }) {
  const [formData, setformData] = useState({
    fullName: '',
    age: 0,
    city: '',
    module: '',
  });
  const contextValue = { formData, setformData };
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider;
