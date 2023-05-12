import mongoose from "mongoose";


const productStatShcema = new mongoose.Schema({
  id: String,
  productId: String,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnit: Number,
  year: Number,
  monthlyData: [{
    month: String,
    totalSales: Number,
    totalUnits: Number
  }],
  dailyData: [{
    date: String,
    totalSales: Number,
    totalUnits: Number
  }]
}, { timestamps: true })


const ProductStat = mongoose.model('ProductStat', productStatShcema)

export default ProductStat
