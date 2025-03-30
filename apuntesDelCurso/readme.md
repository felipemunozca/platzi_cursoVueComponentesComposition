# Curso de Vue.js: Componentes y Composition API

## Índice
* [Clase 02 - Introducción a Vue CLI](#id2)
* [Clase 03 - Estructura del proyecto](#id3)
* [Clase 04 - Componentes dinámicos](#id4)
* [Clase 05 - Componentes asíncronos](#id5)
* [Clase 06 - Transiciones](#id6)

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

## ¿Cómo crear un menú desplegable?
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