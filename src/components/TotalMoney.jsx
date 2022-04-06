const TotalMoney = ({ saldo }) => {
  return (
    <section className="App-main-containerForm-totalMoney">
      <section className="App-main-containerForm-totalMoney-cotainer">
        <p className="totalMoney-p1">Valor total:</p>
        <p className="totalMoney-p2">R$ {saldo}</p>
      </section>

      <section>
        <p className="totalMoney-p3">Valor se refere ao saldo</p>
      </section>
    </section>
  );
};

export default TotalMoney;
