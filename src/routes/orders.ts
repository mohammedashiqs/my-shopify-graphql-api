// src/routes/orders.ts
import { Router, Request, Response } from 'express';
import { fetchShopifyData } from '../shopifyApi';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        let params = req.query
        console.log(params)
        const limit = parseInt(req.query.limit as string) || 5;
        const pageNo = parseInt(req.query.pageNo as string) || 1;
        const dateFrom = req.query.dateFrom as string;
        const dateTo = req.query.dateTo as string;
        const order = req.query.order as string || 'created_at';
        const orderby = req.query.orderby as string || 'asc';




        let query = `{
            orders(first: ${ limit }) {
            edges {
            node {
                        id
            
                    }
                }
            }
        }`;


        const response = await fetchShopifyData(query);
        const orders = response.data.orders.edges.map((edge: any) => edge.node);

        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching orders.' });
    }
});

export default router;
