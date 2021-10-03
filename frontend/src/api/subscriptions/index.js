import api from 'api';

const postSubscription = async (params) => {
  try {
    const res = await api.post('api/subscriptions/', params);
    if (res.status === 201) {
      return res;
    }
    return res;
  } catch (err) {
    return err.response;
  }
};
export { postSubscription };
