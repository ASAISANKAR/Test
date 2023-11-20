import React from 'react'
import Navbar from './Navbar'

export default function Details() {
  return (
    <div className="App">
      <Navbar />
    <header className="App-header">
      <h1>A Sai Sankar</h1>
      <p>Web Developer</p>
    </header>
    <section className="About">
      <h2>About Me</h2>
      <p>
        Welcome to my portfolio! I am a passionate web developer with experience
        in building web applications using React and other technologies.
      </p>
    </section>
    <section className="Contact">
      <h2>Contact</h2>
      <p>Email: asankar2004@gmail.com</p>
    </section>
    {/* Add additional sections for Resume, Skills, Projects, etc. */}
  </div>
  )
}
