import { useState } from "react"

export default function Joke(props) {
  const {setup, punchline} = props

  const [isShown, setIsShown] = useState(false)

  function toggleShown() {
    setIsShown(prevShow => !prevShow)
  }

  return (
    <>
      <h3>{setup}</h3>
      {isShown && <p>{punchline}</p>}
      <button onClick={toggleShown}>Show punchline</button>
      <hr/>
    </>
  )
}