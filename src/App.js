import { Component } from "react";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";


class App extends Component {
  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseForm />
        </div>

        <div style={{width:'100%', backgroundColor: 'white', padding: '1rem'}}>
          {/*Expense List*/}
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
          <p style={{ fontSize: '2rem'}}>
            총 지출:
            <span>원</span>
          </p>
        </div>
      </main>
    )
  }
}


// 내보내줘야 index.js 에서 사용할 때 가져와서 사용할 수 있다.
// default : 메인으로 내보낸다는 뜻
export default App;