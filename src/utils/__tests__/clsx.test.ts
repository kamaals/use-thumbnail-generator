import clsx from '../clsx';

describe('clsx', () => {
  it('should return a string', () => {
    expect(clsx('foo', 'bar')).toBe('foo bar');
  });
  it('should return class names', () => {
    expect(clsx('foo', 'bar', 'foo')).toBe('foo bar foo');
  });
});
