import React from 'react';

function Research() {
  return (
    <div className="left-space">
      <h2>Research</h2>
      <img src="researching.png" alt="Research" className="research-image"/>
      <p>
        Here's a description of my research activities.
      </p>
      <a href="/path-to-your-pdf.pdf" target="_blank" rel="noopener noreferrer">
        Research Project PDF
      </a>
    </div>
  );
}

export default Research;

// images working locally but not for deployment
// import React from 'react';

// function Research() {
//   return (
//     <div className="left-space">
//       <h2>Research</h2>
//       <img src="researching.png" alt="Research" className="research-image"/>
//       <p>
//         Here's a description of my research activities.
//       </p>
//       <a href="/path-to-your-pdf.pdf" target="_blank" rel="noopener noreferrer">
//         Research Project PDF
//       </a>
//     </div>
//   );
// }

// export default Research;


// initial working setup
// import React from 'react';

// function Research() {
//   return (
//     <div>
//       <h2>Research</h2>
//       <img src="your-research-image-path.jpg" alt="Research" />
//       <p>
//         Here's a description of my research activities.
//       </p>
//       <a href="/path-to-your-pdf.pdf" target="_blank" rel="noopener noreferrer">
//         Research Project PDF
//       </a>
//     </div>
//   );
// }

// export default Research;
