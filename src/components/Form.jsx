const Form = ({ setAtributs, attStatus, description, valor, type }) => {
  return (
    <>
      <form className="App-main-containerForm-form">
        <section className="section-containerInput">
          <label>Descrição</label>
          <input
            onChange={(e) => {
              setAtributs(e);
            }}
            type="text"
            name="description"
            id="description"
            placeholder="Digite aqui sua descrição"
            className="App-main-containerForm-formInput"
            required
            value={description}
          />
        </section>

        <section className="section-container">
          <section className="section-containerInput">
            <label>Valor</label>
            <input
              onChange={(e) => {
                setAtributs(e);
              }}
              tipe="number"
              name="valor"
              id="valor"
              required
              value={valor}
            />
          </section>

          <section className="section-containerInput">
            <label>Tipo de valor</label>
            <select
              onChange={(e) => {
                setAtributs(e);
              }}
              name="select"
              id="select"
              required
              value={type}
            >
              <option value="">Selecione</option>
              <option value="entrada">Entrada</option>
              <option value="saida">Despesa</option>
            </select>
          </section>
        </section>

        <button
          onClick={(e) => {
            attStatus(e);
          }}
        >
          Inserir Valor
        </button>
      </form>
    </>
  );
};

export default Form;
