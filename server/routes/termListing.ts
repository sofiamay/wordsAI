/** source/routes/termListing.ts */
import express from 'express';
import controller from '../controllers/termListing';
const router = express.Router();

router.get('/termListing', controller.getTermListing);

export = router;