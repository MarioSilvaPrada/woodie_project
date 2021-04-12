import api from 'api';

const getProducts = async () => {
  try {
    const res = await api.get(process.env.PRODUCTS);

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err.response);
  }
};

const getSingleProduct = async (id) => {
  try {
    const res = await api.get(`${process.env.PRODUCTS}${id}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err.response);
  }
};
export { getProducts, getSingleProduct };
