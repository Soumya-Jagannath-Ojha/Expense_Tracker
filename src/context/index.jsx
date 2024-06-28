import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(CurrFormData){
    if(!CurrFormData.description || !CurrFormData.amount) return;

    setAllTransactions([...allTransactions, {...CurrFormData, id: Date.now()}])

  }

  console.log(allTransactions);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
