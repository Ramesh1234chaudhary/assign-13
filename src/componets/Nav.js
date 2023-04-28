import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='navbar'>
        <NavLink to='/'>Products</NavLink>
        <NavLink to='/form'>Form Item</NavLink>
      </div>
    </>
  )
}

export default Nav;
 