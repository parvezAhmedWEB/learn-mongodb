use("learnMongoDB");

/* 
    !Projection
    db.brand.find({}, { _id: 0 });
*/

/* 
    !Comparison Operator
    $eq
    $lt
    $lte
    $gt
    $gte
    $ne
    $in
    $nin
*/
/* db.products.find(
  {
    price: { $eq: 11000 },
  },
  {
    title: 1,
    price: 1,
  }
); */
/* db.products.find(
  {
    price: { $lt: "20000" },
  },
  {
    title: 1,
    price: 1,
  }
); */
/* db.products.find(
  {
    price: { $lte: "22000" },
  },
  {
    title: 1,
    price: 1,
  }
); */
/* db.products.find(
  {
    price: { $gt: "24000" },
  },
  {
    title: 1,
    price: 1,
  }
); */
/* db.products.find(
  {
    price: { $gte: "24000" },
  },
  {
    title: 1,
    price: 1,
  }
); */
/* db.products.find(
  {
    price: { $in: ["15000", "20000"] },
  },
  {
    title: 1,
    price: 1,
  }
); */
/* db.products.find(
  {
    price: { $nin: ["15000", "20000"] },
  },
  {
    title: 1,
    price: 1,
  }
); */
