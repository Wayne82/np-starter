import { hello } from '../index.js';

describe('Hello', () => {
  it('Hello World.', async () => {
    const ya = await new hello().say();
    expect(ya).toBe('Hello World');
  });

  it('Hello Earth', async () => {
    const ya = await new hello().useName('Earth').say();
    expect(ya).toBe('Hello Earth');
  });
});