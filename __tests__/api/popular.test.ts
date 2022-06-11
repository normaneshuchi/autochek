import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/popular';


describe('/api/popular', () => {
  test('returns a message with a list of popular car brands', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});