import { greet } from './greet';

// Change greet("Frank") to any other string to make it Fail
describe('greet', () => {
  it('it should include name in the message', () => {
    expect(greet('Frank')).toContain('Frank');
  });
});
