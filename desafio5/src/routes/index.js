import { Router } from "express";
import products from "./products.js";
import cart from "./cart.js";
import viewProducts from "./viewProducts.js";
import realTimeProducts from "./viewRealTimeProducts.js";

const router = Router();

router.use('/api/products', products);
router.use('/api/carts', cart);
router.use('/noRealTimeProducts', viewProducts);
router.use('/realTimeProducts', realTimeProducts);

export default router;