import express from "express";
import { getProduct, postProduct } from "../controllers/client.js"

const router = express.Router()

router.get('/products', getProduct)

router.post('/postProduct', postProduct)

export default router
