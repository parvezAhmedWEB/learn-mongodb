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

/* 
  !Logical Operator
  $and
  $or
  $not
  $nor
*/
/* db.brand.find({ $and: [{ name: "iphone" }, { price: { $lte: 1200 } }] }); */

/* db.brand.find({ $or: [{ name: "Nokia" }, { price: { $eq: 1200 } }] }); */

/* 
  !Element Query Operator
  $exists - Matches doc that have the specified filed.
  $type
*/

/* db.products.find({ brand: { $exists: true } }); */
/* db.products.find({ brand: { $exists: false } }); */
/* db.products.find({ price: { $type: 2 } }); */

/* 
  !Evaluation Query Operator
  $expr
  $jsonSchema
  $mod
  $regex
  $text
  $where
*/
/*
db.budget.find({
  $expr:{
    $lt:['$budget', '$spent']
  }
})
*/
/*
db.budget.find({
  budget:{$mod:[2,0]}
})
*/
/*
db.products.find(
  {
    title:{$regex:'Ap'}
  }
)
*/
/*
db.budget.find({
  $where:"this.budget>this.spent"
})
*/

/**
 * ! Sort Limit Distinct and Row Count
 * .sort
 * .limit
 * .count
 * .distinct
 */

/**
db.brand.find().sort({name:1})
db.brand.find().sort({name:-1})
db.brand.find().sort({price:-1})
db.brand.find().sort({price:1})
 */

// db.brand.find().count('total')

/**
db.brand.find().limit(2)
db.brand.find().sort({_id:-1}).limit(2)
 */

// db.brand.distinct('name')

