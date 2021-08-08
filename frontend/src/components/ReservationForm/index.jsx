import React, { useState, useEffect } from 'react';
import * as S from './style';

import Input from 'components/Input';
import Success from './Success';

import { postReservation, getReservationOptions } from 'api/reservations';

const ReservationForm = ({ onSubmit, productId, options, ...props }) => {
  const initialData = {
    primeiro_nome: '',
    ultimo_nome: '',
    email: '',
    contacto_telefonico: '',
    cidade: '',
    comentario: '',
    produto: null,
    subscrever: false,
  };
  const [reservationData, setReservationData] = useState(initialData);

  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const setData = (type, value) => {
    const obj = { ...reservationData };
    obj[type] = value;
    setReservationData(obj);
  };

  const handleChange = ({ target }) => {
    const iName = target.name;
    let iValue = target.value;
    if (iName === 'subscrever') {
      iValue = !reservationData.subscrever;
    }
    setData(iName, iValue);
  };

  const createReservation = async (e) => {
    e.preventDefault();
    setError(null);
    const res = await postReservation(reservationData);

    if (res.status === 400) {
      setError(res.data);
    }

    if (res.status === 201) {
      setReservationData(initialData);
      setIsSuccess(true);
    }
  };

  const getInputType = (type) => {
    if (type === 'comentario') {
      return 'textarea';
    }

    if (type === 'subscrever') {
      return 'checkbox';
    }

    return '';
  };

  const getModalContent = () => {
    return !isSuccess ? (
      <S.StyledForm>
        <S.InputsWrapper>
          <S.NameWrapper>
            <Input
              label={options.primeiro_nome.label}
              name='primeiro_nome'
              onChange={handleChange}
              error={error?.primeiro_nome}
              value={reservationData['primeiro_nome']}
              wrapStyle={{ width: '47%' }}
              isRequired
            />
            <Input
              label={options.ultimo_nome.label}
              name='ultimo_nome'
              onChange={handleChange}
              error={error?.ultimo_nome}
              value={reservationData['ultimo_nome']}
              wrapStyle={{ width: '47%' }}
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
                  type={getInputType(key)}
                  onChange={handleChange}
                  value={reservationData[key]}
                  isRequired={values.required}
                  additionalInfo={
                    key === 'cidade' &&
                    '(Entregas gratuitas na região de Lisboa.)'
                  }
                  error={error && error[key]}
                />
              );
            }
          })}
        </S.InputsWrapper>
        <S.SubmitBtn onClick={(e) => createReservation(e)}>
          Reservar
        </S.SubmitBtn>
      </S.StyledForm>
    ) : (
      <Success />
    );
  };

  useEffect(() => {
    setData('produto', productId);
  }, []);

  return options && getModalContent();
};

export default ReservationForm;
