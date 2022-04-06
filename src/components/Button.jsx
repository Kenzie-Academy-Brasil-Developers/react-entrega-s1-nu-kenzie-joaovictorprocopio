const Button = ({ styleButton, children }) => {
  return (
    <>
      <button className={styleButton}>{children}</button>
    </>
  );
};

export default Button;
