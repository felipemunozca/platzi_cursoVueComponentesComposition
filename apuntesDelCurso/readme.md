# Curso de Vue.js: Componentes y Composition API

## Índice
* [Clase 02 - Introducción a Vue CLI](#id2)
* [Clase 03 - Estructura del proyecto](#id3)
* [Clase 04 - Componentes dinámicos](#id4)
* [Clase 05 - Componentes asíncronos](#id5)
* [Clase 06 - Transiciones](#id6)
* [Clase 07 - Teleports](#id7)
* [Clase 08 - Virtual DOM](#id8)
* [Clase 09 - Entendiendo el ciclo de vida de los componentes](#id9)
* [Clase 10 - Explorando los primeros hooks del ciclo de vida de Vue](#id10)
* [Clase 11 - Mixins](#id11)
* [Clase 12 - Introducción a Composition API](#id12)
* [Clase 13 - Ciclo de vida en Composition API](#id13)
* [Clase 14 - Variables reactivas con ref y reactive](#id14)
* [Clase 15 - Watch](#id15)
* [Clase 16 - Computed](#id16)
* [Clase 17 - Uso de props](#id17)
* [Clase 18 - Uso de context](#id18)
* [Clase 19 - Provide / Inject](#id19)
* [Clase 20 - Template refs](#id20) //
* [Clase 21 - Composition VS Options](#id21)
* [Clase 22 - Script setup](#id22)

---

## Introducción a Vue CLI [2/23]<a name="id2"></a>
La CLI de Vue.js es una herramienta poderosa que facilita la gestión de proyectos. Para instalarla, se pueden seguir los pasos de la [documentación oficial](https://cli.vuejs.org/guide/installation.html).
Los pasos para realizar la instalación son:
Abrir la consola desde Visual Studio Code y escribir el comando:
````
# Instalación usando NPM
npm install -g @vue/cli

# Instalación usando Yarn
yarn global add @vue/cli
````
Una vez terminada la instalación, se pueden verificar las opciones disponibles usando el comando:
````
vue --help
````
Para saber la version de Vue que se instalo, se utiliza el comando:
````
vue --version
````

> [!NOTE]
> El profesor tiene instalada la version: 4.5.15
> En mi equipo quedo instalada la version: 5.0.8

### ¿Cómo crear un nuevo proyecto con Vue.js?
Utilizar el framework implica poder gestionar archivos .vue, estructuras de carpetas y un servidor basado en Webpack. 
Desde la consola, para crear un proyecto, se debe utilizar el siguiente comando:
````
vue create nombre-del-proyecto
````
En este curso, el nombre del proyecto sera **options**.

Luego, la CLI ofrecerá opciones para configurar el proyecto:

> [!NOTE]
> Esta configuración sera para este proyecto, en los próximos proyectos se utilizaran y agregaran otras opciones.

1. Que version utilizar:
Para este ejercicio se seleccionara "opciones manuales" para configurar todo por nosotros mismos:
````
	Default ([Vue 3] babel, eslint)
	Default ([Vue 2] babel, eslint)
	> Manually select features
````
2. Aparecerá un listado de opciones para agregar y preconfigurar en el proyecto.
Con la tecla **espacio** se puede seleccionar o des-seleccionar cada opción. Se dejan seleccionadas las opciones:
````
    (*) Babel
    (*) Linter/formatter
````
3. Preguntara que version de Vue utilizar, seleccionar:
````
    (*) 3.x
        2.x
````
4. Preguntara que configuración de linter utilizar, seleccionar:
````
    (*) ESLint + Prettier
````
5. Preguntara si cada vez que se guarde un cambio, muestre los errores, seleccionar:
````
    (*) Lint on save
````
6. Preguntara si la configuración de babel, eslint, etc. Se realicen en sus propios archivos de configuración o todo dentro del package.json, seleccionar:
````
    (*) In dedicated config
````
7. Finalmente, preguntara si se quiere guardar esta misma configuración para futuros proyectos (s/N), para este caso sera NO ya que realizaremos nuevas configuraciones en futuros proyectos:
````
    > N
````

Si todos los pasos se siguieron correctamente, se creara la carpeta **options** y dentro, una serie de archivos y carpetas con la configuración básica.
Lo primero que se debe hacer, dentro de la consola, moverse a la carpeta del proyecto:
````
	cd options
````

### ¿Cómo funcionan los scripts preconfigurados?
Al crear el proyecto, dentro del archivo **package.json** se generarán diversos scripts que facilitan manejar tareas comunes:

+ **serve**: Permite ejecutar un servidor local en modo de desarrollo.
````
npm run serve
````
+ **build**: Compila y optimiza tu aplicación para producción.
````
npm run build
````
+ **lint**: Revisa y corrige errores de sintaxis automáticamente.
````
npm run lint
````

### ¿Cómo usar Vue UI para gestionar tus proyectos?
Vue CLI ofrece una interfaz gráfica que se abre dentro de una pestaña del navegador llamada **Vue UI** que permite gestionar proyectos de manera visual.
Para levantar la UI, en la consola escribir el comando:
````
vue ui
````
Esta herramienta te permite:
* Crear e importar proyectos.
* Añadir plugins y dependencias.
* Configurar opciones de linting y estilizado.
* Ejecutar y gestionar comandos de forma intuitiva.

---

### Actualización de como usar Vue 3 en 2024
Desde 2024, la [documentación oficial](https://vuejs.org/guide/quick-start) de Vue recomienda crear nuevos proyectos siguiendo los siguientes pasos:

> [!IMPORTANT]
> Al ejecutar el comando create vue@latest, en la consola preguntara si queremos utilizar la version 3.15.1.
> Solo se puede responder "y", cualquier otra letra cancelara la operación.

1. Ejecutar el comando:
````
npm create vue@latest
````
2. Preguntara el nombre del proyecto, para este ejemplo sera:
````
optionsLatest
````
3. Preguntara el nombre del package, por defecto mostrara el nombre del proyecto:
````
optionsLatest
````
4. Preguntara si queremos incluir alguna de las siguientes características al proyecto, se utiliza la tecla espacio para seleccionar, para este ejemplo repetiremos las elecciones del proyecto **options**:
````
[ ] Typescript
[ ] JSX support
[ ] Router
[ ] Pinia
[ ] Vitest
[ ] End to end testing
[*] Eslint
[*] Prettier
````
5. Preguntara si queremos instalar Oxlint, para este ejemplo sera:
````
No
````
6. Con los pasos anteriores, ya queda configurado el proyecto. A continuación, desde la consola se debe entrar a la carpeta del proyecto:
````
cd optionsLatest
````
7. Luego se deben instalar los paquetes necesarios, con el comando:
````
npm install
````
8. Una vez que terminen de instalar las dependencias, se puede levantar el proyecto y probar si esta todo funcionando correctamente con el comando:
````
npm run dev
````

---

## Estructura del proyecto [3/23]<a name="id3"></a>
La organización de archivos en un proyecto de Vue es esencial para mantener un flujo de trabajo efectivo y ordenado.
Con un conocimiento sólido de las carpetas y archivos clave, se puede desarrollar aplicaciones más organizadas y escalables.

### ¿Qué contiene el archivo package.json?
Es el corazón de cualquier proyecto basado en **Node.js** que usa **NPM** para la gestión de dependencias. Este archivo:
* Define los scripts importantes, como la ejecución del servidor de desarrollo y la compilación para producción.
* Almacena el historial de dependencias del proyecto que se pueden adicionar conforme se avanza en el desarrollo.
* Incluye log.json, que documenta las versiones y dependencias específicas utilizadas.

### ¿Cuál es la función del archivo README?
Sirve como una guía rápida, proporcionando:
* Instrucciones para instalar dependencias.
* Comandos para ejecutar el servidor de desarrollo y compilar para producción.
* Enlaces a la documentación oficial, facilitando la comprensión de la herramienta de terminal de comandos Vue.

### ¿Qué papel juega Babel en el proyecto?
Babel es un transpilador esencial para convertir el código ECMAScript más reciente a una versión compatible con navegadores más antiguos. Este archivo :
* Se incluye un preset básico que facilita su uso sin configuraciones complejas.
* Se asegura de que se puede escribir JavaScript moderno, maximizando las mejores prácticas y características.

### ¿Para qué sirve el archivo .gitignore?
Este archivo es crucial para el control de versiones. Este archivo:
* Ignora archivos y directorios que no se desean registrar en el control de versiones, como *node_modules* o los generados durante la compilación.
* Asegura que solo los archivos necesarios se versionan, manteniendo repositorios limpios.

### ¿Qué configuraciones extra incluye un proyecto Vue por defecto?
Al crear un proyecto Vue con la CLI, se obtienen configuraciones preestablecidas, incluyendo:
* **eslint** con configuraciones básicas recomendadas.
* Integración con **Prettier** para mantener un formato de código coherente.
* Reglas específicas para evitar el uso de console.log en producción, promoviendo un código limpio.

### ¿Dónde se encuentran las dependencias instaladas?
Dentro de node_modules residen todas las dependencias instaladas. Consideraciones claves:
* Este directorio no se debería subir al control de versiones, ya que se puede reconstruir con el comando **npm install**.
* Facilita la gestión y actualización de bibliotecas externas.

### ¿Qué hay dentro de la carpeta public?
La carpeta public actúa como el servidor de archivos estáticos. Dentro se encuentra:
* Un archivo **index.html** que en un principio sera una plantilla inicial, no será el archivo final en producción.
* Archivos que están accesibles como recursos estáticos desde el navegador.

### ¿Cómo se organiza la carpeta src?
La carpeta src es el núcleo del desarrollo frontend. Dentro se encuentra:
+ El archivo **main.js** es el punto de entrada, inicializando la aplicación Vue.
+ **App.vue** actúa como el componente raíz, donde se ensambla el resto de los componentes.
+ **components/** guarda los componentes Vue, organizable en subcarpetas si así se necesita.
+ **assets/** contiene archivos estáticos empaquetados junto con el código de la aplicación, tales como imágenes y css.

### ¿Qué diferencia hay entre las carpetas assets y public?
Aunque ambas carpetas contienen archivos estáticos, sus funciones son diferentes:
* assets: Se empaquetan con el proyecto, accesibles desde el lado del cliente.
* public: Contiene archivos que sirven el contenido estático del servidor, no integrados en el paquete final del JavaScript.

### ¿Cómo puedo personalizar mi estructura de proyecto?
La flexibilidad de los proyectos Vue:
* Permite la creación de subcarpetas dentro de assets y components para mejorar la organización.
* Posibilita ajustes en configuraciones y estructuras según las necesidades específicas del proyecto.
* Incentiva un diseño modular que facilita el mantenimiento y ampliación futura de tu código.

---

## Componentes dinámicos [4/23]<a name="id4"></a>
En el desarrollo web moderno, Vue.js se ha destacado como una herramienta poderosa gracias a su enfoque en la creación de interfaces de usuario mediante la utilización de componentes. La estructura básica de un proyecto en Vue.js aprovecha la sintaxis de ECMAScript, proporcionando una base sólida para el desarrollo.

### ¿Qué es un componente en Vue.js?
Un componente es una parte reutilizable de la interfaz que encapsula HTML, JavaScript y CSS. Estos componentes son esenciales para crear aplicaciones modulares y escalables. Por ejemplo, en un archivo **.vue** se estructura de la siguiente manera:
+ **Template**: Define la estructura HTML.
+ **Script**: Incluye el JavaScript que controla la lógica del componente.
+ **Style**: Permite estilizar el componente.

La ventaja principal de utilizar componentes es que permiten tener una estructura más organizada, integrando cada pieza de la interfaz con sus funcionalidades y estilos en un único archivo.

### ¿Cómo se registran los componentes?
Para utilizar un componente dentro de un proyecto Vue.js, es fundamental registrarlo en la instancia de Vue:
````javascript
import HelloWorld from './components/HelloWorld.vue'; // Importar el componente

export default {
  components: {
    HelloWorld // Registrar el componente
  }
};
````
En este ejemplo, el componente **HelloWorld** se importa desde la carpeta de **components** y se registra en el objeto components de Vue. Esto habilita su uso dentro de la parte de Template, permitiendo que se incluya fácilmente en la interfaz de usuario.

### ¿Qué son los componentes dinámicos?
Los componentes dinámicos son una característica avanzada de Vue.js que permite cambiar un componente en tiempo real basado en estados o propiedades. Esto es especialmente útil para aplicaciones interactivas que dependen de datos externos como respuestas del servidor o entradas del usuario.

### ¿Cómo funcionan los componentes dinámicos?
Para implementar componentes dinámicos, Vue.js utiliza el componente < component >, que emplea un atributo especial llamado **:is**. Este atributo define qué componente se debe renderizar:
````html
<component :is="nombreComponente"></component>
````
La variable *nombreComponente* puede ser un nombre de componente almacenado en el estado de la aplicación, que puede cambiar según las interacciones del usuario o eventos del sistema.

### ¿Cómo se implementan los componentes dinámicos?
Utilizamos como base el código por defecto y se agrega la propiedad data() y dentro se define qué componente se debe mostrar:
````javascript
data() {
  return {
    componenteActual: 'HelloWorld'
  };
}
````
Y dentro del template se utiliza la siguiente estructura para un componente dinámico:
````
<template>
  <component :is="componenteActual"></component>
</template>
````
El componente por defecto, *HelloWorld*, se renderizará solo si se define y se registra adecuadamente en el componente padre. 
Los beneficios de utilizar esta forma de renderizado son significativos: se puede modificar de manera reactiva qué partes de tu aplicación se muestran sin afectar la estructura que ya existe o los elementos cercanos.

### ¿Cómo se aplica el scope en los estilos?
Dentro de los estilos de un Single File Component (SFC), los estilos aplicados son globales a menos que se especifique lo contrario. Para aislar los estilos de un componente y evitar que afecten al resto de la aplicación, Vue.js permite el uso del atributo scoped:
````css
<style scoped>
  /* Estilos limitados a este componente */
  .mi-clase {
    color: blue;
  }
</style>
````
Esto asegura que los estilos aplicados a los elementos del template de un componente no se propaguen a otros componentes, manteniendo la encapsulación y el control de diseño necesario en proyectos más grandes.

---

### Corregir errores que pueden aparecer en Visual Studio Code.

#### Primer problema
Si al abrir un archivos como *vue.config.js* o *babel.config.js* aparece el siguiente error **Parsing error: No Babel config file detected.**
En el menu de Visual Studio Code, ir al menu: archivo --> preferencias -->  configuración
En la barra de búsqueda que aparecerá, escribir **eslint**.
La ventana cambiara su contenido, se debe bajar hasta encontrar un enlace en azul que dice editar en settings.json
Se abrirá una nueva ventana donde se debe agregar el siguiente código:
````
"eslint.workingDirectories": [
        {"mode": "auto"}
 ],
````
Se guardan los cambios y con eso debería desaparecer el mensaje de error.

#### Segundo problema
Si al abrir un archivo *.vue* aparece el siguiente error: **[vue/no-multiple-template-root] The template root requires exactly one element.**
Se debe a que la extension **Vetur** de Visual Studio Code no es capaz de encontrar el archivo de configuración, los que tienen config en su nombre.
Para solucionarlo, solo se debe abrir el proyecto solo en VSC.
Desde la consola, posicionarse en la carpeta del proyecto y escribir el comando:
````
code .
````

---

## Componentes asíncronos [5/23]<a name="id5"></a>
Los componentes asíncronos en Vue.js son una formidable herramienta que mejora de gran manera el rendimiento y la experiencia de usuario de nuestras aplicaciones. En esencia, permiten cargar componentes solo cuando son necesarios, evitando así la carga inicial de elementos que el usuario podría no utilizar de inmediato. Esto no solo optimiza el tiempo de carga de las aplicaciones, sino también el uso de los recursos del navegador, haciendo que las aplicaciones sean más livianas y ágiles.

### ¿Cómo configurar los DevTools de Vue.js?
El primer paso sera buscar la herramienta Vue DevTools. La instalación es sencilla:
1. Accede a la Chrome Store (o Firefox Add-ons si usas Firefox).
2. Buscar **Vue.js DevTools**.
3. Instala la versión en el navegador.

Luego de la instalación, cerrar y reabrir la pestaña del navegador para que las DevTools de Vue.js funcionen correctamente.

### ¿Cómo implementar un componente asíncrono en Vue.js?
Para crear un componente asíncrono, se utiliza la función **defineAsyncComponent** proporcionada por la biblioteca de Vue.js. Este es un procedimiento simple que se lleva a cabo mediante estos pasos:

1. Importar la función defineAsyncComponent:
````javascript
import { defineAsyncComponent } from "vue";
````
2. Definir el componente de manera asíncrona: Se declara una variable para el componente y se define el uso de defineAsyncComponent mediante una función flecha para importar el componente deseado.
````javascript
const HelloWorld = defineAsyncComponent(() => import("./components/HelloWorld.vue"));
````
3. Registrar el componente: se declara el nombre de la variable en la sección *components* de tu componente padre para que Vue.js lo reconozca y se pueda utilizar.

Con esta configuración, el componente se cargará solo cuando sea necesario, mejorando así la eficiencia de tu aplicación.

> [!IMPORTANT]
> El profesor crea el código para importar el componente en una sola linea, pero la dependencia **eslint** lo marca como error ya que debe hacerse respetando una separación de enter y espacios. Leer la ayuda que entrega VSC para corregirlo.

````javascript
const HelloWorld = defineAsyncComponent(() =>
  import("./components/HelloWorld.vue")
);
````

### ¿Qué ventajas ofrece el uso de componentes asíncronos?
Ofrece varias ventajas importantes como:
* Rendimiento mejorado: Al cargar únicamente los componentes necesarios, se reduce en gran parte el tiempo de carga inicial de la aplicación.
* Código más limpio y organizado: Separar los componentes en distintos archivos permite mantener un código más estructurado y fácil de mantener.
* Optimización del uso de recursos: Mejora el uso de recursos tanto del cliente como del servidor, al no requerir la carga completa de todos los componentes desde el inicio.

### ¿Qué sucede al compilar una aplicación Vue.js?
Cuando se compila una aplicación se genera una carpeta **dist** que contiene todos los archivos necesarios para ejecutar la aplicación en un entorno de producción. Este proceso elimina la carpeta anterior y crea una nueva con los siguientes elementos:
* Archivos CSS y JavaScript minificados: Estos archivos son utilizados para asegurar que la aplicación sea ligera y rápida de cargar.
* Archivos estáticos: Imágenes y otros recursos que la aplicación utiliza.
* Código JavaScript compilado: El archivo principal de JavaScript que incluye la lógica de la aplicación.
* Versionado de archivos: Cada archivo recibe un identificador único (id) para facilitar el manejo de versiones y evitar confusiones con versiones anteriores.

---

## Transiciones [6/23]<a name="id6"></a>
Uno de los componentes más importantes dentro de Vue.js es el componente **Transition**. Este permite aplicar estilos CSS a elementos que aparecen o desaparecen en pantalla, como por ejemplo un menú desplegable.

### ¿Cómo se configura un proyecto?
El proyecto sera un menú que se muestra y oculta. Esto se logra mediante la manipulación de una variable booleana que controlará la visibilidad del menú, por lo que el primer paso sera crear dicha variable con un valor false por defecto:
````javascript
data() {
  return {
    show: false
  };
},
````

### ¿Cómo crear un menú desplegable?
Para el menú, se crea un nuevo componente que muestra opciones en una lista:
````html
<!-- Componente Menu.vue -->
<template>
  <ul v-if="show">
    <li>Opción uno</li>
    <li>Opción dos</li>
    <li>Opción tres</li>
  </ul>
</template>
````

### ¿Cómo implementar un básico V-IF y V-SHOW?
Se utiliza la directiva **v-if** para mostrar u ocultar el menú basándose en la variable show.
Sin embargo, la directiva ** v-show** puede ser una alternativa para solo aplicar un CSS de *display: none* en vez de montar o desmontar el elemento del DOM, mejorando así el rendimiento de la aplicación.

### ¿Qué es un componente Transition?
El componente **transition** se utiliza para envolver un único elemento y permitir la aplicación de **efectos de entrada y salida**. Para configurar, se necesitar definir el nombre de la transición, que será utilizada para nombrar las clases CSS asociadas:
````javascript
<transition name="fade">
  <menu v-if="show"></menu>
</transition>
````

### ¿Qué clases CSS son necesarias para la transición?
Al predefinir un nombre para la transición, se pueden crear clases CSS específicas que manejan los tres estados de una transición: inicio, activo y final. Estos se denominan:
* from (inicio)
* active (activo)
* to (final)
````css
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
````

### ¿Cómo aplicar animaciones como fade in y fade out?
Para lograr un efecto visual suave al mostrar o ocultar el menú, se puede modificar la opacidad del elemento. Se utilizan propiedades de CSS como *transition* y *opacity* para lograr un desvanecimiento.
+ **opacity: 0;** al comenzar a ocultar el elemento
+ **opacity: 1;** cuando el elemento es completamente visible

---

## Teleports [7/23]<a name="id7"></a>
Los **teleports**, anteriormente conocidos como **portals** en Vue.js 2, son una característica de Vue que permite mover un componente a una ubicación diferente dentro del DOM, sin cambiar la forma en que esta organizado el código. 
Esto es sumamente útil, por ejemplo, para mostrar un modal que debería aparecer al nivel del *body* sino en un componente interno.

### ¿Cómo crear un modal con teleports?
Se crea un componente nuevo con el código para un modal básico. Aquí se utilizara la función **teleport** para desplazar el componente al **body** del documento HTML.
````vue
<template>
    <div>
        <button @click="toggle">Abrir Modal</button>
        <teleport to="body">
            <div v-show="show" class="modal">
                <h1>Título del Modal</h1>
                <p>Contenido del modal.</p>
                <button @click="toggle">Cerrar</button>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
.modal {
  /* Aquí puedes agregar estilos para el modal */
}
</style>
````

Este código establece que el nuevo componente utilizara la directica **v-show** para controlar la visibilidad del modal, la variable **show** con un valor *false* por defecto y la función **toggle()** para cambiar el valor de la variable y si se mostrara o no el modal.

### ¿Cómo funcionan los teleports en Vue.js?
Cuando se desea que una parte del componente se muestre en una ubicación diferente, simplemente se debe encapsular esa parte de codigo dentro del elemento < teleport > y luego definir su nuevo destino utilizando el atributo **to**.

### Ejemplo de uso de teleports
En el código del ejemplo anterior, el componente *modal* está envuelto dentro de la etiqueta < teleport to="body" >, lo que permite que el contenido se inserte al final del < body > del documento.
Al abrir el inspector de elementos, se vera de la siguiente manera:
````javascript
<body>
  ...
  <teleport start></teleport>
  <div class="modal" style="display: none;">
    <h1>Título del Modal</h1>
    <p>Contenido del modal.</p>
    <button>Cerrar</button>
  </div>
  <teleport end></teleport>
</body>
````
Esta estructura muestra claramente cómo los elementos se han movido dentro del < body >, manteniendo una organización lógica dentro del archivo Vue específico.

### ¿Cuáles son las ventajas y recomendaciones de los teleports?
El uso de teleports ayuda a mantener una mejor organización y reutilización del código.  Algunos beneficios y recomendaciones:

1. **Modularidad**: Mantener el código fragmentado y modular. De esta forma se puede definir componentes complejos que se pueden plasmar en diferentes partes del DOM sin desorganizar el código fuente original.
2. **Reutilización**: Un archivo Vue puede exportarse y utilizarse en diferentes proyectos, utilizando siempre el mismo esquema, pero mostrando el componente donde más se adapte visualmente.
3. **Flexibilidad de diseño**: Permite ajustar la disposición del contenido en el DOM, mejorando la presentación de algunos elementos como modales, tooltips, entre otros.
4. **Separación de Concerns**: Al separar la lógica de visualización de la lógica de estructura en la aplicación, es más fácil manejar estilos, scripts y demás cuestiones relacionadas con la presentación.

---

## Virtual DOM [8/23]<a name="id8"></a>
El Virtual DOM es un concepto clave detrás de muchos frameworks modernos como Vue.js y React.js que optimiza la manipulación de interfaces de usuario complejas. Proporciona una representación intermedia del DOM real, que es más rápida y eficiente de modificar en memoria antes de aplicar los cambios al DOM tangible del navegador.

### Primero, ¿Qué es el DOM?
El DOM o Document Object Model es la estructura base de un proyecto web. Se representan todos los objetos HTML como si se tratara de un árbol de elementos, donde el **DOCUMENT** es la raíz, luego viene el header, el body, etc.… Y todo esto se va acomodando en forma de árbol.

![DOM](images/clase_08_1.png)

### ¿Que es el virtual DOM?
Vue utiliza una capa intermedia hecha en JavaScript con el motivo de que cada vez que se realicen accesos al DOM de forma manual, por ejemplo: utilizando *create element* o *getElementById* y otras formas que nos da JavaScript de acceder al DOM para controlarlo, agregar y quitar elementos.
Luego se obtiene **representación** que es una copia del DOM, pero es un DOM virtual, es decir, es un objeto de JavaScript que esta viviendo en la memoria RAM y por lo tanto es mucho más fácil acceder y modificar como cualquier otro objeto en JS.

![vDOM](images/clase_08_2.png)

### ¿Cómo funciona el Virtual DOM?
1. **Intermediario en JavaScript**: El Virtual DOM actúa como una capa intermedia que representa el DOM real de manera virtual en JavaScript.
2. **Modificaciones ágil**: Las actualizaciones se realizan primero en el Virtual DOM, lo cual es más rápido y requiere menos líneas de código que manipular directamente el DOM tradicional.
3. **Aplicación en bloque de cambios**: Una vez que se han realizado todas las actualizaciones necesarias, el framework aplica de forma eficiente todos los cambios al DOM real de una sola vez, mejorando el rendimiento.

### ¿Por qué no modificar directamente el DOM?
Acceder y manipular el DOM real puede ser costoso en términos de rendimientos. Cada interacción implica una re-renderización que consume memoria y tiempo de procesamiento. En cambio, al modificar el Virtual DOM primero, se limita el número de interacciones con el DOM real, lo que mejora la eficiencia y la rapidez.

### ¿Cómo afecta el Virtual DOM al desarrollo de componentes?
El uso del Virtual DOM simplifica la manera en que se manejan los componentes:

+ **Actualización reactiva**: Las librerías pueden detectar cambios en los datos y actualizar la representación visual de forma eficiente.
+ **Manejo de componentes complejos**: Facilita la gestión de componentes anidados, haciendo más sencilla la comunicación y el intercambio de datos entre ellos.
+ **Optimización de rendimiento**: Permite realizar optimizaciones automáticas para mejorar el rendimiento sin cambiar mucho del código escrito por el desarrollador.

### ¿Cómo se relaciona con el ciclo de vida de los componentes?
El Virtual DOM está vinculado de forma directa con el ciclo de vida de los componentes:

+ **Montaje y actualización**: Durante el ciclo de vida, el Virtual DOM se utiliza para montar los componentes y garantizar que cualquier cambio de estado requerido se vea reflejado en la interfaz de usuario.
+ **Detección de cambios**: Está diseñado para capturar y responder a eventos como prop updates o modificaciones de estado, asegurando que la manipulación del DOM sea lo más eficiente posible.

---

## Entendiendo el ciclo de vida de los componentes [9/23]<a name="id9"></a>
Uno de los conceptos fundamentales que se debe dominar es el ciclo de vida de un componente, que determina su uso desde su creación hasta su eliminación. 
Cada componente pasa por una serie de fases que son gestionadas por un conjunto de funciones conocidas como **hooks** del ciclo de vida. Esto ayuda a administrar cambios en el virtual DOM de manera eficiente y optimizada.

### ¿Cómo se inicializa un componente en Vue.js?
El proceso comienza con la ejecución de las funciones **createApp** y **mount**, que crean la instancia raíz de Vue.js. 
Durante esta etapa, se inicializan todos los eventos y las funciones del ciclo de vida necesario para cada componente. Posteriormente, el componente se inicia en un estado llamado **beforeCreate()**. Aquí, se puede ejecutar código que preparará el terreno antes del inicio del componente, como declaración de variables o carga inicial de inspiraciones.
````vue
beforeCreate() {
    // Código a ejecutar antes de crear el componente.
}
````

### ¿Qué ocurre durante la creación del componente?
Una vez que el componente entra en el estado creado, se ejecuta la función **created()**.
En este momento, la definición completa del componente ya está establecida, aunque todavía no está adjunta al DOM. Es el punto donde se realizan peticiones de datos o preparaciones que no requieren interacción directa con el DOM.
````vue
created() {
    // Código que se ejecuta una vez creado el componente.
    // Ideal para descargar datos o ejecutar sincronizaciones.
}
````

### ¿Cuándo y cómo se monta un componente al DOM?
El siguiente paso dentro del ciclo de vida es el montaje del componente en el DOM.
Antes de este evento, la función **beforeMount()** será ejecutada, permitiendo hacer ajustes finales antes de que el componente esté visible en el documento.
````vue
beforeMount() {
    // Código que se ejecuta antes de montar el componente en el DOM.
}
````
Tras ello, el componente es finalmente montado y la función **mounted()** se dispara, permitiendo realizar actividades que requieren el componente ya esté en el DOM, tales como manipulación de elementos específicos o inicialización de librerías basadas en el DOM.
````vue
mounted() {
    // Código que se ejecuta cuando el componente está montado.
    // Manipulación de elementos DOM.
````

### ¿Qué sucede cuando el componente tiene que actualizarse?
Una vez montado, el componente está en un estado reactivo y cualquier cambio en sus datos puede desencadenar una actualización. 
Antes de este cambio, la función **beforeUpdate()** se ejecuta para permitir ajustes previos a la modificación del DOM.
````vue
beforeUpdate() {
    // Código que se ejecuta antes de actualizar el DOM.
}
````
Tras la actualización, la función **updated()** se ejecuta, donde se puede realizar operaciones post-actualización.
````vue
updated() {
    // Código que se ejecuta después de una actualización del DOM.
}
````

### ¿Cómo es el proceso de desmontaje del componente?
Cuando un componente necesita ser removido, se ejecutan dos funciones importantes: **beforeUnmount()** y **unmounted()**.
En beforeUnmount, tienes la oportunidad de limpiar recursos, cerrar conexiones o eliminar cualquier referencia vinculada al componente antes de que desaparezca completamente.
````vue
beforeUnmount() {
    // Código para la limpieza antes de desmontar el componente.
}
````
Finalmente, unmounted marca el momento en que el componente ya ha sido desligado del DOM y te permite notificar a otros componentes o realizar limpieza adicional.
````vue
unmounted() {
    // Código final después de desmontar el componente
}
````

### Árbol del ciclo de vida
Para comprender mejor el ciclo de vida de los componentes, se puede ver graficado en esta imagen.

![ciclo de vida](images/clase_09_1.png)

> [!IMPORTANT]
> En la documentación de Vue, el ciclo beforeUnmount() puede aparecer como beforeDestroy() y el ciclo unmounted() puede aparecer como destroyed.

1. beforeCreate.
2. created.
3. beforeMount.
4. mounted.
5. beforeUpdate.
6. updated.
7. beforeUnmount (beforeDestroy).
8. unmounted (destroyed).

---

## Explorando los primeros hooks del ciclo de vida de Vue [10/23]<a name="id10"></a>
El ciclo de vida de los componentes en Vue es una herramienta crucial para los desarrolladores, permitiendo gestionar el tiempo de vida de un componente desde su creación hasta su destrucción.

### ¿Qué hooks del ciclo de vida podemos usar?
Vue ofrece varios **hooks** que se pueden utilizar para ejecutar código en diferentes etapas del ciclo de vida de un componente. Algunos de los hooks más comunes son:

+ **beforeCreate**: se ejecuta antes de que el componente sea creado.
+ **created**: se ejecuta después de que el componente ha sido creado.
+ **mounted**: se ejecuta una vez que el componente ha sido insertado en el DOM.
+ **unmounted**: se ejecuta cuando el componente ha sido removido del DOM.

### Ejemplo práctico
A continuación, presentamos un script que implementa algunos de estos hooks dentro de un componente Vue, mostrando cómo y cuándo podemos acceder a diferentes partes del componente:
````vue
export default {
  data() {
    return {
      text: 'Hola, Vue',
    };
  },
  beforeCreate() {
    console.log('beforeCreate: ', this.data, this.$el);
  },
  created() {
    console.log('created: ', this.data, this.text);
  },
  mounted() {
    console.log('mounted: ', this.data, this.$el);
  }
}
````

### ¿Qué sucede con los objetos data y DOM en cada hook?
Al ejecutar el anterior y observar los resultados en la consola del navegador, se puede analizar el comportamiento de los diferentes hooks:

1. beforeCreate:
	* En este punto, el objeto "data" está vacío y el elemento del DOM (this.$el) aún no existe. No se han inicializado las variables reactivas de Vue.
2. created:
	* Aquí, el objeto "data" ya ha sido creado y la variable "text" está disponible.
Sin embargo, el elemento del DOM aún no está disponible, puesto que el componente no ha sido montado.
3. mounted:
	* En este momento, tanto el objeto "data" como el elemento del DOM están presentes. Esto permite interactuar con el DOM utilizando JavaScript puro, pudiendo modificar o acceder al HTML del componente.

---

## Mixins [11/23]<a name="id11"></a>
Los mixins en Vue.js son una herramienta poderosa dentro de la Options API para reutilizar código en diferentes componentes. Al igual que una biblioteca, permiten definir atributos, métodos y lógica que pueden ser compartidos a través de varios componentes.

### ¿Cómo se crea un mixin?
Para crear un mixin, simplemente se define un archivo que contenga la lógica que se quiere reutilizar. Lo usual es almacenar estos archivos en una carpeta especial llamada **/mixins**. Este archivo solo contendrá la parte de JavaScript necesaria. Por ejemplo:
````vue
// mixins/base.js
export default {
  data() {
    return {
      texto: 'Este es un texto desde el mixin'
    }
  },
  created() {
    console.log('base created');
  }
}
````

### ¿Cómo se utiliza un mixin en un componente?
Una vez creado el mixin, se importa y se agrega al componente. Esto se logra importándolo en la sección "script" del componente y añadiéndolo a la opción mixins:
````vue
// En el componente Vue
import baseMixin from '@/mixins/base';

export default {
  mixins: [baseMixin],
  data() {
    return {
      // otras propiedades de data del componente
    }
  },
  created() {
    console.log('Componente creado');
  }
}
````
Al utilizar este mixin, el componente podrá acceder a las propiedades y métodos definidos en el otro archivo.

### ¿Cuáles son las ventajas y desventajas de los mixins?
Los mixins ofrecen múltiples beneficios, como la modularización y la simplificación del código al permitir la reutilización de lógica común en varios componentes. Sin embargo, también presentan ciertos desafíos:

**Ventajas**:
* Reutilización de lógica común.
* Centralización de código que puede ser utilizado en diversos componentes.
* Reducción de la duplicación de código.

**Desventajas**:
* Visibilidad reducida: No es evidente qué datos o funciones están disponibles en un componente sin revisar el archivo del mixin.
* Colisión de nombres: Si un mixin y un componente definen la misma propiedad con el mismo nombre, prevalecerá la del componente, lo cual puede resultar confuso.
* Dificultad de depuración: Modificaciones en un mixin pueden afectar múltiples componentes, complicando el proceso de depuración.

### ¿Qué futuro tienen los mixins con Vue 3?
Con la llegada de **Composition API** se crea una nueva forma de estructurar y reutilizar código. Esta API funcional reemplaza en gran medida a los mixins al ofrecer una sintaxis más clara y directa, eliminando la necesidad de 'trucos' para la reutilización de código.

---

## Introducción a Composition API [12/23]<a name="id12"></a>
La Composition API ofrece una nueva manera de escribir componentes más organizados y estructurados, especialmente para aquellos que son extensos y complejos.

### ¿Cómo se diferencia de Options API?
Antes de la versión 3 de Vue.js, la estructura de los componentes se basaba en un JSON de configuración. Este JSON contenía métodos, funciones y propiedades computadas, entre otras características. Aunque funcionaba, este enfoque a veces podía resultar en código desorganizado, especialmente en componentes extensos.
Por otro lado, la **Composition API** no reemplaza a la **Options API**, pero presenta una alternativa funcional y reactiva. Mantiene los mismos conceptos originales pero organiza el código de una forma diferente. Las funciones son el núcleo de este sistema, facilitando la organización y flexibilidad en el manejo de estructuras de datos y lógica.

### ¿Cómo empezar con la función setup?
La función **setup()** es el corazón de la Composition API. Se comporta como un hook de ciclo de vida, similar a *created*, *mounted*, o *unmounted*, pero es el primer hook que se ejecuta. Este anticipado inicio permite preparar y configurar los datos antes de cualquier otro evento del ciclo de vida.

### Uso de la función setup
La setup recibe dos argumentos: los **props** del componente y el **contexto** del componente. Estos son esenciales para interactuar con las propiedades y funcionalidades del componente, como el emit.
A continuación, se presenta un ejemplo simple de cómo definir la función setup:
````vue
import { ref } from 'vue';

export default {
  setup(props, context) {
    const repositorios = ref([]);

    // Funciones y lógica adicional

    return {
      repositorios
    };
  }
}
````

### ¿Qué retorna setup?
Todo lo que se declara en el retorno estará disponible en el scope del componente, accesible tanto para métodos adicionales como para el template.

+ **Variables**: Cualquier variable que sea necesaria en el template o en otras funciones.
+ **Funciones**: Métodos que realicen operaciones o lógica significativa en el componente.

### ¿Por qué adoptar Composition API?
Existen varias razones para considerar la transición hacia la Composition API:

+ **Modularidad y organización**: Permite agrupar funciones y variables de acuerdo con su lógica funcional en lugar de su tipo de definición.
+ **Reutilización de código**: La capacidad de crear funciones reutilizables que pueden compartirse entre componentes.
+ **Claridad**: Mejora la claridad y comprensión del componente separando la definición lógica del layout visual.

--- 

## Ciclo de vida en Composition API [13/23]<a name="id13"></a>
La función Setup en Vue.js Composition API es una pieza clave para gestionar los componentes de manera más moderna y funcional. Es considerada como un reemplazo de los elementos tradicionales del ciclo de vida en Vue.

### ¿Cómo se utiliza la función Setup con eventos del ciclo de vida?
Para integrar la función **setup()** con los eventos del ciclo de vida, se realiza la importación de los ciclos directamente desde Vue.js y se emplea una nomenclatura específica con **onX**, donde **X** representa el evento. Por ejemplo, si deseas ejecutar una función cuando el componente se monta en el DOM, se utilizaría onMounted.

### Ejemplo de uso
En un archivo de componente, podrías implementar un evento del ciclo de vida de la siguiente manera:
````vue
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      console.log('Componente montado');
    });
  },
};
````
Con esta estructura, Vue lleva a cabo las mismas acciones que con el Options API, pero con una sintaxis más directa y organizada.

### ¿Cuáles eventos del ciclo de vida han sido modificados?
La introducción de Setup ha modificado la forma en la que se gestionan algunos eventos del ciclo de vida, particularmente los eventos **beforeCreate** y **created**.
Estos ya no están disponibles como lo estaban en la sintaxis previa, pues Setup se encarga de sus funcionalidades iniciales, justo en la creación de la instancia del componente, antes de interactuar con el DOM.

### Consideraciones importantes
+ **Reactividad**: Asegurarse de trabajar adecuadamente con el sistema de reactividad de Vue, que es fundamental en el manejador de datos dentro de setup.
+ **Carga y limpieza**: Los eventos del ciclo de vida permiten gestionar eficazmente la adquisición de datos y la limpieza de recursos cuando los componentes son cargados y descargados del DOM.
+ **Continuidad**: Aunque algunos eventos han cambiado su forma de aplicación, la mayoría siguen operando igual, garantizando una continuidad en el funcionamiento de los componentes.

### ¿Cuáles son los beneficios de utilizar Setup?
* Sintaxis simplificada: La transición a una función genera menos errores y una estructura más ordenada.
* Compatibilidad y reactividad: Se integra de manera nativa con el sistema de reactividad, mejorando la manipulación de estados en la aplicación.
* Organización del código: Facilita la separación de lógica de negocio y presentación, promoviendo una arquitectura más mantenible.

---

## Variables reactivas con ref y reactive [14/23]<a name="id14"></a>
La reactividad es un principio clave en Vue.js. Es esencial entender cómo declarar variables reactivas mediante la función **ref()**.
Esta función permite **crear una referencia reactiva a un dato**, lo que significa que cualquier cambio a este dato se reflejará automáticamente en las partes del componente que lo usan.

### Ejemplo de uso de ref
````vue
import { ref } from 'vue';

export default {
  setup() {
    const texto = ref('Hola Vue');
    
    return { texto };
  }
}
````

+ **Creación de referencia reactiva**: Declara una variable utilizando la función ref y asigna un valor inicial.
+ **Acceso a valores**: En la función setup, utiliza la propiedad **.value** para leer o modificar los valores de estas variables reactivas.

### ¿Cómo hacer disponibles estas variables en el componente?
Las variables definidas con ref pueden utilizarse en el template del componente. **No es necesario usar .value** al acceder a ellas desde el template, ya que se detecta automáticamente los cambios. Por ejemplo:
````vue
<template>
  <div>{{ texto }}</div>
</template>
````

### ¿Cómo manejar las variables primitivas y los objetos reactivos?
Cuando se trata de valores de tipo primitivo (números, cadenas, booleanos), la función **ref()** es suficiente. Sin embargo, para manejar objetos, es mejor usar la función **reactive()**.

### Uso de reactive para objetos
reactive permite definir variables reactivas que son objetos enteros, sin la necesidad de usar .value. Aquí un ejemplo práctico:
````vue
import { reactive } from 'vue';

export default {
  setup() {
    const contador = reactive({ valor: 0 });

    return { contador };
  }
}
````

### ¿Qué ventajas ofrece integrar Vanilla JS con setup?
La función setup no solo admite las funciones de Vue, sino que también permite el uso de Vanilla JS para cualquier lógica adicional.
Un ejemplo podría ser el uso de setInterval para actualizar un contador:
````vue
export default {
  setup() {
    const counter = ref(0);

    setInterval(() => {
      counter.value += 1;
    }, 500);

    return { counter };
  }
}
````

En este ejemplo, **counter.value** se incrementa de forma automática cada 500 milisegundos, mostrando la potencia de la reactividad en acción.

### ¿Por qué es importante elegir entre ref y reactive?
Elegir entre ref y reactive depende de tus necesidades específicas:

+ **ref**: Ideal para valores simples y primitivos, donde la reactividad solo se necesita para un único valor.
+ **reactive**: Perfecto para manejar objetos enteros y más complejos, eliminando la necesidad de acceder a propiedades con .value.

---

## Watch [15/23]<a name="id15"></a>
Los "watchers" en Vue.js son esenciales para gestionar cambios en las aplicaciones, permitiéndote escuchar los cambios en un estado reactivo y reaccionar ante ellos.

### ¿Qué son los watchers y cómo se implementan?
Los watchers son **funciones observadoras** que se activan cuando cambia una variable reactiva, permitiendo acceder al valor antiguo y al nuevo para ejecutar acciones. Se asemejan a las propiedades computadas, pero en lugar de calcular valores, monitorean los cambios.
Para implementar un watcher en el Composition API, se sigue el siguiente procedimiento:

1. **Importar la función watch**: Se debe importar watch de Vue, ya que será necesaria para definir los listeners.
````vue
import { watch } from 'vue';
````
2. **Usar la función setup**: Dentro de setup(), defines los datos reactivos y posteriormente los observers.
````vue
setup() {
  const counter = ref(0);
  const object = reactive({ counter: 0 });

  // Ejemplo de uso con reactive
  watch(
    () => object.counter,
    (newValue, oldValue) => {
      console.log('Nuevo valor:', newValue, 'Valor anterior:', oldValue);
    }
  );
}
````
3. **Definir los parámetros del watcher**: Se deben definir dos valores:
* Primer parámetro: El valor a observar, en este caso usando una función que accede a la propiedad reactiva.
* Segundo parámetro: La función de callback que se ejecuta con cada cambio, recibiendo el nuevo y antiguo valor.

### ¿Cómo se diferencia el uso entre ref y reactive?
La diferencia principal al usar ref y reactive en el contexto de watchers radica en cómo se accede a los valores.

+ **Con ref()**: Se debe acceder al valor encapsulado usando .value.
````vue
const counter = ref(0);
watch(
  () => counter.value,
  (newVal, oldVal) => {
    // Manejo de cambios
  }
);
````
+ **Con reactive**: Se accede al valor directamente porque reactive retorna una referencia al objeto original en forma de proxy.
````vue
const object = reactive({ counter: 0 });
watch(
  () => object.counter,
  (newVal, oldVal) => {
    // Manejo de cambios
  }
);
````

### ¿Qué se debe tener en cuenta al usar watchers con el Composition API?
Implementar watchers con el Composition API difiere ligeramente a como se haría en el Options API. Aquí destaca:

+ **La programación funcional**: Utilizar watch en el Composition API implica una sintaxis funcional que genera una mejor gestión de la reactividad, accediendo a los valores de manera adecuada.
+ **Flexibilidad del callback**: Dentro de la función callback, se puede integrar cualquier lógica en vanilla JavaScript o características específicas de Vue, logrando así un espectro completo de reacciones en tiempo real.
+ **Ventajas de la sintaxis moderna**: La sintaxis basada en funciones permite mayor claridad y separación lógica dentro del componente, siendo más escalable en aplicaciones grandes.

---

## Computed [16/23]<a name="id16"></a>
Las propiedades computadas son **funciones declarativas** que se basan en propiedades reactivas para devolver un resultado.
A diferencia de las funciones simples, las propiedades computadas se almacenan en caché de manera eficiente hasta que sus dependencias cambian, evitando procesos innecesarios y optimizando el rendimiento.

### Ventajas de usar propiedades computadas:
+ **Legibilidad**: El código es más limpio y fácil de entender.
+ **Eficiencia**: Vue almacena en caché las propiedades computadas hasta que una de sus dependencias cambia.
+ **Reusabilidad**: Facilitan la reutilización del código, reduciendo la duplicación.

### ¿Cómo se implementan propiedades computadas con Composition API?
Implementar propiedades computadas en Composition API sigue una lógica clara y sencilla.
Un ejemplo simple: concatenar un nombre y apellido en un string completo.

````vue
import { ref, computed } from 'vue';

export default {
  setup() {
    const firstName = ref('Felipe');
    const lastName = ref('Muñoz');

    const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    return {
      fullName,
    };
  }
}
````

#### Pasos clave:
1. **Definir variables reactivas**: Se utiliza la función ref() para crear las propiedades reactivas firstName y lastName.
2. **Crear propiedad computada**: Se utiliza la función computed() para declarar fullName, que concatenará firstName y lastName.
3. **Devolver propiedades**: Se devuelve el valor en el retorno de setup para que el template pueda encontrarla.

### ¿Cuáles son las mejores prácticas al usar funciones computadas?
+ **Cacheo o almacenamiento en caché**: Al tener dependencias reactivas, Vue solo vuelve a calcular la propiedad computada cuando una dependencia cambia.
+ **Evitar loops infinitos**: Al crear propiedades computadas, asegurarse de no tener dependencias recursivas que puedan causar un bucle infinito.
+ **No utilizar this dentro de setup**: Con Composition API, la función setup() no puede acceder a objetos this como en Options API. Tener cuidado cuando se migra código.

### ¿Cómo se comparan Composition API y Options API al usar propiedades computadas?
En la sintaxis de Options API, las propiedades computadas se definen usando computed como propiedad dentro de un objeto Vue.
En Composition API sigue un enfoque funcional gracias a las funciones puras de JavaScript, lo que convierte el código en algo más modular y fácilmente mantenible.

---

## Uso de props [17/23]<a name="id17"></a>
En el contexto de Vue.js, los props son **atributos que se pasan desde un componente padre a un componente hijo** y que permiten compartir datos entre componentes.

Al definir los props en el componente hijo, se pueden establecer:
+ **Tipo de dato**: Para asegurar que los datos recibidos son del tipo correcto, como string, number, etc.
+ **Valor por defecto**: Define un valor por defecto en caso de que el prop no se envíe desde el componente padre.
+ **Requerido**: Indica si el prop es obligatorio (true o false).

### ¿Cómo se definen los props en Composition API?
Para utilizar los props en Composition API, primero se deben definir en el componente hijo.
Por ejemplo, si se desea pasar un nombre y apellido desde el componente App al componente Home:
````vue
props: {
  firstName: String,
  lastName: String
}
````

En el componente padre (App.vue), se pasaría de esta manera:
````vue
<Home firstName="Agustina" lastName="Muñoz" />
````

### ¿Cómo se leen los props en la función setup?
El método setup es el lugar donde se leerán los props. La función setup recibe dos argumentos: props y context.

### Conversión de props a referencias reactivas
Por defecto, los props no son reactivos, lo que podría causar que no detecten cambios si los valores se modifican dinámicamente. Para solucionar esto, Vue ofrece la función **toRefs()**, que convierte un objeto plano en referencias reactivas:
````vue
import { toRefs } from 'vue';

export default {
  setup(props) {
    const { firstName, lastName } = toRefs(props);
    return { firstName, lastName };
  }
}
````

### ¿Por qué usar toRefs?
Es crucial cuando se desea que los cambios en los datos desde el componente padre se reflejen automáticamente en el hijo. Sin toRefs, los props actuarían como objetos estáticos en lugar de reactivos.

---

## Uso de context [18/23]<a name="id18"></a>
Un elemento esencial en la funcionalidad de los componentes de Vue es el contexto, el cual proporciona varias herramientas para gestionar propiedades y eventos en los componentes. Este contexto forma parte del segundo argumento de la función setup y ofrece una serie de datos valiosos.

### ¿Cuáles son los elementos clave de context?
Cuando se utiliza setup() en un componente, se puede acceder a cuatro elementos proporcionados por context:

+ **Attrs**: Representa los atributos que recibe el componente que no son declarados como props. A diferencia de las props, los atributos no son reactivos. Por ejemplo, si un componente recibe atributos que no fueron declarados como props en Vue.js, se consideran automáticamente como atributos.
+ **Emit**: Esta función es utilizada para emitir eventos desde el componente. Emit permite pasar el nombre del evento y sus parámetros.
+ **Expose**: Permite hacer accesibles ciertas variables internas del componente a otros componentes, expose debe ser llamado una única vez y permite definir qué valores se pueden exponer, facilitando que otros elementos accedan a ellos.
+ **Slots**: Proporciona acceso a los slots del componente, permitiendo la personalización del contenido dentro de un componente desde otros elementos.

### ¿Cómo utilizar el context en Vue.js?
Hay diferentes formas de manejarlo dentro de nuestro código:

* Se puede acceder a los elementos de context usando la notación de objeto o la destructuración de ECMAScript utilizando llaves { }. Así, es posible, por ejemplo, acceder a los attrs directamente como si fueran variables.
````vue
const { emit, expose } = context;
````
* La función expose se puede utilizar de la siguiente manera dentro de la función setup para publicar variables específicas:
````
expose({
  fullName,
});
````

### ¿Qué limitaciones tiene la función setup?
La función setup tiene ciertas restricciones debido a que se ejecuta antes del ciclo de vida del componente. Esto afecta su capacidad para interactuar con algunos elementos tradicionales como:

+ **Refs**: No se puede usar *this.refs* porque setup no tiene acceso a la instancia completa del componente.
+ **Métodos de Option API**: Métodos tradicionales definidos fuera de setup no están accesibles dentro de ella.
+ **Data y Computed**: Se necesita utilizar reactividad proporcionada por Composition API (como ref, reactive) ya que los métodos tradicionales que dependen de *this* no están disponibles.

Para contrarrestar estas limitaciones, se pueden definir funciones de JavaScript dentro de setup para manejar métodos y reactividad.

### Recomendaciones prácticas
* Asegurarse de convertir las props y datos en elementos reactivos usando herramientas como ref, reactive, o toRefs.
* Definir funciones directas dentro de setup para mantenerlas accesibles y utilizables.
* Familiarizarse con la Composition API para maximizar las capacidades de reactividad de Vue.

---

## Provide / Inject [19/23]<a name="id19"></a>
Las funciones **provide** e **inject** ofrecen una solución elegante para compartir datos entre un componente y sus descendientes, asi se evita la necesidad de pasar datos de forma manual a través de cada nivel jerárquico de un componente, lo que podría resultar en un código desordenado y props innecesarios.

### Implementación en Composition API
Al utilizar provide e inject con la Composition API, se debe trabajar dentro de la función setup().

### Crear provide en el componente principal
1. Configurar setup: se crea la función setup() en el componente principal.
````vue
import { provide } from 'vue';
export default {
  setup() {
    // Define el valor a proveer
    provide('username', 'DianaNerd');
  }
}
````
2. Definir el valor: Se usa provide para establecer un par clave-valor, donde 'username' es la clave que se compartirá con los componentes descendientes.

### Recibir valores en componentes hijos con inject
Para recibir los valores proporcionados en un componente hijo, se utiliza inject, que también debe ser llamado dentro de la función setup.

1. Importar inject: Se añade inject dentro de la importación desde Vue.
````vue
import { inject } from 'vue';
export default {
  setup() {
    // Recibe el valor proporcionado
    const userName = inject('username');
    return {
      userName
    };
  }
}
````
2. Acceder a los valores: Se cea una variable en setup que reciba el valor inyectado, de manera que esté disponible en el template del componente.

### Reactividad en provide e inject
Por defecto, usar provide e inject no genera reactividad. Para lograr este comportamiento, se necesita emplear herramientas como ref al definir valores en provide. Esto permitirá que los valores sean reactivos y reflejen cambios automáticamente.
````vue
import { provide, ref } from 'vue';
export default {
  setup() {
    const username = ref('DianaNerd');
    provide('username', username);
    return { username };
  }
}
````

### Ventajas del uso de Composition API
El cambio de Options API a Composition API no solo mejora la organización del código, sino que también reduce significativamente el número de líneas necesarias para realizar las mismas operaciones. Este enfoque no solo mejora la legibilidad y mantenibilidad del código, sino que también fomenta un entorno más limpio y funcional en Vue.

---

## Template refs [20/23]<a name="id20"></a>
Composition API, ofrece a los desarrolladores una manera potente de interactuar y manipular elementos HTML a través de sus **refs**, o **referencias de plantillas**. Aprender a usar las template refs con la Composition API es esencial para sacar el máximo provecho a este framework.

### ¿Qué son los template refs?
Son referencias directas a elementos del DOM o componentes dentro de las plantillas.
En el Options API clásico, se accedía a estos elementos utilizando *this.$refs*, permitiéndote manipular y acceder a cualquier propiedad del mismo. Sin embargo, en la Composition API, la forma de trabajar con estas referencias cambia, ofreciendo un acceso más reactivo y programático.

### ¿Cómo crear una referencia de plantilla?
Ejemplo de cómo crear una referencia para un botón en una plantilla:

1. Agregar el botón con una referencia:
````vue
<template>
  <button ref="btn">Click</button>
</template>
````
2. Declarar la referencia en la función setup:
````vue
<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    // Crear una referencia reactiva
    const btn = ref(null);
    // Exportar la variable para acceder desde el template
    return { btn };
  }
};
</script>
````

### ¿Cómo acceder al valor de un template ref?
Una vez que el componente se monte y la referencia del template esté lista, se puede acceder al valor actual del elemento HTML utilizando **.value**. Este patrón permite manipular el DOM de manera reactiva y flexible.
````vue
// Acceso al valor del template ref
console.log(btn.value);
````

### ¿Cómo detectar cambios en el valor de una referencia?
Dado que las referencias pueden cambiar una vez que el componente se ha montado, se utiliza normalmente watch para detectar y responder a los cambios:
````vue
watch(btn, (newVal) => {
  console.log(newVal); // Imprime el nuevo valor cuando el botón se monta en el DOM.
});
````

### ¿Por qué usar Composition API en lugar de Options API?

+ **Modularidad y Reusabilidad**: Facilita la estructura y división del código en funciones reutilizables.
+ **Mejor control del ciclo de vida**: La función setup se ejecuta antes de que el componente se monte, ofreciendo control temprano del estado.
+ **Mayor claridad**: La separación lógica mejora la claridad en aplicaciones grandes y complejas.

---

## Composition VS Options [21/23]<a name="id21"></a>
Uno de los grandes dilemas de utilizar Vue es elegir entre **Composition API** y **Options API**. Ambas son opciones válidas, pero presentan diferencias significativas que pueden afectar la organización y desarrollo de la aplicación.

### ¿Cómo se estructura cada API?

#### Options API:
* Las configuraciones se realizan mediante un gran objeto JSON.
* Utiliza métodos específicos dentro de secciones como methods, computed, y watch.
* La reactividad y el acceso a la instancia de Vue se gestionan con **this**.
* La organización del código puede requerir desplazarse entre diferentes secciones para encontrar métodos, propiedades computadas y referencias.

#### Composition API:
* Utiliza funciones en lugar de objetos para manejar las configuraciones.
* Centraliza el código y las lógicas dentro de la función **setup()**.
* El acceso a propiedades y a la reactividad se manejan utilizando ref, toRefs, computed, y otras funciones reactivas.
* Todo el código relacionado tiende a quedar agrupado, lo que facilita la lectura y el desarrollo.

### ¿Cuáles son las ventajas de cada enfoque?

#### Ventajas del Options API:
* Mejor adaptación para quienes vienen de un desarrollo con JavaScript tradicional.
* Facilita la transición para quienes han trabajado previamente con otras bibliotecas que utilizan una estructura similar.
* Organiza el código en secciones claramente definidas.

#### Ventajas del Composition API:
* Mejora la organización al permitir que todo el código relacionado permanezca junto.
* Simplifica la creación de componentes complejos al ofrecer un enfoque más funcional.
* Usa la reactividad de Vue.js de manera más natural con Vanilla JavaScript.

### ¿Cuáles son las desventajas de cada enfoque?

#### Desventajas del Options API:
* Puede volverse tedioso navegar entre secciones extensas de un componente.
* Requiere un desplazamiento vertical considerable para gestionar métodos complejos.

#### Desventajas del Composition API:
* Introduce un nivel de complejidad con el uso de ciertas funciones reactivas.
* Requiere una curva de aprendizaje mayor si solo se esta acostumbrado a una estructura más orientada a objetos.

### ¿Cuál debería elegir para mi proyecto?
No hay una respuesta definitiva sobre cuál API es "mejor", ya que depende del tipo de proyecto que se este desarrollando y de las preferencias personales:

* Proyectos simples o que utilicen Vue.js como librería: Se podría beneficiar con el enfoque estructurado del Options API.
* Proyectos complejos o que integren Vue.js como framework completo: La flexibilidad y organización del Composition API podrían ser más beneficiosas.

### En conclusión
Ambas APIs proporcionan herramientas poderosas y es decisión del programador elegir la que mejor se adapte a las necesidades específicas de cada proyecto.

---

## Script setup [22/23]<a name="id22"></a>
La función **script setup** es una característica que facilita la definición de componentes en **Single File Components**, al tiempo que ofrece una sintaxis más limpia y concisa.
Al usar script setup, no se necesita crear un export default, ya que todo el código dentro de este bloque es tratado como parte de la función setup.

### ¿Cómo refactorizar tu código con script setup?
Conviene refactorizar el código existente. Por ejemplo: se tiene un componente complejo con variables, propiedades (props), funciones computadas y más. El primer paso es copiar todo el contenido dentro de setup, ignorando el return, y colocarlo fuera, dentro del bloque de script setup. Este es un método directo para hacer más limpio y manejable el código.
````vue
// Ejemplo de uso de script setup
<script setup>
import { ref, computed } from 'vue';
import { defineProps, defineExpose } from 'vue';

// Se definen las props
const props = defineProps(['username', 'fullname']);

// Se usa ref y funciones computadas
const btn = ref(null);
const fullName = computed(() => `${props.username} ${props.fullname}`);

// Se exponen referencias individuales
defineExpose({ btn });
</script>
````

### ¿Cómo definir y utilizar las propiedades con defineProps?
Para acceder a las propiedades en script setup, se introduce la función **defineProps()**. Esta función permite declarar y usar las props de manera más funcional y clara, sin la necesidad de definirlas en el export default.

+ **Uso de defineProps**: Esta función permite acceder a las props sin necesidad de reactividad.

````vue
const props = defineProps(['username', 'fullname']);
````

Esta sintaxis respeta la reactividad del framework y permite una gestión más directa de las propiedades del componente.

### ¿Qué papel juegan las funciones auxiliares como defineExpose?
Las funciones como **defineExpose()** son cruciales para exponer elementos específicos del componente a instancias externas. Esto se logra sin el uso del contexto tradicional de Vue y simplifica la interacción con otros componentes.

+ **Aplicación de defineExpose**: Permite exponer referencias y variables para su uso por instancias externas.

````vue
defineExpose({ btn });
````

### ¿Cuáles son las consideraciones actuales de script setup?
Aunque script setup es una innovación prometedora, es vital recordar que se encontraba en fase experimental al momento de su lanzamiento con Vue.js 3. Esto implica que podría haber cambios futuros en la API o ajustes menores.