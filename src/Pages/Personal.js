import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';


const defaultTheme = createTheme();

export default function Personal() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div
        style={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: defaultTheme.palette.mode === 'light' ? defaultTheme.palette.grey[50] : defaultTheme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      > 
      <Navbar />
      <h1 style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}> 🚀 Welcome to A Sai Sankar's World of Creativity! 🌟 </h1>

<h2 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>Hello there! I'm A Sai Sankar, a passionate UG Student with a knack for turning ideas into immersive experiences.
</h2>
<h2 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>🎨 Crafting Digital Masterpieces</h2>
<h2 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>🛠️ Skills that Speak Volumes</h2>

<h2 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>🔍 A Passion for Problem-Solving</h2>
<h2 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>🌐 Digital Alchemist</h2>
<h2 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>🤝 Let's Create Together</h2>
<h2 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>📌 Explore My Portfolio: Dive into my showcase of 2 years of hard work, creativity, and a passion for excellence. Each project tells a unique story, and I invite you to explore the diverse range of work that defines my journey.
</h2>
<h4 style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>Ready to embark on a creative adventure? Let's connect and turn your ideas into reality.
</h4>

<h4 style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>💌 Get in Touch: asankar2004@gmail.com
</h4>
     
      </div>
    </ThemeProvider>
  );
}
