// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  function handleSubmit(event) {
    event.preventDefault()
    // const username = event.target.elements.usernameInput.value
    // const username = inputRef.current.value
    // onSubmitUsername(event.target.elements.usernameInput.value)
    onSubmitUsername(username)
  }

  const [error, setError] = React.useState('')

  function handleChange2(event) {
    const {value} = event.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const [username, setUsername] = React.useState('')
  function handleChange(event) {
    const {value} = event.target
    const valueToLowercase = value.toLowerCase()
    setUsername(valueToLowercase)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={event => handleChange(event)}
          ref={inputRef}
          id="usernameInput"
          type="text"
          value={username}
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
