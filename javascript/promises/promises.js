function checkSettlesInTime(promise, maxTime) {
  return new Promise((resolve, reject) => {
    const START = Date.now();
    console.log('START', START);
    promise
      .then(value => {
        const END = Date.now();
        console.log('thenable END - START', END - START);
        if (END - START > maxTime) reject(false);
        if (END - START <= maxTime) resolve(true);
      })
      .catch(err => {
        const END = Date.now();
        console.log('catchable END - START', END - START);
        return err;
      });
  });
}

export { checkSettlesInTime };
