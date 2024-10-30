import React from 'react';

function AINews() {
  return (
    <div className="left-space">
      <h2>AI News</h2>
      <img src="ai_news.png" alt="AI News" className="ai-image"/>
      <p>
        Here's the latest in AI news.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0ykFNRV3G10"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default AINews;

// initial working setup
// import React from 'react';

// function AINews() {
//   return (
//     <div>
//       <h2>AI News</h2>
//       <img src="your-ai-news-image-path.jpg" alt="AI News" />
//       <p>
//         Here's the latest in AI news.
//       </p>
//       <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/watch?v=w8pZ-67hVYg"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }

// export default AINews;
