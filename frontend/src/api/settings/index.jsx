import api from 'api';

const getSettings = async () => {
  try {
    const res = await api.get(process.env.STYLE_SETTINGS);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err.response);
  }
};
export { getSettings };
