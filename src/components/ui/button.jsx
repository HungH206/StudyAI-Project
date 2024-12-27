import React from 'react'

export const Button = ({ children, className, asChild, ...props }) => {
  const Comp = asChild ? 'a' : 'button'
  return (
    <Comp
      className={`px-4 py-2 rounded font-medium ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
};

export default Button;