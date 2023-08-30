import {shopifyApi, ApiVersion, BillingInterval} from '@shopify/shopify-api';
import {restResources} from '@shopify/shopify-api/rest/admin/2022-07';

const shopify = shopifyApi({
    // The next 4 values are typically read from environment variables for added security
    apiKey: 'APIKeyFromPartnersDashboard',
    apiSecretKey: 'APISecretFromPartnersDashboard',
    scopes: ['read_products'],
    hostName: 'ngrok-tunnel-address',
    ...
  });







/* export const shopifyConfig = {
    accessToken: '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',
    apiVersion: '2022-04',
    shopName: 'hello24-d5.myshopify.com'
} */

