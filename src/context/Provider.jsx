import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import sendContext from './sendContext';

export default function Provider({ children }) {
  const [nome, setNome] = useState('');
  const [noName, setNoName] = useState(false);
  const [dataInicial, setDataInicial] = useState(null);
  const [noDataInicial, setNoDataInicial] = useState(false);
  const [dataFinal, setDataFinal] = useState(null);
  const [noDataFinal, setNoDataFinal] = useState(false);
  const [propriedade, setPropriedade] = useState('');
  const [noPropriedade, setNoPropriedade] = useState(false);
  const [laboratorio, setLaboratorio] = useState('');
  const [noLaboratorio, setNoLaboratorio] = useState(false);
  const [obs, setObs] = useState('');
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const stateAndFunctions = useMemo(() => ({
    nome,
    setNome,
    noName,
    setNoName,
    dataInicial,
    setDataInicial,
    noDataInicial,
    setNoDataInicial,
    dataFinal,
    setDataFinal,
    noDataFinal,
    setNoDataFinal,
    propriedade,
    setPropriedade,
    noPropriedade,
    setNoPropriedade,
    laboratorio,
    setLaboratorio,
    noLaboratorio,
    setNoLaboratorio,
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
