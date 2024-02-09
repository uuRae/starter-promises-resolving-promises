const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// const question = "Will the weather be nice today?";

// const promise = welcome();
// const promise = tell(question);

// // console.log(promise);
// // promise.then((response) => console.log(response));
// // promise.then(console.log);
// promise.then((fortune) => {
//   console.log(question);
//   console.log(fortune);
// });

// const question = "Will the weather be nice today?";
// const tellPromise = tell(question);
// tellPromise.then((fortune) => {
//     console.log(question);
//     console.log(fortune);
//   });

// const question = "Will the weather be nice today?";
// const promise = tell(question);
// promise
//   .then((fortune) => {
//     console.log(question);
//     console.log(fortune);
//   })
//   .catch(console.log);

  function getFortune(question) {
    tell(question)
    .then((fortune) => {
      console.log("Your question was: " + question);
      console.log(fortune);
    })
  }
  let hi = getFortune("am I nice?");
  console.log(hi)
  