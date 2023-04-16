<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's survey starter
</h1>


Inicie su proyecto con este modelo predeterminado. Este iniciador se envía con los principales archivos de configuración de Gatsby que puede necesitar para ponerse en marcha rápidamente con el generador de aplicaciones ultrarrápido para React.


## 🚀 Inicio rápido

1.  **Crear un sitio de Gatsby.**

    Es posible crear un proyecto rapidamente solo ejecutando el siguiente comando

    ```shell
    npx gatsby new new-gatsby-survey https://github.com/FabianIsaac/gatsby-starter-survey.git
    ```
    

1.  **Empezar a desarrollar.**

    Navegue al directorio de su nuevo sitio e inícielo.

    ```shell
    cd new-gatsby-survey/
    npm run develop
    ```

1.  **Abra el código fuente y comience a editar**

    Su sitio ahora se está ejecutando en `http://localhost:8000`!

    Nota: También verá un segundo enlace: `http://localhost:8000/___graphql`. Esta es una herramienta que puede usar para experimentar con la consulta de sus datos. Obtenga más información sobre el uso de esta herramienta en [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

    Abra el directorio `new-gatsby-survey` en el editor de código de su elección y edite `src/pages/index.js`. ¡Guarde sus cambios y el navegador se actualizará en tiempo real!



## 🧐 ¿Qué hay adentro?
Un vistazo rápido a los archivos y directorios que verá en este proyecto starter de Gatsby.

    .
    └── new-gatsby-survey/
        ├── [src/](#src)
        │   ├── [common/](#common)
        │   │   ├── [assets/](#assets)
        │   │   │   └── images
        │   │   └── [data/](#data)
        │   │       └── survey/
        │   │           └── index.json
        │   ├── [components/](#components)
        │   │   ├── FormComponents/
        │   │   │   ├── [ComplementaryYesNoBlock.js](#complementaryyesnoblock.js)
        │   │   │   ├── [DemographicBlock.js](#demographicblock.js)
        │   │   │   ├── [DuoYesNoBlock.js](#duoyesnoblock.js)
        │   │   │   ├── [FormBlock.js](#formblock.js)
        │   │   │   ├── [MultiSelectionBlock.js](#multiselectionblock.js)
        │   │   │   ├── [MultiSliderBlock.js](#multisliderblock.js)
        │   │   │   ├── [MultiSliderWhitHandlerBlock.js](#multisliderwhithandlerblock.js)
        │   │   │   ├── [SimpleTextBlock.js](#simpletextblock.js)
        │   │   │   ├── [SliderBlock.js](#sliderblock.js)
        │   │   │   └── [UiComponents.js](#uicomponents.js)
        │   │   └── UiComponents/
        │   │       ├── [AdvertisementBlock.js](#advertisementblock.js)
        │   │       ├── [GenerateBlocks.js](#generateblocks.js)
        │   │       ├── [GetBlock.js](#getblock.js)
        │   │       ├── [Header.js](#header.js)
        │   │       ├── [PaperBlock.js](#paperblock.js)
        │   │       ├── [ProminentMessageBlock.js](#prominentmessageblock.js)
        │   │       ├── [TitleBlock.js](#titleblock.js)
        │   │       └── [WelcomeBlock.js](#welcomeblock.js)
        │   ├── [pages/](#pages)
        │   │   ├── 404.js
        │   │   ├── index.js
        │   │   └── ok.js
        │   ├── [theme/](#theme)
        │   │   ├── theme.js
        │   │   └── ThemeProvide.js
        │   └── environment.js
        ├── [.env](#env)
        ├── [gatsby-browser.js/](#gatsby-browser.js)
        ├── [gatsby-node.js/](#gatsby-node.js)
        └── [gatsby-ssr.js/](#gatsby-ssr.js)


## src
 Este directorio contendrá todo el código relacionado con lo que verá en el front-end de su sitio (lo que ve en el navegador), como el encabezado de su sitio o una plantilla de página.

## common
 Este directorio contiene recursos de desarrollo y publicos.

## assets
 Este directorio contiene los archivos de recursos estaticos.

 ## data
 Este sub directorio contiene los recursos para graphql, el proyecto general esta configurado para trabajar con el archivo `survey/index.json` que contiene la estructura de la encuesta.

## components
Carpetas que contienen los componentes de la aplicacion. Estos estan divididos en dos carpetas, `FormComponents` y `UiComponents`. La carpeta `FormComponents` contiene los componentes que se encargan de generar los formularios, mientras que la carpeta `UiComponents` contiene los componentes que se encargan de generar los elementos de la interfaz de usuario.

## FormComponents

### ComplementaryYesNoBlock.js
Este componente se encarga de mostrar una pregunta de tipo switch en la cual si responde si, se habilita una pregunta adicional de tipo texto.
![Componente de complementary_yes_no](/screenshots/complementary_yes_no.png)
___
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 3,
      "type": "complementary_yes_no",
      "text": "¿Te gustaría recibir información de Lorem a través de otro medio o canal?",
      "parameters": {
        "inputs": [
          {
            "name": "3_A_A"
          },
          {
            "name": "3_A_B",
            "text": "Indícanos cuál sería"
          }
        ],
        "complementCondition": true,
        "complementInput": "3_A_B" // Nombre del input que se habilita (quiza se pueda mejorar esto)
      }
    }
  ]
}
```
___
### DemographicBlock.js (Temporal)
Este componente se ecarga de generar las preguntas demograficas, el input usado es un select.
![Componente de demographic](/screenshots/demographic.png)
**Nota:** Este componente es temporal, ya que se espera mejorar la estructura del mismo.
___
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 10,
      "type": "demographic",
      "text": "", // Si se desea agregar un texto que englobe a las preguntas demograficas se puede agregar aqui
      "parameters": {
        "options": [],
        "inputs": [
          {
            "type": "select",
            "text": "Soy:",
            "parameters": {
              "name": "soy", // Nombre del input
              "options": [ // Opciones del select
                "Hombre", 
                "Mujer", 
                "No quiero identificarme"
              ]
            }
          },
          
        ]
      }
    }
  ]
}
```
___
### DuoYesNoBlock.js (Temporal)
Este componente es similar al componente `ComplementaryYesNoBlock.js`, la diferencia es que este componente tiene dos preguntas de tipo switch, si responde si a la primera, se habilita la segunda. Si responde no a la primera, no se habilita la segunda. 
![Componente de duo_yes_no](/screenshots/duo_yes_no.png)
**Nota:** Este componente es temporal, ya que se espera mejorar la estructura del mismo.

___
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 6,
      "type": "duo_yes_no",
      "text": "¿Recuerdas haber recibido información sobre los siguientes programas, proyectos y/o campañas? Si lo recuerdas, ¿la comunicación te permitió entender el tema?",
      "parameters": {
        "headers": [ // Estos son los encabezados de las columnas, en el indice 0 se encuentra el encabezado de la columna data_a, en el indice 1 se encuentra el encabezado de la columna data_b
          "<b>No recuerdo / Sí recuerdo</b>",
          "<b>No me permitió entender / Sí me permitió entender</b>"
        ],
        "inputs": [
          {
            "data_a": [
              {
                "name": "6_A_A",
                "negative_text": "No recuerdo",
                "positive_text": "Sí recuerdo"
              }
            ],
            "data_b": [
              {
                "name": "6_A_B",
                "negative_text": "No me permitió entender",
                "positive_text": "Sí me permitió entender"
              }
            ]
          }
        ],
        "cols": [
          {
            "text": "<b>Programa uno</b>",
            "resource": "asset_one"
          }
        ]
      }
    },
  ]
}
```
>Si en el atributo cols se desea agregar una imagen, se debe agregar el atributo `resource` con el nombre del archivo de la imagen que se encuentra en la carpeta `assets`.
___
### FormBlock.js
Este componente es basico y se encarga de encerrar los otros componentes en una etiqueta `form`, ademas de agregar un boton para enviar la encuesta.
___
### MultiSelectionBlock.js
Este componente es un listado de checkbox, permite seleccionar si se desea limitar las selecciones a una cantidad maxima.
![Componente de multi_selection](/screenshots/multi_selection.png)
___
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 8,
      "type": "multi_selection",
      "text": "Pensando en Lorem como empresa, ¿cuáles de las siguientes opciones serían para ti sus principales atributos?",
      "parameters": {
        "inputs": [
          {
            "name": "8_A",
            "text": "Cuidamos el medio ambiente"
          },
          {
            "name": "8_B",
            "text": "Proporcionamos bienestar a los hogares"
          },
          {
            "name": "8_C",
            "text": "Somos una compañía que realiza un trabajo profesional"
          },
          {
            "name": "8_D",
            "text": "Somos una compañía líder"
          }
        ]
      },
      "configurations": {
        "information_text": "Debes seleccionar 3",
        "helper_text": true,
        "min": 3, // Establece la cantidad minima de selecciones
        "max": 3, // Establece la cantidad maxima de selecciones
        "validations": [
          {
            "type": "disable_all_on",
            "value": 3
          }
        ]
      }
    }
  ]
}
```
___
### MultiSliderBlock.js
Este componente es un listado de slider.
![Componente de multi_slider](/screenshots/multi_slider.png)
___
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 9,
      "type": "multi_slider",
      "text": "Indícanos tu grado de acuerdo con cada una de las siguientes afirmaciones, en relación con la comunicación con tu jefatura directa, independiente de si lo hace en forma personal o grupal. Utiliza una escala de 1 a 7, siendo 1 “Totalmente en desacuerdo” y 7 “Totalmente de acuerdo”.",
      "parameters": {
        "inputs": [
          {
            "name": "9_A",
            "text": "Me explica hacia dónde va Lorem y cómo puedo aportar a su éxito."
          },
          {
            "name": "9_B",
            "text": "Me ayuda a entender cómo mi trabajo aporta al éxito de Lorem."
          }
        ]
      },
      "configurations": {
        "min": 0, // Establece el valor minimo del slider
        "max": 3, // Establece el valor maximo del slider
        "step": 1, // Establece el intervalo de valores del slider
        "defaultValue": 0, // Establece el valor por defecto del slider
        "labels": [ // Establece las etiquetas que se mostraran en el slider
          {
            "label": "1",
            "value": 1
          },
          {
            "label": "2",
            "value": 2
          },
          {
            "label": "3",
            "value": 3
          }
        ]
      }
    }
  ]
}
```
___
### MultiSliderWhitHandlerBlock.js
Este componente es un listado de slider similar a `MultiSliderBlock.js` la diferencia es que cuenta con un checkbox que lo habilida/deshabilita.
![Componente de multi_slider_whit_handler](/screenshots/multi_slider_whit_handler.png)
___
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 2,
      "type": "multi_slider_whit_handler",
      "text": "Indícanos tu satisfacción con nuestros medios/canales de comunicación interna, utilizando una escala de 1 a 7, siendo 1 “Totalmente insatisfecho” y “7 Totalmente satisfecho”. Si no los conoces o no los utilizas, marca la opción NC/NU (No conozco/No utilizo).",
      "parameters": {
        "inputs": [
          {
            "name": "2_A",
            "text": "<b>Intranet</b>"
          },
          {
            "name": "2_B",
            "text": "<b>Comunicados y mails</b>"
          }
        ],
        "handle": { // Por el momento no se utiliza este atributo pero la idea es dinamizar los datos del checkbox que habilita/deshabilita el slider
          "text": "NC/NU", // Texto que se mostrara en el checkbox
          "value": "NC/NU", // Esto no esta operativo pero se pretende que al seleccionar el checkbox se envie este valor a BD
          "type": "checkbox" // Esto quizas no sea necesario, ya que solo se utiliza para el checkbox
        }
      },
      "configurations": {
        "min": 0,
        "max": 7,
        "step": 1,
        "defaultValue": 0,
        "labels": [ // Establece las etiquetas que se mostraran en el slider, es posible indicar solo algunas
          {
            "label": "1",
            "value": 1
          },
          {
            "label": "4",
            "value": 4
          },
          {
            "label": "7",
            "value": 7
          }
        ]
      }
    }
  ]
}
```
___
### SimpleTextBlock.js
Este componente es un input de tipo texto, el cual se genera a partir de los datos que se encuentran en el archivo `survey/index.json` en la seccion `blocks` de tipo `simple_text`.
![Componente de simple_text](/screenshots/simple_text.png)
___
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 7,
      "type": "simple_text",
      "text": "Indícanos sobre qué temas de Lorem te gustaría que te mantuviéramos informado(a), de forma prioritaria:",
      "parameters": {
        "inputs": [ // Ideal seria que se pueda generar mas de un input de texto (para futuras versiones)
          {
            "name": "7_A",
            "placeholder": "Escribe aquí tu respuesta..."
          }
        ]
      }
    }
  ]
}
```
___
### SliderBlock.js
Este componente es un slider.
![Componente de slider](/screenshots/slider.png)

Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "number": 1,
      "type": "slider",
      "text": "Indícanos tu grado de satisfacción con la comunicación interna de Lorem, utilizando una escala de 1 a 7, siendo 1 “Totalmente insatisfecho” y 7 “Totalmente satisfecho”.",
      "parameters": {
        "inputs": [
          {
            "name": "1_A"
          }
        ]
      },
      "configurations": {
        "min": 0,
        "max": 7,
        "step": 1,
        "defaultValue": 0,
        "labels": [
          {
            "label": "1",
            "value": 1
          },
          {
            "label": "7",
            "value": 7
          }
        ]
      }
    }
  ]
}
```

## UiComponents

### AdvertisementBlock.js
Este componente crear un texto con una lista de puntos a resaltar.
![Componente de advertisement](/screenshots/advertisement.png)
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "header": {
    "advertisement": {
      "head": "IMPORTANTE:",
      "points": [
        "No hay respuestas correctas ni incorrectas. Necesitamos una opinión honesta, basada en tu experiencia personal.",
        "La encuesta es anónima. No preguntaremos tu nombre, solo te pedimos que identifiques algunas características demográficas que nos ayudarán a focalizar nuestro trabajo.",
        "Por favor, no omitas respuestas."
      ]
    }
  }
}
```

___
### GenerateBlocks.js
Este componente inicia los procesos para crear la estructura de los componentes que se mostraran en la pagina, para esto es necesario pasarle los datos de la encuesta que se encuentran en el archivo `survey/index.json`.
___
### GetBlock.js
Este componente es el encargado de generar los componentes que se mostraran en la pagina, para esto es necesario pasarle los datos del componente que se solicita.
___
### Header.js
Este componente agurpa los componentes de `AdvertisementBlock.js`, `WelcomeBlock.js` y ademas muestra una imagen como encabezado de la encuesta.
![Componente de header](/screenshots/header.png)
Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "header": {
    "logo": {
      "src": "../../assets/images/logo.png",
      "alt": "Logo"
    },
    "welcome": {
      "head": "¡Bienvenidos(as)!",
      "body": "En Lorem nos desafiamos a mejorar continuamente, por eso queremos conocer tu percepción sobre cómo trabajamos las comunicaciones internas durante el 2022, y la forma en la que crees podemos enriquecerlas."
    },
    "advertisement": {
      "head": "IMPORTANTE:",
      "points": [
        "No hay respuestas correctas ni incorrectas. Necesitamos una opinión honesta, basada en tu experiencia personal.",
        "La encuesta es anónima. No preguntaremos tu nombre, solo te pedimos que identifiques algunas características demográficas que nos ayudarán a focalizar nuestro trabajo.",
        "Por favor, no omitas respuestas."
      ]
    },
    "custom_background": {
      "src": "../../assets/images/header.png"
    },
    "thanks": {
      "text": "¡Muchas gracias por ayudarnos a seguir mejorando!"
    }
  }
}
```

___
### PaperBlock.js
Este componente es el que envuelve los bloques de encuesta, es decir, los componentes que se generan en `GetBlock.js`.
___
### ProminentMessageBlock.js
Este componente muestra un mensaje, se utiliza para dar enfasis a algun mensaje que se quiera mostrar al usuario.
![Componente de prominent](/screenshots/prominent.png)

Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "type": "prominent",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate eum tempore voluptatem modi architecto animi, nam rerum quasi asperiores aperiam nisi voluptatem similique adipisci commodi hic aspernatur laboriosam sint consequatur voluptates fugit vitae iusto quae.",
      "configurations": {
        "backgroundColor": "secondary.main", // Color de fondo del mensaje
        "color": "#ffff", // Color del texto
        "variant": "bold" // Tipo de fuente y texto
      }
    }
  ]
}
```
___
### TitleBlock.js
Este componente muestra un titulo, se utiliza para separar algunas preguntas y asociarlas a un tema en especifico.
![Componente de title](/screenshots/title.png)

Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "block": [
    {
      "type": "title",
      "text": "MEDIOS/CANALES DE COMUNICACIÓN INTERNA",
      "configurations": {
        "backgroundColor": "secondary.main",
        "color": "secondary.main",
        "variant": "h4"
      }
    }
  ]
}
```
___
### WelcomeBlock.js
Este componente muestra un mensaje de bienvenida, se utiliza para dar la bienvenida al usuario.
![Componente de welcome](/screenshots/welcome.png)

Ejemplo de la estructura del json que se necesita para generar este componente:
```json
{
  "header": {
    "welcome": {
      "head": "¡Bienvenidos(as)!",
      "body": "En Lorem nos desafiamos a mejorar continuamente, por eso queremos conocer tu percepción sobre cómo trabajamos las comunicaciones internas durante el 2022, y la forma en la que crees podemos enriquecerlas."
    }
  }
}
```
___
## pages
Este directorio contiene las paginas de la aplicacion, en este caso solo se encuentran las paginas de index, ok y 404.

## theme 
En este directorio se encuentran los archivos que estan relacinaos con el tema de la aplicacion, en caso de querer cambiar el tema se debe modificar el archivo `theme.js`

## .env
Este archivo contiene las variables de entorno, deberian existir dos, `.env.development` y `.env.production`, en caso de no existir alguno de estos dos archivos se debe crear, en caso de que se quiera agregar una nueva variable de entorno se debe agregar en ambos archivos.

Los daros que se encuentran en este archivo son los siguientes:
```env
# .env.development
GATSBY_PAGE_TITLE="Starter Survey"
GATSBY_TITLE_DESCRIPTION="starter-gatsby-survey"
GATSBY_DESCRIPTION="Starter para encuestas"
GATSBY_AUTHOR="@avocadostudio"
GATSBY_SITEURL=http://avocadostudio.cl
GATSBY_PATH_PREFIX=/
GATSBY_FAVICON=src/common/assets/images/icon.png
SERVER_URL=http://localhost

# .env.production
GATSBY_PAGE_TITLE="Starter Survey"
GATSBY_TITLE_DESCRIPTION="starter-gatsby-survey"
GATSBY_DESCRIPTION="Starter para encuestas"
GATSBY_AUTHOR="@avocadostudio"
GATSBY_SITEURL=http://avocadostudio.cl
GATSBY_PATH_PREFIX=https://fabianisaac.github.io/gatsby-starter-survey/
GATSBY_FAVICON=src/common/assets/images/icon.png
SERVER_URL=http://localhost
```
Las variables que comienzan su nombre con `GATSBY_` son variables que se utilizan en el archivo `gatsby-config.js` y son utilizadas por Gatsby, las demas variables son utilizadas por la aplicacion y deberian agregarse en ambos archivos para ser exportadas por el archivo `src/enviroment.js` al cual tambien deben ser exportadas.

## gatsby-browser.js
Este archivo es donde Gatsby espera encontrar cualquier uso de las [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (si corresponde). Estos permiten la personalización/extensión de la configuración predeterminada de Gatsby que afecta al navegador.

## gatsby-config.js
Este es el archivo de configuración principal para un sitio de Gatsby. Aquí es donde puede especificar información sobre su sitio (metadatos), como el título y la descripción del sitio, qué complementos de Gatsby le gustaría incluir, etc. (Revisar [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) para más detalles).

## gatsby-node.js
Este archivo es donde Gatsby espera encontrar cualquier uso de la [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (Si existe). Estos permiten la personalización/extensión de la configuración predeterminada de Gatsby que afecta partes del proceso de creación del sitio.

## gatsby-ssr.js
Este archivo es donde Gatsby espera encontrar cualquier uso de la [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (Si existe). Estos permiten la personalización de la configuración predeterminada de Gatsby que afecta la representación del lado del servidor.

