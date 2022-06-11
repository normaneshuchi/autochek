import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/cars/[id]';

describe('/api/cars/[id]', () => {
  test('returns a message with a cars details', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: 'oi5f5AcHP',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});