import { Router } from 'express';

const testrouter = Router();

testrouter.get('/',(req, res) => {
    res.status(200).json({
        message: 'working..'
    });
});

export default testrouter;
