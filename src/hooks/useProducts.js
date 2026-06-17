const useProducts = () => {
  const products = [
    {
      id: 1,
      image: "/NewProducts/Frame4.png",
      title: "T-SHIRT WITH TAPE DETAILS",
      price: "$120",
      rating: 4.5,
      stars: 5,
      description: "A clean and modern tee with tape detail trim. Perfect for everyday casual wear and layering.",
    },
    {
      id: 2,
      image: "/NewProducts/Frame2.png",
      title: "CHECKERED SHIRT",
      originalPrice: "$230",
      price: "$200",
      rating: 4.5,
      stars: 5,
      discount: "15% off",
      description: "Soft cotton shirt with checkered print. Ideal for both office casual looks and weekend outings.",
    },
    {
      id: 3,
      image: "/NewProducts/Frame3.png",
      title: "SKINNY FIT JEANS",
      originalPrice: "$320",
      price: "$260",
      rating: 4.5,
      stars: 5,
      discount: "20% off",
      description: "Comfort stretch jeans with a slim silhouette. Great for day-to-night styling with sneakers or boots.",
    },
    {
      id: 4,
      image: "/NewProducts/Frame1.png",
      title: "Sleeve Striped T-Shirt",
      originalPrice: "$375",
      price: "$300",
      rating: 4.5,
      stars: 5,
      discount: "20% off",
      description: "A bold striped tee with relaxed sleeves. Designed to stand out while keeping you comfortable all day.",
    },
  ];

  return products;
};

export default useProducts;
