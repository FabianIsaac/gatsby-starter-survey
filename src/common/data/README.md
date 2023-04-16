<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Sistema de dados
</h1>

Este directorio contiene los datos del sitio web. Los datos se pueden consumir en las páginas y componentes de React a través de GraphQL. Este proyecto cuenta con un archivo base que se puede utilizar de ejemplo para crear nuevos archivos de datos.

## 💽 Archivo base

El archivo base de datos se encuentra en `survey/index.json`. Este archivo se compone de varios atributos que se pueden utilizar para crear una encuesta. Los atributos son los siguientes:

- `metadata`: Contiene información sobre la encuesta, como el título y el nombre de la app.
- `header`: Contiene la información que se mostrará en la cabecera de la encuesta.
- `blocks`: Contiene los bloques que se mostrarán en la encuesta.
- `assets`: Contiene los recursos que se utilizarán en la encuesta, como imágenes y videos. (Es importante recordar que estos recursos deben estar alojados en el directorio `src/assets` para que puedan ser utilizados en la encuesta.)

Ejemplo del archivo `survey/index.json`:
```json
{
    "metadata": {
        "apptitle": "Lorem | Encuesta de Comunicaciones Internas",
        "title": "ENCUESTA DE COMUNICACIONES INTERNAS LOREM"
    },
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
    },
    "blocks": [
        {
            "type": "title",
            "text": "MEDIOS/CANALES DE COMUNICACIÓN INTERNA",
            "configurations": {
                "backgroundColor": "secondary.main",
                "color": "secondary.main",
                "variant": "h4"
            }
        },
        {
            "type": "prominent",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate eum tempore voluptatem modi architecto animi, nam rerum quasi asperiores aperiam nisi voluptatem similique adipisci commodi hic aspernatur laboriosam sint consequatur voluptates fugit vitae iusto quae.",
            "configurations": {
                "backgroundColor": "secondary.main",
                "color": "#ffff",
                "variant": "bold"
            }
        },
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
                        "label": "2",
                        "value": 2
                    },
                    {
                        "label": "3",
                        "value": 3
                    },
                    {
                        "label": "4",
                        "value": 4
                    },
                    {
                        "label": "5",
                        "value": 5
                    },
                    {
                        "label": "6",
                        "value": 6
                    },
                    {
                        "label": "7",
                        "value": 7
                    }
                ]
            }
        },
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
                    },
                    {
                        "name": "2_C",
                        "text": "<b>Metronews</b>"
                    },
                    {
                        "name": "2_D",
                        "text": "<b>Reuniones informativas con mi jefe directo</b>"
                    },
                    {
                        "name": "2_E",
                        "text": "<b>Reuniones de seguridad y salud</b>"
                    }
                ],
                "cols": [
                    {
                        "text": "Intranet"
                    },
                    {
                        "text": "Comunicados y mails"
                    },
                    {
                        "text": "Metronews"
                    },
                    {
                        "text": "Reuniones informativas con mi jefe directo"
                    },
                    {
                        "text": "Reuniones de seguridad y salud"
                    }
                ],
                "handle": {
                    "text": "NC/NU",
                    "type": "checkbox"
                }
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
                        "label": "2",
                        "value": 2
                    },
                    {
                        "label": "3",
                        "value": 3
                    },
                    {
                        "label": "4",
                        "value": 4
                    },
                    {
                        "label": "5",
                        "value": 5
                    },
                    {
                        "label": "6",
                        "value": 6
                    },
                    {
                        "label": "7",
                        "value": 7
                    }
                ]
            }
        },
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
                "complementInput": "3_A_B"
            }
        },
        {
            "number": 4,
            "type": "multi_slider",
            "text": "En relación con los medios/canales de comunicación interna de Lorem, indícanos tu grado de acuerdo con cada una de las siguientes afirmaciones. Utiliza una escala de 1 a 7, siendo 1 “Totalmente en desacuerdo” y 7 “Totalmente de acuerdo”.",
            "parameters": {
                "inputs": [
                    {
                        "name": "4_A",
                        "text": "Me ayudan a conocer qué estamos haciendo para alcanzar nuestra <b>Visión</b>."
                    },
                    {
                        "name": "4_B",
                        "text": "Me mantienen informado de nuestros <b>objetivos y desafíos estratégicos</b>."
                    },
                    {
                        "name": "4_C",
                        "text": "Me permiten conocer el aporte que hace Lorem a <b>nuestros clientes</b>."
                    },
                    {
                        "name": "4_D",
                        "text": "Me informan sobre las iniciativas de interés para mi experiencia laboral y la de mis compañeros en Lorem (capacitaciones, gestión de desempeño, movilidad interna, etc.)."
                    },
                    {
                        "name": "4_E",
                        "text": "Me permiten obtener mayor <b>conocimiento de las distintas áreas de Lorem</b> y del aporte de sus unidades y equipos."
                    },
                    {
                        "name": "4_F",
                        "text": "Me informan sobre beneficios e iniciativas que contribuyen a mejorar mi <b>calidad de vida y bienestar</b>."
                    },
                    {
                        "name": "4_G",
                        "text": "Me hacen sentir orgulloso de pertenecer a Lorem."
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
                        "label": "2",
                        "value": 2
                    },
                    {
                        "label": "3",
                        "value": 3
                    },
                    {
                        "label": "4",
                        "value": 4
                    },
                    {
                        "label": "5",
                        "value": 5
                    },
                    {
                        "label": "6",
                        "value": 6
                    },
                    {
                        "label": "7",
                        "value": 7
                    }
                ]
            }
        },
        {
            "number": 5,
            "type": "multi_slider",
            "text": "Manifiesta tu grado de acuerdo en relación con las siguientes afirmaciones. Usa la escala de 1 a 7, siendo 1 “Totalmente en desacuerdo” y 7 “Totalmente de acuerdo”.",
            "parameters": {
                "inputs": [
                    {
                        "name": "5_A",
                        "text": "<b>Información clara.</b>"
                    },
                    {
                        "name": "5_B",
                        "text": "<b>Información oportuna.</b>"
                    },
                    {
                        "name": "5_C",
                        "text": "<b>Información consistente con la comunicación que aparece en los medios de comunicación social.</b>"
                    },
                    {
                        "name": "5_D",
                        "text": "<b>Información útil / que me sirve.</b>"
                    },
                    {
                        "name": "5_E",
                        "text": "<b>Información cercana.</b>"
                    },
                    {
                        "name": "5_F",
                        "text": "<b>Información entretenida.</b>"
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
                        "label": "2",
                        "value": 2
                    },
                    {
                        "label": "3",
                        "value": 3
                    },
                    {
                        "label": "4",
                        "value": 4
                    },
                    {
                        "label": "5",
                        "value": 5
                    },
                    {
                        "label": "6",
                        "value": 6
                    },
                    {
                        "label": "7",
                        "value": 7
                    }
                ]
            }
        },
        {
            "number": 6,
            "type": "duo_yes_no",
            "text": "¿Recuerdas haber recibido información sobre los siguientes programas, proyectos y/o campañas? Si lo recuerdas, ¿la comunicación te permitió entender el tema?",
            "parameters": {
                "headers": [
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
                        "text": "<b>SEGURIDAD Y SALUD</b>",
                        "resource": "asset_one"
                    }
                ]
            }
        },
        {
            "number": 7,
            "type": "simple_text",
            "text": "Indícanos sobre qué temas de Lorem te gustaría que te mantuviéramos informado(a), de forma prioritaria:",
            "parameters": {
                "inputs": [
                    {
                        "name": "7_A",
                        "placeholder": "Escribe aquí tu respuesta..."
                    }
                ]
            }
        },
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
                    },
                    {
                        "name": "8_E",
                        "text": "Tenemos un comportamiento ético"
                    },
                    {
                        "name": "8_F",
                        "text": "Somos una compañía experta en gas natural"
                    },
                    {
                        "name": "8_G",
                        "text": "Somos una compañía honesta"
                    },
                    {
                        "name": "8_H",
                        "text": "Nos adaptamos a las necesidades del cliente"
                    },
                    {
                        "name": "8_I",
                        "text": "Somos una compañía cercana"
                    },
                    {
                        "name": "8_J",
                        "text": "Ofrecemos buen servicio a los clientes"
                    },
                    {
                        "name": "8_K",
                        "text": "Somos una compañía que da confianza"
                    },
                    {
                        "name": "8_L",
                        "text": "Somos una compañía innovadora"
                    },
                    {
                        "name": "8_M",
                        "text": "Somos una compañía que cumple. Siempre hacemos lo que decimos"
                    }
                ]
            },
            "configurations": {
                "information_text": "Debes seleccionar 3",
                "helper_text": true,
                "min": 3,
                "max": 3,
                "validations": [
                    {
                        "type": "disable_all_on",
                        "value": 3
                    }
                ]
            }
        },
        {
            "type": "title",
            "text": "EVALUACIÓN COMUNICACIÓN DE JEFATURAS",
            "configurations": {
                "backgroundColor": "secondary.main",
                "color": "primary.main",
                "variant": "h4"
            }
        },
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
                    },
                    {
                        "name": "9_C",
                        "text": "Reconoce el trabajo de quienes sobresalen en el equipo."
                    },
                    {
                        "name": "9_D",
                        "text": "Escucha las sugerencias que los integrantes del equipo le hacemos para mejorar los procesos."
                    },
                    {
                        "name": "9_E",
                        "text": "Me orienta sobre las posibilidades de desarrollo de carrera y capacitación que ofrece Lorem."
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
                        "label": "2",
                        "value": 2
                    },
                    {
                        "label": "3",
                        "value": 3
                    },
                    {
                        "label": "4",
                        "value": 4
                    },
                    {
                        "label": "5",
                        "value": 5
                    },
                    {
                        "label": "6",
                        "value": 6
                    },
                    {
                        "label": "7",
                        "value": 7
                    }
                ]
            }
        },
        {
            "type": "title",
            "text": "IDENTIFICACIÓN DEMOGRÁFICA",
            "configurations": {
                "backgroundColor": "secondary.main",
                "color": "secondary.main",
                "variant": "h4"
            }
        },
        {
            "number": 10,
            "type": "demographic",
            "text": "",
            "parameters": {
                "options": [],
                "inputs": [
                    {
                        "type": "select",
                        "text": "Soy:",
                        "parameters": {
                            "name": "soy",
                            "options": ["Hombre", "Mujer", "No quiero identificarme"]
                        }
                    },
                    {
                        "type": "select",
                        "text": "Trabajo en:",
                        "parameters": {
                            "name": "trabajo_en",
                            "options": ["Región Metropolitana", "Rancagua", "Zona Sur"]
                        }
                    },
                    {
                        "type": "select",
                        "text": "Pertenezco a la Gerencia/Área:",
                        "parameters": {
                            "name": "pertenezco_a_la_gerencia_area",
                            "options": [
                                "Administración y Seguimiento Operativo", "Auditoría",
                                "Comercial", "Gestor Sistema de Distribución", "Operaciones",
                                "Personas y Organización", "Regulación",
                                "Servicios Compartidos", "Servicios Jurídicos"
                            ]
                        }
                    },
                    {
                        "type": "select",
                        "text": "Tengo:",
                        "parameters": {
                            "name": "tengo",
                            "options": [
                                "30 años o menos", "Entre 31 - 40 años", "Entre 41 - 50 años",
                                "Más de 51 años"
                            ]
                        }
                    }
                ]
            }
        }
    ],
    "assets": [
        {
            "id": "asset_one",
            "src": "../../assets/images/cover.png",
            "type": "img",
            "alt": "Imagen de placeholder"
        }
    ]
}

```