import Joke from "./components/Joke"
import  jokeData from "./assets/data/jokesData.js"



const jokeElements = jokeData.map( joke => {
  return (
    <Joke 
      setup={joke.setup}
      punchline={joke.punchline}
    />
  )
})

console.log(jokeElements)


export default function App() {
  return (
    <>
      {jokeElements}
      {/* <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
      /> */}
    </>
  )
}