import FormContext from "./FormContext";
import { useState } from 'react';

import React from 'react'

function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    fullName: '',
    age: 0,
    city: '',
    module: '',
  });

  const updateGlobalState = (newFormData) => {
    setFormData({formData: newFormData});
  };

  const contextValue = { formData, updateGlobalState };
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider;
