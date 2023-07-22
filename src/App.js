import { useState } from 'react'
import './App.css'
import InputFields from './InputFields/InputFields'
import styled from 'styled-components'
import Alert from './Alert'
function App() {
  const [isAlert, setIsAlert] = useState({ show: true, msg: '', status: '' })

  const showAlert = (show = false, msg = '', status = '') => {
    setIsAlert({ show, msg, status })
  }

  return (
    <Wrapper>
      <div className='alert-block'>
        {isAlert.show && <Alert {...isAlert} alertShow={showAlert} />}
      </div>
      <InputFields showAlert={showAlert} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 40px 40px;
  border-radius: 5px;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.8);
`
export default App
