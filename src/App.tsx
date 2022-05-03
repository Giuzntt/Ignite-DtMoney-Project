import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/styles";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactinModal } from "./components/NewTransactionModal";


Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseModalNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
    
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

     <NewTransactinModal  
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModalNewTransactionModal}
     />

      <GlobalStyle />
    </>
  );
}

