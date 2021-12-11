import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/Global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
