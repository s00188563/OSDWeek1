import { greet } from './greet';

// Change greet("Frank") to any other string to make it Fail
describe('Greet S00188563 Luigi Fernandez', () => {
  it('it should include name in the message', () => {
    expect(greet('Frank')).toContain('Frank');
  });
});
