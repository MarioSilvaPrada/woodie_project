import api from 'api';

const postReservation = async (params) => {
  try {
    const res = await api.post(process.env.RESERVATIONS, params);

    if (res.status === 201) {
      return res;
    }
  } catch (err) {
    return err.response;
  }
};

export { postReservation };
