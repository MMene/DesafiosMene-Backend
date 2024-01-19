import { Router } from "express";
import products from "./products.routes.js";
import cart from "./cart.routes.js";

const router = Router();

router.use('/api/products', products);
router.use('/api/carts', cart);

export default router;