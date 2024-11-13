import React from 'react'

export const Home = () => {
    const exit=()=>{
        window.location.href = '/';

    }
  return (
    <>
    <div className="container-home">
    <h2>WELCOME TO EXIT TEST</h2>
    <p className='home-text'>Read instructions clearly before proceding.</p>
    <button onClick={exit}>Exit</button>
    </div>
    </>
  )
}
