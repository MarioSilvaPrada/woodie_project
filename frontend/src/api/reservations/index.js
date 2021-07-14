import api from 'api';

const postReservation = async (params) => {
  try {
    const res = await api.post('api/reservations/', params);

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
    const res = await api.options('api/reservations/');

    if (res.status === 200) {
      return res.data.actions.POST;
    }
  } catch (err) {
    return err.response;
  }
};

export { postReservation, getReservationOptions };
