const TotalMoney = ({ saldo }) => {
  return (
    <>
      <section>
        <h3>Valor total:</h3>
        <p>Valor se refere ao saldo</p>
      </section>

      <section>
        <p>{saldo}</p>
      </section>
    </>
  );
};

export default TotalMoney;
