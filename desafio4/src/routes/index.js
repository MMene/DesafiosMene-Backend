import { Router } from "express";
import products from "./products.js"
import cart from "./cart.js"

const router = Router();

router.use('/api/products', products);
router.use('/api/carts', cart);


export default router;