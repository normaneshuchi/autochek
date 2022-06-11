import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/cars/media/[id]';


describe('/api/cars/media/[media]', () => {
  test('returns a message with a list of media', async () => {
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