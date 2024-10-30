import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Academics from './Academics';
import Work from './Work';
import Research from './Research';
import AINews from './AINews';
import './App.css'; // Assuming App.css is where the styles are added

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="center-content">
            <h1>Welcome to my Portfolio</h1>
            <img src="tritonSeaKing.jpg" alt="Portfolio" style={{ width: '300px', height: 'auto' }} />
          </div>
          <section className="left-space">
            <h2>About Me</h2>
            <p>
              My name is Edwin Ruiz, a Cognitive Science Major specializing in Machine Learning and Neural Computation. I am a UCSD IT Software Engineer & Lead, and part of the TritonGPT core team. I am also the Data Manager for the Muotri Lab. My interests lie in developing new forms of Artificial Intelligence Technology, Cognitive-Brain Inspired Technology, and Cognitive Robotics. Outside of Academics, Research and Work, I enjoy reading and writing poems, enjoying the best sunsets over oysters, and consider myself to be a water connoisseur.
            </p>
          </section>

          {/* Navigation Links */}
          <nav className="left-space">
            <ul>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/ainews">AI News</Link></li>
            </ul>
          </nav>

          {/* Define Routes */}
          <Routes>
            <Route path="/academics" element={<Academics />} />
            <Route path="/work" element={<Work />} />
            <Route path="/research" element={<Research />} />
            <Route path="/ainews" element={<AINews />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;


// initial working setup
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Academics from './Academics';  
// import Work from './Work';  
// import Research from './Research';  
// import AINews from './AINews';  


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Welcome to my Portfolio</h1>
//           <img src="your-image-path.jpg" alt="Portfolio" style={{ width: '300px', height: 'auto' }} />
//           <section>
//             <h2>About Me</h2>
//             <p>
//               {/* Write a brief about yourself here */}
//               I'm a Cognitive Science student with a specialization in Machine Learning, focused on research, AI, and more.
//             </p>
//           </section>

//           {/* Navigation Links */}
//           <nav>
//             <ul>
//               <li><Link to="/academics">Academics</Link></li>
//               <li><Link to="/work">Work</Link></li>
//               <li><Link to="/research">Research</Link></li>
//               <li><Link to="/ainews">AI News</Link></li>
//             </ul>
//           </nav>

//           {/* Define Routes */}
//           <Routes>
//             <Route path="/academics" element={<Academics />} />
//             <Route path="/work" element={<Work />} />
//             <Route path="/research" element={<Research />} />
//             <Route path="/ainews" element={<AINews />} />
//           </Routes>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;

// after installing 
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
