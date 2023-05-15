export function formataValor(fValor) {
    let valor = "R$: " + fValor.toFixed(2).replace(".", ",");
    return valor;
  }