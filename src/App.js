import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from './components/Alert'

const App = () => {

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({show: false});

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

  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber) // e.target.value는 string이라 검사 위하여
  }

  const handleAlert = ({type, text}) => {
    setAlert({show: true, type: type, text: text})
    setTimeout(() => {
      setAlert({ show: false});
    }, 7000); 
  }

  const handleDelete = (id) => {
    // const newExpenses = this.initialExpenses.filter(expense => expense.id != id)
    const newExpenses = expenses.filter(
      (expense) => expense.id != id
    );

    setExpenses(newExpenses);
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.'})
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (charge !== "" && amount > 0) {
      const newExpense = {id: crypto.randomUUID(), charge, amount}

      // 불변성을 지켜주기 위한 새로운 expenses를 생성
      const newExpenses = [...expenses, newExpense]
      setExpenses(newExpenses)
      setCharge("");
      setAmount(0);
      handleAlert({type: 'success', text: '아이템이 생성되었습니다.'})
    } else {
      console.log('error');
      handleAlert({
        type: 'danger',
        text: 'charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다.'
      })
    }
  }

  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm 
        handleCharge={handleCharge}
        charge={charge} 
        handleAmount={handleAmount}
        handleSubmit={handleSubmit}
        amount={amount} />
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
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
            원</span>
        </p>
      </div>
    </main>
  );
};

// 내보내줘야 index.js 에서 사용할 때 가져와서 사용할 수 있다.
// default : 메인으로 내보낸다는 뜻
export default App;
