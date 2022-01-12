import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [param1, setParam1] = useState(0)
  const [param2, setParam2] = useState(0)
  const [param3, setParam3] = useState(0)
  const [sumOfParams, setSumOfParams] = useState(0)
  const [message, setMessage] = useState('')

  const handleParams = (e) => {
    e.preventDefault()
    setMessage('')

    if (e.target.name === 'param1') {
      setParam1(e.target.value)
    }
    if (e.target.name === 'param2') {
      setParam2(e.target.value)
    }
    if (e.target.name === 'param3') {
      setParam3(e.target.value)
    }
    console.log(param1, param2, param3)
  }

  const checkParams = () => {
    if (param1) {
      setMessage(`Params 1 = ${param1}, Please input Params 2 and Params 3`)
    }
    if (param2) {
      setMessage(`Params 2 = ${param2}, Please input Params 1 and Params 3`)
    }
    if (param3) {
      setMessage(`Params 3 = ${param3}, Please input Params 1 and Params 2`)
    }
    if (param1 && param2) {
      setMessage(
        `Params 1 = ${param1} and Params 2 = ${param2}, Please input Params 3`
      )
    }
    if (param2 && param3) {
      setMessage(
        `Params 2 = ${param2} and Params 3 = ${param3}, Please input Params 1`
      )
    }
    if (param1 && param3) {
      setMessage(
        `Params 1 = ${param1} and Params 3 = ${param3}, Please input Params 2`
      )
    }
  }

  const sum = (param1, param2, param3) => {
    if (param1 && param2 && param3) {
      setSumOfParams(parseInt(param1) + parseInt(param2) + parseInt(param3))
    } else {
      checkParams()
    }
  }

  return (
    <div className='App'>
      <form className='sum-form'>
        <h3>Enter Param 1</h3>
        <input
          type='text'
          name='param1'
          value={param1}
          onChange={(e) => handleParams(e)}
        />
      </form>
      <form className='sum-form'>
        <h3>Enter Param 2</h3>
        <input
          type='text'
          name='param2'
          value={param2}
          onChange={handleParams}
        />
      </form>
      <form className='sum-form'>
        <h3>Enter Param 3</h3>
        <input
          type='text'
          name='param3'
          value={param3}
          onChange={handleParams}
        />
      </form>
      <h2>Params 1: {param1}</h2>
      <h2>Params 2: {param2}</h2>
      <h2>Params 3: {param3}</h2>
      <div>
        <h2>Sum: {sumOfParams}</h2>
        <button onClick={() => sum(param1, param2, param3)}>Get Sum</button>
      </div>
      {message ? <h2>{message}</h2> : null}
    </div>
  )
}

export default App
