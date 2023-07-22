import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const InputFields = ({ showAlert }) => {
  const [isValue, setIsValue] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setIsValue({ ...isValue, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isValue.name || !isValue.email) {
      showAlert(true, 'Please add user value', 'danger')
      return
    }

    await axios.post('/api/postValue', {
      name: isValue.name,
      email: isValue.email,
    })

    showAlert(true, 'User added', 'success')
    setIsValue({ name: '', email: '' })
    // console.log(isValue)
  }

  const getValue = async () => {
    try {
      const { data } = await axios.get('/api/getValue')
      console.log(data)
    } catch {}
  }

  useEffect(() => {
    getValue()
  }, [])

  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            type='text'
            value={isValue.name}
            name='name'
            onChange={handleChange}
          />
          <label>
            <span style={{ transitionDelay: '0ms' }}>N</span>
            <span style={{ transitionDelay: '50ms' }}>A</span>
            <span style={{ transitionDelay: '100ms' }}>M</span>
            <span style={{ transitionDelay: '150ms' }}>E</span>
          </label>
        </div>
        <div className='form-control'>
          <input
            type='text'
            value={isValue.email}
            name='email'
            onChange={handleChange}
          />
          <label>
            <span style={{ transitionDelay: '0ms' }}>E</span>
            <span style={{ transitionDelay: '50ms' }}>M</span>
            <span style={{ transitionDelay: '100ms' }}>A</span>
            <span style={{ transitionDelay: '150ms' }}>I</span>
            <span style={{ transitionDelay: '150ms' }}>L</span>
          </label>
        </div>
        <button type='submit' className='btn'>
          ADD
        </button>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.form`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 300px;

    input {
      background-color: transparent;
      border: 0;
      border-bottom: 2px #fff solid;
      display: block;
      width: 100%;
      padding: 15px 0;
      font-size: 18px;
      color: #fff;
    }
    input:focus,
    input:valid {
      outline: 0;
      border-bottom-color: lightblue;
    }
    label {
      position: absolute;
      top: 10px;
      left: 0;
      pointer-events: none;
    }
    label span {
      display: inline-block;
      font-size: 18px;
      min-width: 5px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    & input:focus + label span,
    input:valid + label {
      color: lightblue;
      transform: translateY(-20px);
    }
  }

  .btn {
    cursor: pointer;
    display: inline-block;
    width: 80%;
    background: var(--clr-grey-6);
    color: var(--clr-light);
    padding: 15px;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
    margin-left: 10%;
    font-size: 18px;

    &:focus {
      outline: 0;
    }
    &:active {
      transform: scale(0.98);
    }
    &:hover {
      background: var(--clr-grey-5);
      color: lightblue;
      transition: var(--transition);
    }
  }
`
export default InputFields
