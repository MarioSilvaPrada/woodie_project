import api from 'api';

const getProducts = async () => {
  try {
    const res = await api.get('api/products/');

    if (res.status === 200) {
      console.log(res.data);
    }
  } catch (err) {
    console.log(err.response);
  }
};
export { getProducts };
