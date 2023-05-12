import Product from "../modeles/Product.js";
import ProductStat from "../modeles/ProductStat.js";

const getProduct = async (req, res) => {
  try {
    const products = await Product.find()

    const productsWithStat = await Promise.all(products.map(async (product) => {
      const produtStat = await ProductStat.find({ productId: product._id })
      return { ...product._doc, productStat: produtStat[0] }
    }))

    res.status(200).json(productsWithStat)
  } catch (error) {
    res.status(404).json(`Somting get Worng ${error}`)
  }
}

export default getProduct
