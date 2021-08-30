
test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
      expect(10).toBe(10);
      console.log('Deve passar!');
      done();
      } catch (error) {
        done(error);
      }
    }, 500);
  });


// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//       } catch (error) {
//         done(error);
//       }
//     }, 500);
//   });