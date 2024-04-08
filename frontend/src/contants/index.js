import {  Ameri,
  cappaci,
  conte,
  content,
  Espresso,
  latOne,
  latTwo,
  latThree,
  Macca,
  Main,
  Product,
  Time,
  history,
  Vanilla,
  IcedLat,
  Diamond, Logo}  from '../assets'



 export const navLinks = [

  {
    id:"home",
    title:"Home",
    logo:Diamond,
  },

  
  {
    id:"about",
    title:"About",
    logo:Diamond,
  },

  
  {
    id:"menu",
    title:"Menu",
    logo:Diamond,
  },

  
  {
    id:"pages",
    title:"Pages",
    logo:Diamond,
  },
  
  {
    id:"shop",
    title:"Shop",
    logo:Diamond,
  },
  {
    id:"contact",
    title:"Contact",
    logo:Diamond,
  }

]


export const stats = [

  {
    id: "stats-1",
    value: "9277+",
    title: "Coffee Cups Served"
  },

  {
    id: "stats-2",
    value: "8977+",
    title: "Happy Clients"
  },

  {
    id: "stats-3",
    value: "12",
    title: "Winning Awards"
  },

]

export const menus = [
     {
      id: 1,
      src: Espresso,
      title: "Espresso",
      paise: "299₹"
     },
     {
      id: 2,
      src: Macca,
      title: "Macchiato",
      paise: "299₹"
     },
     {
      id: 3,
      src: cappaci,
      title: "Cappuccino",
      paise: "399₹"
     },
     {
      id: 4,
      src: Vanilla,
      title: "Latte",
      paise: "299₹"
     },
     {
      id: 5,
      src: Ameri,
      title: "Americano",
      paise: "199₹"
     },
     {
      id: 6,
      src: IcedLat,
      title: "Mocha",
      paise: "399₹"
     },
]
 


export default {
  navLinks,
  stats,
  menus
}