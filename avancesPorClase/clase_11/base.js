/*
    N_11.1: Se crea una carpeta nueva para almacenar los archivos que se utilizaran como mixins.
    Ademas se crea un nuevo archivo llamado base.js y puede ser un archivo que solo utilice .js ya que solo sera la parte del componente que se escribe con el lenguaje JavaScript.

    N_11.2: Lo primero es agregar la propiedad export default{} para poder utilizar este código en otros archivos.
    Luego se agregan las funciones data() y created() como si se tratara de un componente.

    N_11.3: La función data() va a retornar un texto guardado en una nueva variable llamada "algo".
    Se agrega un mensaje por consola para el ciclo de vida created().
*/
export default {
    data() {
        return {
            algo: "Un texto desde el archivo base",
        };
    },
    created() {
        console.log("archivo base creado");
    },
};
