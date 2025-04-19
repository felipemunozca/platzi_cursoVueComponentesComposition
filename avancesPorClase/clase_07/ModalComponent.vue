<!--
    N_7.2: Se crea la estructura de un nuevo componente con las etiquetas: template, script, styles.
    Se agrega un div que almacenara todo y un botón que accionara el modal.
    El botón tendrá un evento click y que haga un cambio, por eso el nombre "toggle".
    Se agrega un nuevo div con la clase modal, dentro tendrá un titulo, un párrafo y un botón para cerrar el modal.

    N_7.5: Se agrega al div contenedor la directiva "v-show" que utilizara CSS para mostrar u ocultar un elemento.
    A esta directiva se le agrega una variable que sera booleana llamada "show".

    N_7.8: Se agrega el componente de tipo <teleport> para mover todo el contenido del div modal.
    Nos preguntara donde lo queremos mover, para eso se puede utilizar el atributo "to" y puede tener cualquier valor, un pseudo 
        selector, un id o una clase (no recomendado ya que se puede repetir muchas veces).
-->
<template>
    <div>
        <button @click="toggle">Modal</button>
        <teleport to="body">
            <div v-show="show" class="modal">
                <h1>Titulo</h1>
                <p>Lorem ipsum dolor</p>
                <button @click="toggle">Cerrar</button>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    /**
     * N_7.6: Dentro de la función data() se retorna la variable show, que tendrá el valor false por defecto.
     */
    data() {
        return {
            show: false,
        };
    },
    /**
     * N_7.7: Dentro de methods, se agrega la función toggle() que tendrá como tarea, actualizar el valor de la variable "show" 
     *      para que se convierta en el valor contrario.
     * La linea de código: this.show = !this.show; --> se puede traducir como:
     *      - Si el valor de show es true, se convierte a false.
     *      - Si el valor de show es false, se convierte a true.
     */
    methods: {
        toggle() {
            this.show = !this.show;
        },
    },
};
</script>

<style>
/**
    N_7.9: Se agregan algunas clases CSS para personalizar el modal.
 */
.modal {
    background-color: #dceeff;
    padding: 10px;
}
</style>
