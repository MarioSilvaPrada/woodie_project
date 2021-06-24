import api from 'api';

export const postReservation = async (params) => {
  try {
    const res = await api.post(process.env.RESERVATIONS, params);

    console.log({ data });
    console.log(res);

    if (res.status === 201) {
      console.log(res);
    }
  } catch (err) {
    console.log(err.response);
  }
};
