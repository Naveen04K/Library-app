import React, { useState } from 'react';
import BookForm from './Bookform';
import BookList from './BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  return (
    <div className="App">
      <h1>Library App</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} />
    </div>
  );
};

export default App;
