import React from 'react';
import './App.css';

const recommendedBooks = [
  { id: 1, title: 'The Psychology of Money', author: 'Morgan Housel', cover: 'https://covers.openlibrary.org/b/id/10523338-L.jpg' },
  { id: 2, title: 'How Innovation Works', author: 'Matt Ridley', cover: 'https://covers.openlibrary.org/b/id/10523339-L.jpg' },
  { id: 3, title: 'Company of One', author: 'Paul Jarvis', cover: 'https://covers.openlibrary.org/b/id/10523340-L.jpg' },
  { id: 4, title: 'Stupore E Tremori', author: 'Amelie Nothomb', cover: 'https://covers.openlibrary.org/b/id/10523341-L.jpg' }
];

const categories = [
  { id: 1, name: 'Sci-Fi' },
  { id: 2, name: 'Fantasy' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Business' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Geography' }
];

function Home() {
  return (
    <div style={{ padding: '32px' }}>
      <div style={{ marginBottom: '32px', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ margin: 0 }}>Recommended</h2>
          <a href="#" style={{ color: '#3b82f6', fontWeight: 600, textDecoration: 'none' }}>See All &gt;</a>
        </div>
        <div style={{ display: 'flex', gap: '24px', overflowX: 'auto' }}>
          {recommendedBooks.map(book => (
            <div key={book.id} style={{ minWidth: 140, background: '#f9f9f9', borderRadius: 12, padding: 12, textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <img src={book.cover} alt={book.title} style={{ width: 90, height: 130, objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} />
              <div style={{ fontWeight: 600, fontSize: 15 }}>{book.title}</div>
              <div style={{ fontSize: 13, color: '#666' }}>{book.author}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '24px' }}>
        <h2 style={{ marginBottom: 16 }}>Categories</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <div key={cat.id} style={{ background: '#f3f4f6', borderRadius: 8, padding: '12px 24px', fontWeight: 600, fontSize: 15, color: '#222', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
