import api from 'api';

const postReservation = async (params) => {
  try {
    const res = await api.post(process.env.RESERVATIONS, params);

    if (res.status === 201) {
      return res;
    }

    return res;
  } catch (err) {
    return err.response;
  }
};

const getReservationOptions = async () => {
  try {
    const res = await api.options(process.env.RESERVATIONS);

    if (res.status === 200) {
      return res.data.actions.POST;
    }
  } catch (err) {
    return err.response;
  }
};

export { postReservation, getReservationOptions };
