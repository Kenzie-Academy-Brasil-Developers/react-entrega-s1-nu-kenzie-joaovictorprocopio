import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Button from "./components/Button";
import React from "react";
import NuKenzieBlack from "./img/NuKenzieBlack.png";

function App() {
  const [listTransactions, setListTransactions] = useState("");

  const [newListTransactions, setNewListTransactions] = useState("");

  const [description, setDescription] = useState("");

  const [valor, setValor] = useState("");

  const [type, setType] = useState("");

  const setAtributs = (e) => {
    if (e.target.name === "description") {
      setDescription(e.target.value);
      console.log(description);
    } else if (e.target.name === "valor") {
      setValor("");
      const valorTemp = parseFloat(e.target.value);
      setValor(Math.abs(valorTemp));
      console.log(valor);
    } else if (e.target.name === "select") {
      setType(e.target.value);
    }
  };

  const sinal = () => {
    if (type === "saida" && valor > 0) {
      console.log(valor, "aqui 1");
      const valorTemp = parseFloat(valor) * -1;
      setValor(valorTemp);
      console.log(valor, "aqui 2");
    }
  };

  useEffect(() => {
    sinal();
    setNewListTransactions({ description, valor, type });
  }, [description, valor, type]);

  const attStatus = (e) => {
    e.preventDefault();
    setListTransactions([...listTransactions, newListTransactions]);
    setDescription("");
    setValor("");
    setType("");
    console.log(listTransactions);
  };

  //calculo de valor total

  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    const calculoValor = () => {
      if (listTransactions.length > 0) {
        const provi = listTransactions.reduce((a, b) => {
          return a + b.valor;
        }, 0);
        console.log(provi, "valor total");
        setValorTotal(provi);
      } else {
        setValorTotal(0);
      }
    };
    calculoValor();
  }, [listTransactions]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={NuKenzieBlack} alt="logo do Nu Kenzie" />
        <Button styleButton={"App-header-btnInicio"}>Inicio</Button>
      </header>
      <main className="App-main">
        <section className="App-main-containerForm">
          <Form
            setAtributs={setAtributs}
            attStatus={attStatus}
            description={description}
            valor={valor}
            type={type}
          />
          <TotalMoney saldo={valorTotal} />
        </section>
        <section className="App-main-containerList">
          <List listTransactions={listTransactions} />
        </section>
      </main>
    </div>
  );
}

export default App;
