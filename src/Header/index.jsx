import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
    <div className='boxes'>  
        <Link className='box' to={'./home'}>Home</Link>
        <Link className='box' to={'./todo'}>Todo</Link>
        <Link className='box' to={'./posts'}>Posts</Link>

    </div>
    )
  }