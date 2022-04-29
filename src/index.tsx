import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  routes(){
    this.namespace = 'api';

    this.get("/transactions", () => {
      return [
        { id: 1, name: "Food", amount: -20 },
        { id: 2, name: "Gym", amount: -50 },
        { id: 3, name: "Salary", amount: 300 },
        { id: 4, name: "Book", amount: -10 },
      ];
    });
  }
}

)




root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

