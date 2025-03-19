const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://aimarinello.github.io",
  "baseurl": "/seriemini-lpdhd",
  "title": "Laboratorio abierto PDHD",
  "subtitle": "Un sistema para mini colecciones digitales",
  "credits": "Por Adolfo Marinello",
  "copyright": "Laboratorio de Humanidades Digitales UC, \"2025",
  "banner": "https://images.pexels.com/photos/10276253/pexels-photo-10276253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "date",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "description",
        "label": "Descripción",
        "type": "text"
      },
      {
        "key": "subject",
        "label": "Tema",
        "type": "text"
      },
      {
        "key": "source",
        "label": "Fuente",
        "type": "text"
      },
            {
        "key": "format",
        "label": "Formato",
        "type": "text"
      },
      {
        "key": "language",
        "label": "Idioma",
        "type": "text"
      },
      {
        "key": "identifier",
        "label": "Identifier",
        "type": "text"
      },
      {
        "key": "rights",
        "label": "Rights",
        "type": "text"
      },
      {
        "key": "rightsstatement",
        "label": "Rightsstatement",
        "type": "text"
      }
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