const frisby = require('frisby');

describe('Request', () => {
  it('should be a teapot', async () => {
    await frisby.get('http://httpbin.org/status/418').expect('status', 418);
  });
});
