import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';
import labs from '../helpers/labOptions';
import propriedades from '../helpers/propriedadesOptions';

export default function FormHeader() {
  const {
    nome,
    setNoName,
    dataInicial,
    setNoDataInicial,
    dataFinal,
    setNoDataFinal,
    propriedade,
    setNoPropriedade,
    laboratorio,
    setNoLaboratorio,
    obs,
    setSuccess,
    setFail,
  } = useContext(sendContext);

  const response = {
    nome,
    dataInicial,
    dataFinal,
    infosPropriedade: {
      id: '',
      nome: '',
    },
    cnpj: '',
    laboratorio: {
      id: '',
      nome: '',
    },
    observacoes: obs,
  };

  const setLabInfo = () => {
    labs.forEach((lab) => {
      if (lab.nome === laboratorio) {
        response.laboratorio = {
          id: lab.id,
          nome: lab.nome,
        };
      }
    });
  };

  const setPropInfo = () => {
    propriedades.forEach((prop) => {
      if (prop.nome === propriedade) {
        response.infosPropriedade = {
          id: prop.id,
          nome: prop.nome,
        };
        response.cnpj = prop.CNPJ;
      }
    });
  };

  const setErrors = () => {
    setNoName(!nome);
    setNoDataInicial(!dataInicial);
    setNoDataFinal(!dataFinal);
    setNoPropriedade(!propriedade);
    setNoLaboratorio(!laboratorio);
  };

  const handleClick = () => {
    setErrors();
    setLabInfo();
    setPropInfo();
    if (nome && dataInicial && dataFinal && propriedade && laboratorio) {
      setSuccess(true);
      console.log(response);
    } else {
      setFail(true);
    }
  };

  return (
    <div className="form-header">
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" component="h6">
            Teste front-end
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" disableElevation onClick={handleClick}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
