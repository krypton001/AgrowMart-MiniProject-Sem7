const Product = require("../../models/product");
const Review = require("../../models/review");
async function addReview(req, res) {
  const { name, desc, rating, productId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return;
    const newRating =
      (rating + product.rating * product.number_of_ratings) /
        product.number_of_ratings +
      1;
    const newNumberOfRatings = product.number_of_ratings + 1;
    const updationAggregate = {
      $set: {
        rating: newRating,
        number_of_ratings: newNumberOfRatings,
      },
    };
    await Product.updateOne({ _id: productId }, updationAggregate);

    const currentReview = new Review({
      name,
      desc,
      rating,
      productId,
    });
    const rev = await currentReview.save();
    return res.status(201).send(rev);
  } catch (e) {
    res.status(409).send(e.message);
  }
}
module.exports = { addReview };
