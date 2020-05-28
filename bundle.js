class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }

}

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};
