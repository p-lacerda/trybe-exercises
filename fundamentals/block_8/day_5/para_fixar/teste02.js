  let failure = ["no-var", "var-on-top", "linebreak"];


  function makeList(arr) {
    arr.forEach(fail => {
        console.log( `<li class="text-warning">${fail}</li>`)
    });
  }
  
  console.log(makeList(failure))


//   holidayJoy = ["christmas wreaths", 'sugar canes', 'snow angels']

//   holidayJoy.forEach(element => {
//       console.log(`${element}`)
//   });


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    let failureItems
    arr.forEach(fail =>{
      failureItems = `<li class="text-warning">${fail}</li>`
    })
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);