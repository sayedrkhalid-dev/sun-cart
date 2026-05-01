export const fetchProductsData = async () => {
  const res = await fetch("http://localhost:3000/products.json");
  const products = res.json();
  return products;
};

export const fetchBrandsData = async () => {
  const res = await fetch("http://localhost:3000/brands.json");
  const brands = res.json();
  return brands;
};

export const fetchTipsData = async () => {
  const res = await fetch("http://localhost:3000/summer_care_tips.json");
  const tips = res.json();
  return tips;
};
