import React, { useState } from 'react';

function StudantForm() {
  const [studentData, setStudentData] = useState({
    studanteName: '',
    studantAge: 0,
    studanteCity: '',
    studantModule: '',
  });

  const handleNameChange = (event) => {
    setStudentData((prevState) => ({
      ...prevState,
      studanteName: event.target.value,
    }))
  };

  const handleAgeChange = (event) => {
    setStudentData((prevState) => ({
      ...prevState,
      studanteAge: event.target.value,
    }))
  };

  const handleCityChange = (event) => {
    console.log(studentData);
    setStudentData((prevState) => ({
      ...prevState,
      studanteCity: event.target.value,
    }))
  };

  // const handleModuleChange = (event) => {

  // };

  // Falta criar a função handle dos inputs radios
  // Falta criar a função do button que vai atualizar o estado global criando um objeto para atualizar o estado global...

  return (
    <form>
      <input type="text" name="fullName" id="fullName" placeholder="Nome Completo" onChange={handleNameChange} />
      <input type="number" name="age" id="age" placeholder="Idade" onChange={handleAgeChange} />
      <input type="text" name="city" id="city" placeholder="Cidade" onChange={handleCityChange} />
      <label htmlFor="fundamentos">Fundamentos
      <input type="radio" name="fundamentos" id="fundamentos" />
      </label>
      <label htmlFor="front-end">Front-end
      <input type="radio" name="front-end" id="front-end" />
      </label>
      <label htmlFor="back-end">Back-end
      <input type="radio" name="back-end" id="back-end" />
      </label>
      <label htmlFor="ciência-computação">Ciência da Computação
      <input type="radio" name="ciência-computação" id="ciência-computação" />
      </label>
      <button type="button">Enviar Informações</button>
    </form>
  )
}

export default StudantForm;
