/*

En este nuevo proyecto de React crearemos un cotizador de seguros para automoviles, habra un formulario donde podremos elegir el modelo del auto a cotizar, si es americano,europeo o asiatico y basados en esos parametros escoger un tipo de seguro basico o completo y dependiendo de esto el cotizador nos dara el precio del seguro para nuestro auto, en este proyecto lonuevo que veremos de React seran los styled components( osea estilos css dentro de los propios componentes), tendremos una hoja de estilos generales para las etiquetas y unas clases, pero con los styled components podremos ponerle estilos dentro de los componentes mismos.


1- creamos el proyecto con npx create-react-app cotizador

2- como en los proyectosanteriores hacemos un poco de limpieza de nuestro proyecto, eliminamos App.css, el archivo de test y logo, en App.js quitamos los enlaces a estos archivos y quitamos lo del return reemplazando por un <h1></h1>, y en public, en el index.html pegamos el gist que deja el profe,son enlaces a unos estilos y una fuente de google fonts, ademas enel src en index.css pegamos el css que el profe nos suministra.

3- creamos nuestra carpeta para components y creamos un primer componente Header para el header d ela pagina,sera muy sencillo, este componente recibe una prop para poner el titulo de la app. Este primer componente se lo importamos a App.js para mostrarlo, recibira una prop llamada titulo con su respectivo texto.

--------------------------------------------------------------------------------------

STYLE COMPONENTS

hasta aqui ya tenemos lo basico de nuestra app, ahora vamos a ver que son los style components y como utilizarlos. Usaremos la libreria "emotion" para trabajar con los style components.

Basicamente, los style components nos permiten mezclar codigo js con css. Al poner css dentro de los componentes hacemos que nuestra hoja de estilos principal sea menos pesada, y como en React cada componente se actualiza independientemente esto ayuda a mejorar el performance de la app, React tiene un enfoque diferente a la forma tradicional de trabajar una app web donde se espera separar html,css y js, en React se junta todo en cada componente y esto hace mejores las app en cuanto a rendimiento.

1-Ahora, la libreria emotion nos permite utilizar los style components, asi que procedemos a insalarla via npm asi:

                npm i @emotion/styled @emotion/core


2- una vez instalada la libreria, podemos usar los style components en nuestros componentes, la forma de hacerlo es importar la libreria en nuestro componente, en este caso comenzamos con el componente Header para darle estilos a la etiqueta header, la forma d eimportar la libreria es asi:

                import styled from "@emotion/styled"


3- ya importada, antes del componente creamos una const con Case Sensite Upper Case, y esta const sera igual a styled.header``, osea despues del punto de styled nombramos a la etiqueta que queremos dar estilo y abrimos template string y dentro de estos colocamos todos los estilos que queramos para esta etiqueta.(v89). Para mejorar el autocompletado del codigo css dentro del template string instalo en VSC unos plugins, estos son: vscode-styled-components, styled-components-snippets, styled-snippets.4-ya creados los estlos dentro de esta const, reemplazo la etiqueta header por esta const, tiene una sintaxis parecida a un componente en el nombre, pues comienzan en mayusculas.

NOTA, SI SALE UN ERROR QUE DICE QUE NO ENCUENTRA @emotion/react, instalo esta dependencia asi:

                    npm i --save @emotion/react

asi debe solucionar el problema y ya debe de tomar los cambios para los estilos.

4- creamos tambien un estilo para el h1 del header llamado TextoHeader.(v89). Listo!! ya nuestro componente Header tiene sus propios estilos, estos son los style components, esto es un tema de nivel intermedio en React, estamos mezclando js y css en el componente.

-----------------------------------------------------------------------------------------

En App.js abien usamos style components para crear un div y poner en este div todo el contenido principal, este div con sus estilos centrara el contenido principal para que se vea mejor la app.(v90). Tambien creamos otro div con style components para que sea un contenedor para nuestro formulario principal, este ira despues del header.

1-ahora, ya creado este ultimo div, vamos a crear un nuevo componente para nuestro formulario, en el formulario utilizaremos la etiqueta select para crear un elemento html de seleccion multiple donde el usuario podra seleccionar las marcas de automoviles.(v91), esta etiqueta select va acompañada de la etiqueta opcion para construir nuestro elemento.

2- importamos este formulario a App.js para irlo mostrando en pantalla.

NOTA: EL STYLE COMPONENT TENDRA ETIQUETA DE APERTURA Y CIERRE DEPENDIENDO DE LA ETIQUETA HTML QUE ESTEN CREANDO, SI ES UN DIV TENDRA APERTURA Y CIERRE,SI ES UN IMG NO, DEPENDE DE LA ETIQUETA.

3- creamos otro select para los años, en el gist que el profe nos deja esta el codigo para los años, copiamos y pegamos. Por ultimo creamos dos inputs para el tipo de plan,basico o completo,estos seran de tipo radio para seleccion.(v91), en el caso de los radio el atributo name debe ser el mismo pero el value es diferente, esto se hace asi para que solo se pueda seleccionar uno de los dos, si el name fuera diferente se podria seleccionar ambos al tiempo. Por ultimo ponemos un boton.

4- ahora, vamos a crear los styles components para este formulario, no se debe de crear styles para todos los elementos html si no se requiere,por ejemplo no habra para la etiqueta form, esto es dependiendo lo que queramos hacer y como queramos que se vea.

5- para el label, como el padre son los div y tienen la propiedad flex, a los hijos label les damos una propiedad de flexbox que va en el hijo.(v92). Tambien le dams estilo a los select, la propiedad webkit-appearance: none lo que hace es quitarle la apariencia por defecto que tiene el select para poder darle otras diferentes. Para los radio solo se le dara un margin.

6- por ultimo le damos estilo al boton,generalmente los botones son los que mas requieren de estilos.(v93), cuando se pase el cursor por encima del boton debe cambiar a una manito, para estos efectos en style components se utiliza la sintaxis de SASS, osea &:hover{}, esta sintaxis se utiliza en los styles components, ademas se debera cambiar otras propiedades en el hover,como color de fondo.

----------------------------------------------------------------------------------------

ahora, ya creado nuestro formulario, vamos a comenzar a realzar la validacion del mismo utilizando el state, asi como hemos echo en los anteriores proyectos, debemos crear un state para nuestro formulario y asi podremos validarlo.(v94)

1- entonces, importamos useState,  el state se llamara datos y su funcion sera guardarDatos, este state sera un objeto que tiene las propiedades marca,year y plan, osea las opciones que creamos para el formulario, estas comienzan como string vacios. Se coloca year porque no se puede colocar la ñ de año en la propiedad del objeto.

2- ahora, como estos valores ya estan definidos en el formulario, osea no son datos que el usuario deba de ingresar sino solo seleccionar, los extraemos del state asi:

            const {marca,year,plan}=datos;

3- ahora, cada select del formulario tendra un name y un value, esto servira para poder validar cada una de estas opciones, asi que le ponemos a cada select:

                                    name= "marca"
                                    value= {marca}

le ponemos su correspondiente name y value a cada select.

4- en el caso de los inputs estos ya tienen name y value,pero para pasarle la prop del state plan, se debe de colocar con la propiedad checked={plan==="basico"} y asi mismo para el otro radio.

5- ahora, ya le pasamos las props del state a los elementos del formulario para que el state pueda ir viendo que se selecciona en cada opcion, ahora se crea la funcion  que actualizara al state, podemos utilizar la funcion guardarDatos directamente o crear una funcion y dentro de esta  utilizar guardarDatos(v94). Aqui utilizamos el objeto del evento e para utilizar el codigo que ya habiamos echoc para capturar los datos del formulario:

                        [e.target.name]:e.target.value

recordar antes de este codigo poner una copia del state con spread operator.

6- ahora esta funcion se la pasamos a los select y a cada radio por medio del evento onChange. Listo, para probar que si se capturan los datos seleccionados por el usuario en el state abrimos components y vemos que se van guardando.

---------------------------------------------------------------------------------------------

ahora, ya estamos capturando los datos y se esta actualizando el state, ahora debemos validar el formulario,pues al darle submit en el boton se debe de validar la informacion.

1- en el form creamos un evento onSubmit que llamara a una funcion que sera la que valide todo,esta funcion la llamamos cotizarSeguro.

2- creamos tambien un nuevo state para manejar el error en el componente Formulario.js, este state sera un boolean en false.

3-creamos la funcion cotizarSeguro, se le pasa el objeto e para utilizar el e.preventeDefault(), siempre en un submit debemos utilizar e.preventDefault(). os del state datos que son marca,year y plan por medio del metodo trim(), (v95)el if detecta algun error, se llama a la funcion guardarError y esta cambiara el state d eerror a true,siempre se pone el return para que en caso de error no se siga ejecutando el codigo. Si la validacion pasa se deja el error en false, poniendo guardarError(false) despues del if.

4-si vamos a components, y damos submit sin elegir nada, el state del error debe de cambiar a true pues se origino un error,(el boton debe ser de tipo submit).

5- ahora creamos un style component para crear un div para el error, este div se lo pasamos despues del form por medio de un ternario con un mensaje para que se muestre un mensaje de error en caso de que lo haya.

			{error ? <Error>Todos los campos son obligatorios</Error> : null}

hasta aqui ya manejamos el error si lo hay.

-----------------------------------------------------------------------------------------

ahora, si la validacion pasa hay que hacer los calculos para la cotizacion.

1- El primer calculo va a ser obtener la diferencia de años, osea, debemos comparar el año en que estamos con el que el usuario elige del modelo del auto y asi hacer el calculo para obtener la diferencia. Para estos calculos vamos a crear un helper para organizar mejor el codigo,recordemos que un helper es un archivo js donde creamos las funciones que necesitamos para nuestra app y que sirve para hacer mas legible el codigo. Lo creamos dentro de src como helper.js.

2- la primera funcion sera para obtener la diferencia de año, asi que dentro de esa funcion el calculo se realiza utilizando el metodo new Date().getFullYear() y restandole el parametro year que es el año que el usuario escoge(v96).

3- ahora, esta funcion la importamos a Formulario haciendo destructuring porque no es export default sino se esta exportando normal, solo con export, y hago la llamada a esta funcion en la parte despues de la validacion, para llamarla lo hago dentro de una const y le paso el parametro year porque es el que necesita para realizar el calculo y puedo comprobar que funciona mostrando en consola esta constante, elijo un año y me debe mostrar la diferencia con respecto al año actual.

4- ahora, es importante tener una base desde la cual hacer los diferentes calculos, la nuestra sera desde 2000, osea es la base en dinero y desde esta se podra incrementar o decrementar los calculos,la creamos antes de todos los calculos.(v96)

5- ahora, para el calculo del 3% que hay que restar por cada año, se realza el siguiente calculo:

                        resultado-=((diferencia*3)* resultado)/100

resultado es el nombre de la base que iniciamos en 2000. El signo -= lo que hace es hacer la operacion en esta linea y asignarlo a resultado. Osea, este calculo lo que hace es restar el 3% por cada año, si se elige un auto del año 2017 pues restara el 12% porque de 2017 a 2021 hay 4 años.

6- ahora, para realizar los incrementos segun el continente del auto se basa en el resultado(nuestra base de 200), osea si es un auto americano se incrementan esos 2000 en un 15%. Creamos esta funcion en nuestro helper y esta funcion toma el parametro marca, ahora, dentro de esta funcion creamos una variable incremento que guardar los calculos y usamos un switch para hacer los calculos de cada marca(v97). El switch evaluara el valor de cada opcion del select marca, usando el case en el switch, pues cada opcion de estas tiene la propiedad value y esta es la que se captura, este es el valor que el usuario escoge. El porcentaje a incrementar sera basados en el valor que tengamos, no de los 2000. Por ultimo hacemos return de la variable incremento.(v97)

7- para usar esta funcion la importamos en Formulario y la llamamos despues de la llamada a la funcion anterior del año, y le pasamos el parametro marca.

8- ahora hacemos calculo basados en  plan, esto lo hacemos con un ternario y solo evaluara dos opciones, porque solo tenemos dos planes.(v98).

9- ahora, lo importamos a Formulario y llamamos esta funcion dentro de una constante pasandole el parametro plan. Despues decimos que resultado sera igual a esta funcion por el resultado,esta multiplicacion la ponemos dentro de un parseFloat pues saldran decimales y los fijamos a 2 decimales nada mas con toFixed()

NOTA: LA IDEA DE ESTE PROYECTO INDEPENDIENTE DE LOS CALCULOS ES MOSTRAR COMO PODEMOS ESCRIBIR JS TRADICIONAL(COMO EN EL HELPER) Y UTILIZARLO O INTEGRARLO CON REACT.

-----------------------------------------------------------------------------------------------

Hasta aqui ya tenemos los calculos para realizar la cotizacion, ahora debemos mostrarlos, para esto crearemos un nuevo componente que muestre los resultados en pantalla.

1- vamos a App.js y creamos un state,debemos importar useState. El state  se llamara resumen y sera un objeto vacio en principio. La idea de este state es que vaya guardando los datos del formulario por medio de su funcion para despues pasar este state a otros componentes que mostraran los resultados.

2- Pasamos la funcion del  state al formulario via props para usarloa en el componente formulario. En el formulario extraemos la funcion y la llamamos dentro de la funcion cotizarSeguro en la ultima parte donde vamos a dar el total, esta funcion tomara el resultado que ya calculamos y ademas le pasamos los datos(osea el state de datos que tiene la marca,year y plan.). Si vamos a components y vemos App, hacemos una cotizacion y los datos los veremos registrados en este state,(v99)

3- ahora,  capturadosos datos del formulario en este state de resumen, ceamos dos componentes para mostrar esosdatos, uno sera Resumen.js y el otro sera Resultado.js.

4-primero creamos el Resumen.js, lo importamos en App.js y lo utilizamos despues del Formulario. Si vemos en pantalla, aparecera el titulo que le dimos a este componente Resumen sin tener todavia un resultado, por lo que podemos utilizar un ternario para evaluar si se tienen datos(si el state de resumen cuenta con los datos del state datos) y si es asi que los muestre, si no pues no.

				                {datos ? <Resumen datos={datos} /> : null}
				                


con esto ya no se muestra el h2 de Resumen sin antes tener datos.

5- ahora, en Resumen pasamos estos datos via props para que este componente los pueda mostrar en pantalla, vamos a crear un style components eneste componente para darle estilo, creamos un div con style components y este reemplazara al Fragment,y asi tendremos un contenedor que sera donde se muestren los datos.(v100)
 
6- creamos una funcion mas en el helper para que las palabras de marca de auto y paln se muestren las primeras en mayuscula.(v100). De esta forma ya tenemos los datos en pantalla.

-----------------------------------------------------------------------------------------

ahora, para mostrar el resultado de la cotizacion,osea el valor del seguro del auto, utilizamos el otro componente Resultado.js, antes de aparecer el resultado en pantalla debe aparecer un spinner.

1- creamos el componente Resultado y lo pasamos a App.js y lo ponemos despues del componente Resumen.

2- para el resultado necesito extraer del state resumen la cotizacion, asi que e App.js donde extrajimos datos tambien extraemos cotizacion y sela pasamos via props al componente Resultado.(v101)

3- ahora, en el return del componente evaluamos si la cotizacion es 0 le decimos al usuario que elija la marca,el año y el plan que quiera, esto se hace con un ternario, si ya eligio pues que muestre la cotizacion.

4- ahora, le pongo unos estilos con style components. Para darle una animacion vez que cambie el resultado de la cotizacion instalamos la libreria react-transition-group via npm:

                        npm i react-transition-group

una vez instalada, le importamos al componente Resultado dos paquetes d eesta libreria que son los que necesitamos, uno se llama TransitionGroupy el otro es CSSTransition. Cuando utilizamos estos paquetes, lo que pongamos dentro de ellos es lo que se va a animar,Podemos ver la documentacion de transitionGroup y ver su funcionamiento.(v102)

5- por ultimo, para hacer un spinner, creamos otro componente llamado Spinner.js, elegimos nuestro spinner desde spinkit.(v103). Creamos en components una hoja d eestilos solo para este componente Spinner, esta es otra forma d eagregar css a los componentes, haciendo una hoja de estilos especifica para un componente y enlazandola a este. La llamaremos Spinner.css. Aqui pegamos el codigo que nos brinda la pagina de spinkit que elegimos. El codigo html de esta pagina lo pegamos en el return del componente Spinner, teniendo en cuenta de cambiar class por className. Para importarle el archivo css es:

                            import  "./Spinner.css"

este componente Spinner lo pasamos en App.js antes del componenteResumen(v103)

6- ahora, este spinner queda viendose siempre, se necesita que solo aparezca antes de mostrar el resultado y no siempre, entonces en App.js creamos otro state llamado cargando con su respectiva funcion, este state sera de tipo boolean y empieza en false. Despues ponemos un ternario para que evalue si el state cargando esta en true muestre el componente spinner y sino pues no muestre nada.

				                    {cargando? <Spinner/>:null}

para que pase a true, usamos la funcion guardarCargando desde el componente de Formulario, entonces pasamos esta funcion al Formulario via props. Despues en Formulario la extraemos, y la llamamos antes de la funcion guardarResumen, la ponemos en true, y seguido ponemos un setTimeOut para que a los 3 segundos se oculte el spinner pasando de nuevo la funcion a false, y ademas dentro de este setTiemOut tambien ponemos la funcion guardarResumen que es la que tiene la informacion.

---------------------------------------------------------------------------------------------

LISTO!!!  YA PARA FINALIZAR CREAMOS EN CADA COMPONENTE SUS PROPTYPES PARA DOCUMENTARLOS Y CREAMOS EL BUILD DE PRODUCCION PARA SUBIR EL PROYECTO A INTERET CON NETLIFY.

1- en cada componente importamos proptypes asi:

                    import PropTypes from "prop-types"


2- en Formulario creamos sus proptypes antes del export default asi:

                        Formulario.propTypes={
                            guardarResumen:PropTypes.func.isRequired,
                            guardarCargando:PropTypes.func.isRequired

                        }

asi hacemos para cada componente dependiendo del tipo de props que tenga cada uno.

Para crear el build de produccion, paramos el servidor y damos:

                            npm run build

luego arrastramos esa carpeta build a Netlify y listo.!!!!(v104)


*/
