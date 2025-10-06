import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Navbar = ({quesNumber, totalQues, reset}) => {
  return (
    <nav className='bg-green-800 text-white h-[10vh] transition-all duration-1000'>
        <Container className="flex h-full justify-between items-center">
          <Link onClick={reset} className='text-2xl font-semibold hover:text-green-400' href="/">আবার এক্সাম দেই 🥀</Link>

          <span className='text-2xl font-base'>{quesNumber}/{totalQues}</span>

        </Container>
    </nav>
  )
}

export default Navbar