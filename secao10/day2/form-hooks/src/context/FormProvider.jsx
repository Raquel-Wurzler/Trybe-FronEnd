import FormContext from "./FormContext";
import React, { useState } from 'react';

function FormProvider({ children }) {
  const [formData, setFormData] = useState([]);

  const updateGlobalState = (newFormData) => {
    setFormData(formData.concat(newFormData));
  };

  const contextValue = { formData, updateGlobalState };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider;
