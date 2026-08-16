import { Link as NavLink } from 'react-router-dom'

export function Link ({ href, children, ...restOfProps }) {
  return (
    <NavLink to={href} {...restOfProps}>
      {children}
    </NavLink>
  )
}