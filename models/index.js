// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  // through: {
  //   model: category_id,
  //   unique: false
  // },
  as: 'productCategory'
});

// Categories have many Products

Category.belongsToMany(Product, {
  // through: {
  //   model: category_id,
  //   unique: false
  // },
  as: 'categoryName'
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'productDescription'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'productDescriptors'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
