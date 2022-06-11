import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/cars';


describe('/api/cars', () => {
  test('returns a message with a list of cars', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});