const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://aimarinello.github.io",
  "baseurl": "/seriemini-lpdhd",
  "title": "Colección laboratorio abierto PDHD",
  "subtitle": "Un sistema para mini colecciones digitales",
  "credits": "Por Adolfo Marinello",
  "copyright": "Laboratorio de Humanidades Digitales UC, \"2025",
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