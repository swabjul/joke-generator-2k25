

export default function Joke(props) {

  const {setup, punchline} = props
  return (
    <>
      <h3>{setup}</h3>
      <p>{punchline}</p>
    </>
  )
}