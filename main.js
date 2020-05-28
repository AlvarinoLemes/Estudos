class List {
    constructor() {
        this.todos = [];
    }

    add(data) {
          this.data.push(data);
          console.log(this.data);  
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Alvarino';
    }

    mostrarUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostrarUsuario();