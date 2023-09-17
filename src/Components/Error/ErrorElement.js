import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const err = useRouteError();
  return (
    <div>
        {err.message || err.stack || err}
    </div>
  )
}

export default ErrorElement