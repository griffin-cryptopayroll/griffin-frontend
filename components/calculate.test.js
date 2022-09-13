import { convertUsd, aggregate } from './calculate'
 export const fixture = {"ethusdt":1685.45,"maticusdt":0.9077,"usdcusdt":0.9999};

describe('calculate', () => {
    const originalByToken = {
        'eth':123,
        'matic': 234,
        'usdc': 567
    };

    test('#convertUsd', async () => {
        const results =  convertUsd(originalByToken, fixture);
        expect(results).toEqual({ "eth": 207310.35, 'matic': 212.40179999999998,
        'usdc': 566.9433});
    });

    test('#aggregate', async () => {
        const results = aggregate(originalByToken, fixture)
        
        expect(results).toEqual(208089.6951);
    });
  
  });