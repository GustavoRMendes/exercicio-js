const resultado = () => {
  try {
    codigo;
  } catch (error) {
    console.error(` Aconteceu um erro no código. O erro é esse: ${error}`); 
  } finally {
    console.info("Essa mensagem sempre será mostrada");
  }
};

resultado();
