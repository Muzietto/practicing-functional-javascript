import {
  checkSettlesInTime,
} from './promises';


xdescribe('checkSettlesInTime', () => {

  const HALF_SECOND_PROMISE = () => new Promise(resolve => {
    setTimeout(resolve, 500);
  });

  it('succeeds within half second', async () => {

    let gino = false;

    try {
      gino = await checkSettlesInTime(HALF_SECOND_PROMISE(), 600);
    } catch (exc) {}

    expect(gino)
      .toEqual(true);
  });

  it('fails beyond half second', async () => {

    let gino = false;

    try {
      gino = await checkSettlesInTime(HALF_SECOND_PROMISE(), 400);
    } catch (exc) {}

    expect(gino)
      .toEqual(false);
  });
});
