import React from 'react';

const categories = [
  { id: 1, name: 'Fiction', description: 'Famous novels and fictional stories' },
  { id: 2, name: 'Science', description: 'Books about physics, chemistry, and biology' },
  { id: 3, name: 'History', description: 'Books about historical events around the world' },
  { id: 4, name: 'Children & Teens', description: 'Books for younger readers and teens' }
];

function Category() {
  return (
    <div style={{ padding: '32px' }}>
      <h2>Book Categories</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {categories.map(category => (
          <li key={category.id} style={{
            background: '#f9f9f9',
            margin: '12px 0',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
