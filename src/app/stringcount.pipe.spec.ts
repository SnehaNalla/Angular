import { StringcountPipe } from './stringcount.pipe';

describe('StringcountPipe', () => {
  it('create an instance', () => {
    const pipe = new StringcountPipe();
    expect(pipe).toBeTruthy();
  });
});
