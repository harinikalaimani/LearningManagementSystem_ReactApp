import React from 'react'
import Button from 'react-bootstrap/Button';
function Homebtn(props) {
  return (
    <div>
        <Button as="a" variant="success">{props.btnname}</Button>
    </div>
  )
}

export default Homebtn;