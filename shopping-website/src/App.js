import React from 'react';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App container mx-auto mt-10">
      <h1 className="text-3xl font-bold underline text-center mb-6">
        Find all your gadjets in one place!!
      </h1>
      <ProductList />
    </div>
  );
}

export default App;