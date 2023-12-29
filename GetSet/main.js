let valor = 0;
const objeto = {
  get() {
    return "Value: " + valor;
  },

  set(value) {
    valor = value * 2;
  },
};
