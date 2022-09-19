import React, { useContext, useState } from 'react';
import FormContext from '../context/FormContext';

function StudantForm() {
  const { updateGlobalState } = useContext(FormContext)
  const [studentData, setStudentData] = useState({
    studantName: '',
    studantAge: 0,
    studantCity: '',
    studantModule: '',
  });

  const handleNameChange = (event) => {
    setStudentData((prevState) => ({
      ...prevState,
      studantName: event.target.value,
    }))
  };

  const handleAgeChange = (event) => {
    setStudentData((prevState) => ({
      ...prevState,
      studantAge: event.target.value,
    }))
  };

  const handleCityChange = (event) => {
    setStudentData((prevState) => ({
      ...prevState,
      studantCity: event.target.value,
    }))
  };

  const handleModuleChange = (event) => {
    setStudentData((prevState) => ({
      ...prevState,
      studantModule: event.target.value,
    }))
  };

  const onClick = () => {
    console.log('onClick');
    const newFormData = {
      fullName: studentData.studantName,
      age: studentData.studantAge,
      city: studentData.studantCity,
      module: studentData.studantModule,
    };
    updateGlobalState(newFormData);
    setStudentData(({
      studantName: '',
      studantAge: 0,
      studantCity: '',
      studantModule: '',
    }))
  };

  return (
    <form>
      <input type="text" name="fullName" id="fullName" placeholder="Nome Completo" onChange={handleNameChange} value={studentData.studantName} />
      <input type="number" name="age" id="age" placeholder="Idade" onChange={handleAgeChange} value={studentData.studantAge} />
      <input type="text" name="city" id="city" placeholder="Cidade" onChange={handleCityChange} value={studentData.studantCity} />
      <label htmlFor="fundamentos">Fundamentos
      <input type="radio" name="fundamentos" id="fundamentos" onChange={handleModuleChange} checked={module === 'Fundamentos'} value="Fundamentos" />
      </label>
      <label htmlFor="front-end">Front-end
      <input type="radio" name="front-end" id="front-end" onChange={handleModuleChange} checked={module === 'Front-end'} value="Front-end" />
      </label>
      <label htmlFor="back-end">Back-end
      <input type="radio" name="back-end" id="back-end" onChange={handleModuleChange} checked={module === 'Back-end'} value="Back-end" />
      </label>
      <label htmlFor="ciência-computação">Ciência da Computação
      <input type="radio" name="ciência-computação" id="ciência-computação" onChange={handleModuleChange} checked={module === 'ciência-computação'} value="Ciência da Computação" />
      </label>
      <button type="button" onClick={onClick}>Enviar Informações</button>
    </form>
  )
}

export default StudantForm;
