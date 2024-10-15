import axios from "axios";

export const fetchCategories = async (setter) => {
  try {
    const { data: response } = await axios.get(
      "http://localhost:3333/categories/all"
    );
    setter(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchCategory = async (setter, id) => {
  try {
    const { data: response } = await axios.get(
      `http://localhost:3333/categories/${id}`
    );
    setter(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchProducts = async (setter) => {
  try {
    const { data: response } = await axios.get(
      "http://localhost:3333/products/all"
    );
    setter(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchProduct = async (setProduct, setCategory, id) => {
  try {
    const { data: response } = await axios.get(
      `http://localhost:3333/products/${id}`
    );
    setProduct(response[0]);
    fetchCategory(setCategory, response[0].categoryId);
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchSales = async (setter) => {
  try {
    const { data: response } = await axios.get(
      "http://localhost:3333/products/all"
    );
    setter(response.filter((elem) => elem.discont_price !== null));
  } catch (error) {
    console.error(error.message);
  }
};
