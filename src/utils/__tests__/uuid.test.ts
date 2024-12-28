import { v4 } from '../uuid';

describe('clsx', () => {
  it('should return a string', () => {
    expect(v4()).toHaveLength(36);
  });
});
