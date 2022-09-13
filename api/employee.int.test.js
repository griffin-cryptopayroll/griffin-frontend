import { getEmployeeApi } from "./employee";

describe('employee', () => {
  test('#getEmployeeApi', async () => {

    const results =  await getEmployeeApi('1');


    expect(results.data.total_length>0).toBeTruthy();
  });

});