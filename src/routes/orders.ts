import {Router, Request, Response}  from 'express';
import {fetchShopifyData} from '../shopifyApi';


const router = Router();

router.get('/', async (req: Request, res: Response) => {

    try{
        const {createdAtMin, createdAtMax, curser} = req.params;
        const limit = 5

        const query = `
        ... (your graphQL query for fetching results)
        `;

        const response = await fetchShopifyData(query);
        //const orders = response.data.orders.edges.map((edge: any) => edge.node);

        //res.json(orders);
    }catch(error){
        res.status(500).json({error: `An error occurred while fetching orders`});
    }


})

export default router;
