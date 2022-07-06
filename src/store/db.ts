import { Project } from "models/types";

export const db: Project[] = [
  {
    id: 1,
    name: "To-Do list",
    description:
      "Página que permite crear lista de cosas por hacer, como una lista de tareas ha realizar, se pueden marcar las tareas que ya se han realizado, buscar y eliminar tareas.",
    urlPublic: "https://czabala847.github.io/react-platzi/",
    urlRepo: "https://github.com/czabala847/react-platzi",
    technologies: ["React JS"],
    img: "/images/todo.png",
  },
  {
    id: 2,
    name: "Calculadora de propinas",
    description:
      "Aplicación de calculadora de propinas, dependiendo del porcentaje de la propina y el número de personas que se ingresen.",
    urlPublic: "https://nostalgic-davinci-6c69c0.netlify.app/",
    urlRepo:
      "https://github.com/czabala847/frontend-mentor/tree/master/calculator_app",
    technologies: ["Javascript"],
    img: "/images/calculadora-propinas.png",
  },
  {
    id: 3,
    name: "Card NFT",
    description: "Diseño de una card, utilizando como preprocesador a SASS.",
    urlPublic: "https://unruffled-neumann-257073.netlify.app/",
    urlRepo:
      "https://github.com/czabala847/frontend-mentor/tree/master/card_nft",
    technologies: ["SASS"],
    img: "/images/card.png",
  },
  {
    id: 4,
    name: "Petgram",
    description:
      "Aplicación para ver imágenes de mascotas. Se pueden dar favoritos siempre y cuando el usuario inicie sesión, las mascotas se encuentran clasificadas por categorías.",
    urlPublic: "https://condescending-volhard-dc7146.netlify.app/",
    urlRepo: "https://github.com/czabala847/petgram",
    technologies: ["React JS", "React Apollo", "Styled components"],
    img: "/images/petgram.png",
  },
  {
    id: 5,
    name: "Gifs App",
    description:
      "Proyecto de búsqueda de gifs por medio de la API giphy, la aplicación permite buscar gifs relacionados a la busqueda que se le suministre en en la barra de búsqueda, se guardará también un historial de las ultimas 10 búsquedas en localStorage.",
    urlPublic: "https://sparkly-tarsier-5fab7e.netlify.app/",
    urlRepo: "https://github.com/czabala847/gifs-app",
    technologies: ["Angular"],
    img: "/images/gifsapp.png",
  },
  {
    id: 6,
    name: "Avocado Store",
    description: "Comercio electronico de venta de Aguacates.",
    urlPublic: "https://nextjs-platzi-nh2xeo201-czabala847.vercel.app/",
    urlRepo: "https://github.com/czabala847/nextjs-platzi",
    technologies: ["Next", "Typescript"],
    img: "/images/avocado.png",
  },
];
