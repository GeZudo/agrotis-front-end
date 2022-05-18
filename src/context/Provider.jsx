import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import sendContext from './sendContext';

export default function Provider({ children }) {
  const [nome, setNome] = useState('');
  const [dataInicial, setDataInicial] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);
  const [propriedade, setPropriedade] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [obs, setObs] = useState('');
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const stateAndFunctions = useMemo(() => ({
    nome,
    setNome,
    dataInicial,
    setDataInicial,
    dataFinal,
    setDataFinal,
    propriedade,
    setPropriedade,
    laboratorio,
    setLaboratorio,
    obs,
    setObs,
    success,
    setSuccess,
    fail,
    setFail,
  }), [nome, dataInicial, dataFinal, propriedade, laboratorio, obs, fail, success]);

  return (
    <sendContext.Provider value={stateAndFunctions}>
      { children }
    </sendContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
