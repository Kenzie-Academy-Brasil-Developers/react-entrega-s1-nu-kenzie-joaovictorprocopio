import Button from "./Button";
import Trash from "../img/Trash.png";

const List = ({ listTransactions }) => {
  console.log(listTransactions);

  return (
    <>
      <section className="App-main-containerList-head">
        <section>
          <p>Resumo financeiro</p>
        </section>
        <section className="App-main-containerList-head-buttons">
          <Button styleButton={"filtroTodos"} children={"Todos"} />
          <Button styleButton={"filtroEntradas"} children={"Entradas"} />
          <Button styleButton={"filtroDespesas"} children={"Despesas"} />
        </section>
      </section>
      <section className="App-main-containerList-cards">
        <ul>
          {listTransactions.length > 0 ? (
            listTransactions.map((item, index) => (
              <li
                className={
                  item.type === "entrada" ? "card-entrada" : "card-saida"
                }
                key={index}
              >
                <section className="card-head">
                  <div className="card-head-containerDescription">
                    <p>{item.description}</p>
                  </div>
                  <p className="card-head-valor">R$ {item.valor}</p>
                  <img
                    className="card-head-excluir"
                    src={Trash}
                    alt="excluir"
                  />
                </section>
                <section className="card-type">
                  <p>{item.type}</p>
                </section>
              </li>
            ))
          ) : (
            <li className="lista-vazia">
              <p>Você ainda não possui nenhum lançamento</p>
              <di className="card-vazio">
                <div className="elemento1"></div>
                <div className="elemento2"></div>
              </di>
              <di className="card-vazio">
                <div className="elemento1"></div>
                <div className="elemento2"></div>
              </di>
              <di className="card-vazio">
                <div className="elemento1"></div>
                <div className="elemento2"></div>
              </di>
            </li>
          )}
        </ul>
      </section>
    </>
  );
};

export default List;
