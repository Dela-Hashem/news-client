import React, { useState, useEffect } from 'react';

function NewsList() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("http://3.106.73.211:8080/api/news")
      .then(res => res.json())
      .then(data => setNewsList(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>News List</h2>
      {newsList.length === 0 ? (
        <p>No news found.</p>
      ) : (
        <ul>
          {newsList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsList;

// import React, { useState, useEffect } from 'react';

// function NewsList() {
//   const [newsList, setNewsList] = useState([]);

//   useEffect(() => {
//     fetch("http://3.106.73.211:8080/api/news")
//       .then(response => response.json())
//       .then(data => setNewsList(data))
//       .catch(error => console.error('Error fetching news:', error));
//   }, []);

//   return (
//     <div>
//       <h1>My News App</h1>
//       <h2>News List</h2>
//       {newsList.length === 0 ? (
//         <p>No news available.</p>
//       ) : (
//         <ul>
//           {newsList.map((news) => (
//             <li key={news.id}>
//               <strong>{news.title}</strong>: {news.content}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default NewsList;
