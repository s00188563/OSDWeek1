import { getCurrencies } from './getCurrencies';

describe('Currency Array S00188563 Luigi Fernandez', () => {
  it('it should include USD in the array', () => {
    expect(getCurrencies()).toContain('USD');
  });
  it('it should include GDP in the array', () => {
    expect(getCurrencies()).toContain('GDP');
  });
  it('it should include EUR in the array', () => {
    expect(getCurrencies()).toContain('EUR');
  });
  // Failure
  xit('it should include YEN in the array', () => {
    expect(getCurrencies()).toContain('YEN');
  });
});
