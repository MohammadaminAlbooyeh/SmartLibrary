import React from 'react';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 4, title: '1984', author: 'George Orwell' }
];

function MyLibrary() {
  return (
    <div style={{ padding: '32px' }}>
      <h2>My Library</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map(book => (
          <li key={book.id} style={{
            background: '#f9f9f9',
            margin: '12px 0',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyLibrary;
