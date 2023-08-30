// src/shopifyApi.ts
import axios from 'axios';
import { shopifyConfig } from './config';

export async function fetchShopifyData(query: string, variables?: any) {
  try {
    const response = await axios.post(
      `https://${shopifyConfig.shopName}/admin/api/${shopifyConfig.apiVersion}/graphql.json`,
      {
        query,
        variables,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': shopifyConfig.accessToken,
        },
      }
    );

    if (response.status >= 400) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching Shopify data: ${error}`);
  }
}


;