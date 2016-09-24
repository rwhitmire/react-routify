import React from 'react'

const Link = ({to, ...rest}) => {
  const props = {
    href: to,
    ...rest
  }

  return <a {...props} />
}

export default Link
