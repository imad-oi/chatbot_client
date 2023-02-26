import React from 'react';
import './style.css'

const Button = ({ show, showBtn }) => {
  return (
    <div>
        {!show ? (
        <button
          className="btn-plus"
          onClick={() => showBtn()}
        >
          show
          <i className="fa fa-plus"></i>
        </button>
      ) : (
        <button
          className="btn-moins"
          onClick={() => showBtn(!show)}
        >
          show
          <i className="fa fa-minus"></i>
        </button>
      )}
    </div>
  )
}

export default Button