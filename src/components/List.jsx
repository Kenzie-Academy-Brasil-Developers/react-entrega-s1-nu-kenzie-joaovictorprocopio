import Button from "./Button";

const List = ({ children }) => {
  return (
    <>
      <section>
        <section>
          <h2>Resumo financeiro</h2>
        </section>
        <section>
          <Button children={"Todos"} />
          <Button children={"Entradas"} />
          <Button children={"DEspesas"} />
        </section>
      </section>
      <section>{children}</section>
    </>
  );
};

export default List;
