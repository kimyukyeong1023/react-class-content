import React from 'react'

export default function Homepage() {
  return (
    <div>
        <nav>
            <div className='nav-bar'>
            <div className='nav-left'>
                <img className='nav-profile'
                    src="https://png.pngtree.com/png-clipart/20240304/original/pngtree-cute-cat-illustration-wearing-a-bag-vector-png-image_14505847.png" alt="" />
                <h1>Kim yk</h1>
            </div>
            <div className='nav-right'>
                <button >Home</button>
                <button>About</button>
                <button>Skills</button>
                <button>My work</button>
                <button>Testimonial</button>
                <button>Contact</button>
            </div>
            </div>
            
        </nav>

        <main>
            <img className='main-profile' 
                src="https://png.pngtree.com/png-clipart/20240304/original/pngtree-cute-cat-illustration-wearing-a-bag-vector-png-image_14505847.png" alt="" />
            <p className='main-p'>Hello</p>
            <p className='main-p'>I`m <span>Coder</span>, Kim yk</p>
            <button>Contact Me</button>
            <i className='main-i'>⬆</i>

        </main>
    </div>
  )
}
