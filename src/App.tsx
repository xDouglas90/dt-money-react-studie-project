import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/Global";


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
      <TransactionsProvider>
        <GlobalStyle />
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionsModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionsProvider>
    </>
  );
}
