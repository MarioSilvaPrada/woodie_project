import React, { useState, useEffect } from 'react';
import * as S from './style';

import Input from 'components/Input';

import { postReservation, getReservationOptions } from 'api/reservations';

const ReservationForm = ({ onSubmit, productId, ...props }) => {
  const initialData = {
    primeiro_nome: '',
    ultimo_nome: '',
    email: '',
    contacto_telefonico: '',
    cidade: '',
    comentario: '',
    produto: null,
  };
  const [reservationData, setReservationData] = useState(initialData);

  const [options, setOptions] = useState(null);
  const [error, setError] = useState(null);

  const setData = (type, value) => {
    const obj = { ...reservationData };
    obj[type] = value;
    setReservationData(obj);
  };

  const handleChange = ({ target, valie }) => {
    setData(target.name, target.value);
  };

  const createReservation = async (e) => {
    e.preventDefault();
    setError(null);
    const res = await postReservation(reservationData);

    if (res.status === 400) {
      setError(res.data);
    }

    console.log('corre');

    if (res.status === 201) {
      console.log('201!!!');
      setReservationData(initialData); //?????
    }
  };

  const getOptions = async () => {
    const res = await getReservationOptions();
    setOptions(res);
  };

  useEffect(() => {
    setData('produto', productId);
    getOptions();
  }, []);

  return (
    options && (
      <S.StyledForm>
        <S.InputsWrapper>
          <S.NameWrapper>
            <Input
              label={options.primeiro_nome.label}
              name='primeiro_nome'
              onChange={handleChange}
              error={error?.primeiro_nome}
              isRequired
            />
            <Input
              label={options.ultimo_nome.label}
              name='ultimo_nome'
              onChange={handleChange}
              error={error?.ultimo_nome}
              isRequired
            />
          </S.NameWrapper>
          {Object.entries(options).map((option) => {
            const key = option[0];
            const values = option[1];

            const hideFields = ['primeiro_nome', 'ultimo_nome', 'produto'];

            if (!values.read_only && !hideFields.includes(key)) {
              return (
                <Input
                  key={key}
                  label={values.label}
                  name={key}
                  type={key === 'comentario' ? 'textarea' : ''}
                  onChange={handleChange}
                  isRequired={values.required}
                  error={error && error[key]}
                />
              );
            }
          })}
        </S.InputsWrapper>
        <S.SubmitBtn onClick={(e) => createReservation(e)}>Enviar</S.SubmitBtn>
      </S.StyledForm>
    )
  );
};

export default ReservationForm;
