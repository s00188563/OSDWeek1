import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if the input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
});
