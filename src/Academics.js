import React from 'react';

function Academics() {
  return (
    <div className="left-space">
      <h2>Academics</h2>
      {/* Add a class to the img tag for size control */}
      <img src="academic_prof.png" alt="Academics" className="academic-image" />
      <p>
        Here's a description of my academic background and projects.
      </p>
      <a href="3.S2_React!.pdf" target="_blank" rel="noopener noreferrer">
        Cogs 125 Project
      </a>
    </div>
  );
}

export default Academics;


// without resizing image
// import React from 'react';

// function Academics() {
//   return (
//     <div className="left-space">
//       <h2>Academics</h2>
//       <img src="academic_prof.png" alt="Academics" />
//       <p>
//         Here's a description of my academic background and projects.
//       </p>
//       <a href="3.S2_React!.pdf" target="_blank" rel="noopener noreferrer">
//         Cogs 125 Project
//       </a>
//     </div>
//   );
// }

// export default Academics;


// initial working
// import React from 'react';

// function Academics() {
//   return (
//     <div>
//       <h2>Academics</h2>
//       <img src="your-academics-image-path.jpg" alt="Academics" />
//       <p>
//         Here's a description of my academic background and projects.
//       </p>
//       <a href="/path-to-your-pdf.pdf" target="_blank" rel="noopener noreferrer">
//         Cogs 125 Project
//       </a>
//     </div>
//   );
// }

// export default Academics;
