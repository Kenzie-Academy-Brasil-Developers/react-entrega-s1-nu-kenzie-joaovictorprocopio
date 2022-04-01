const Card = ({ description, valor, typeValor }) => {
  return (
    <>
      <section>
        <section>
          <h3>{description}</h3>
          <p>{valor}</p>
          <button></button>
        </section>
        <section>
          <p>{typeValor}</p>
        </section>
      </section>
    </>
  );
};

export default Card;
