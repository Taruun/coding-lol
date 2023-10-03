// const url = "https://api.kanye.rest"

// const quoteContainer = document.querySelector("#h1")
// showQuote = () => {
//     const response = fetch(url);
//     response.then((res)=>{
//         const json = res.json();
//         json.then((data)=> quoteContainer.textContent = data.quote);
//     })
// }

// const url = "https://backend-omega-seven.vercel.app/api/getjoke"
// const jokeQuestion = document.querySelector("#p1")
// const jokePunchline = document.querySelector("#p2")

// const showJoke  = () =>{

//     const response = fetch(url)
//     response.then((res)=>{
//         const json = res.json()
//         json.then((data)=> {
//             jokeQuestion.textContent = "Question: " + data[0].question
//             jokePunchline.textContent = "Answer: " + data[0].punchline
//         }).catch((err) => {
//             const errorMessageCreate = document.createElement("h5");
//             errorMessageCreate.textContent = "Api must be tired :)";
//             jokeQuestion.append(errorMessageCreate);
//         });

//     })
// }

const url = "https://backend-omega-seven.vercel.app/api/getjoke";
const questions = document.querySelector("#p1");
const answer = document.querySelector("#p2");

const fetchJoke = async () => {
  const response = await fetch(url);
  const json = await response.json();
  const data = json[0];
  questions.textContent = "Question: " + data.question;
  answer.textContent = "Answer: " + data.punchline;
};

const showJokes = async () => {
  try {
    await fetchJoke();
  } catch (err) {
    const errorMessage = document.createElement("h6");
    errorMessage.textContent = "Api must be tired :)";
    jokeQuestion.append(errorMessage);
  }
};
showJokes();
