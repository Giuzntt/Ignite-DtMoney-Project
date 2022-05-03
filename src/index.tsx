import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  models:{
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 1000,
          createAt: new Date(" 2020-01-01 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel de apartamento",
          type: "withdraw",
          category: "Imobiliaria",
          amount: 1100,
          createAt: new Date(" 2020-01-11 19:00:00"),
        },
      ],
    });
  },

  routes(){
    this.namespace = 'api';

    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(
        request.requestBody
      )
      return schema.create('transaction', data);
      
    });
  }
}
)




root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

