import { Router } from 'express';
import testrouter from './test';

const router = Router();

router.use('/', testrouter);

export default router;
