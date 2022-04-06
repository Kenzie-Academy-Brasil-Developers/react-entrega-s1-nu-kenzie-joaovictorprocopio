const Card = ({ key, description, valor, typeValor }) => {
  return (
    <>
      <li key={key}>
        <section>
          <h3>{description}</h3>
          <p>{valor}</p>
          <img src="/src/img/trash.svg" alt="excluir" />
        </section>
        <section>
          <p>{typeValor}</p>
        </section>
      </li>
    </>
  );
};

export default Card;
