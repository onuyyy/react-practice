import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";
import ExpenseList from "./components/ExpenseList";

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 3000 },
    { id: 2, charge: "교통비", amount: 2000 },
    { id: 3, charge: "식비", amount: 1000 },
    { id: 4, charge: "소모품비", amount: 7000 },
  ]);

  // 가짜 데이터 만들기
  // ExpenseList -> ExepnseItem으로 데이터를 전송해야 한다
  // const initialExpenses = [
  //   { id: 1, charge: "렌트비", amount: 3000 },
  //   { id: 2, charge: "교통비", amount: 2000 },
  //   { id: 3, charge: "식비", amount: 1000 },
  // ];

  const handleDelete = (id) => {
    // const newExpenses = this.initialExpenses.filter(expense => expense.id != id)
    const newExpenses = expenses.filter(
      (expense) => expense.id != id
    );

    setExpenses(newExpenses);
    console.log(newExpenses);
  };

  return (
    <main className="main-container">
      <h1>예산 계산기</h1>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm />
      </div>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList
          //initialExpenses={this.initialExpenses}
          initialExpenses={expenses}
          handleDelete={handleDelete}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총 지출:
          <span>원</span>
        </p>
      </div>
    </main>
  );
};

// 내보내줘야 index.js 에서 사용할 때 가져와서 사용할 수 있다.
// default : 메인으로 내보낸다는 뜻
export default App;
