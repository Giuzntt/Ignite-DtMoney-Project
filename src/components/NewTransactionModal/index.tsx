import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from  "../../../src/assets/close.svg";
import incomeImg from  "../../../src/assets/entradas.svg";
import outcomeImg from  "../../../src/assets/saidas.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";


interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactinModal({isOpen, onRequestClose}: INewTransactionModalProps) {
  const[title, setTitle] = useState("");
  const[value, setValue] = useState(0);
  const[category, setCategory] = useState('');
  
  const[type, setType] = useState("deposit");
    function handleCreateNewTransaction(event: FormEvent){
      event.preventDefault();
      const data ={
        title,
        value,
        category,
        type
      }
      
      api.post('transactions', data);
    }

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className=" react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
          <h1>Cadastrar transação</h1>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType("deposit")}
              isActive={type === "deposit"}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => setType("withdraw")}
              isActive={type === "withdraw"}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    );
}