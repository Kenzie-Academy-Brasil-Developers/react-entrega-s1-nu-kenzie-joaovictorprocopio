const Form = () => {
  return (
    <>
      <form>
        <label for="description">Descrição</label>
        <input type="text" id="description" />

        <section>
          <label for="valor">Valor</label>
          <input tipe="number" id="valor" />

          <label for="select">Tipo de valor</label>
          <select id="select">
            <option value="valor1" selected>
              Entrada
            </option>
            <option value="valor2">Despesa</option>
          </select>
        </section>

        <button>Inserir Valor</button>
      </form>
    </>
  );
};

export default Form;
