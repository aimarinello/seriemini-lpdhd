const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://aimarinello.github.io",
  "baseurl": "/seriemini-lpdhd",
  "title": "Laboratorio abierto PDHD",
  "subtitle": "Un sistema para mini colecciones digitales",
  "credits": "Por Adolfo Marinello",
  "copyright": "Laboratorio de Humanidades Digitales UC, \"2025",
  "banner": "https://buscadorarchivohistorico.uc.cl/themes/theme_a_uc/images/uc/banner1.jpg",
  "logos" : [
    { img: "https://centropatrimonio.uc.cl/wp-content/uploads/2023/05/logo-grisazul.png",link: "https://centropatrimonio.uc.cl/" },
      ],
  "pages": {
    "iiifViewer": true,
    
    "metadataToShow": [
      {
        "key": "pid",
        "label": "Codigo",
        "type": "text"
      },
      {
        "key": "label",
        "label": "Titulo",
        "type": "text"
      },
      {
        "key": "creator",
        "label": "Colaborador",
        "type": "text"
      },
      {
        "key": "description",
        "label": "Descripción",
        "type": "text"
      },
      {
        "key": "extension",
        "label": "Contenido",
        "type": "text"
      },
    ],
    "metadataToIndex": [
      "pid",
      "label",
      "creator",
      "date",
      "description"
    ]
  }
};
export default config;