import { Main, Hero2, Hero3, conte, content } from "../assets";

export const slides = [
  {
    id: 1,
    src: Main,
    alt: "Awaken Your Senses",
    head: "Awaken Your Senses",
    desc: "“Where Flavor Meets Adventure!”"
  },
  {
    id: 2,
    src: Hero2,
    alt: "The Unparalleled Taste",
    head: "The Unparalleled Taste",
    desc: "“Unleash Your Inner Coffee Connoisseur”",
  },
  {
    id: 3,
    src: Hero3,
    alt: "Exquisite Coffee Plantation",
    head: "Exquisite Coffee Plantation",
    desc: "“Unleash Your Inner Coffee Connoisseur”"
  },

]


export const contentInfo = [
  {
    id:1,
    src: content,
    head: "Welcome to Exquisite Beans",
    para: "Step into a world of indulgence as you savor the finest handcrafted brews from around the globe."
  },
  {
    id:2,
    src:  conte,
    head: "Elevated Sensory Experience",
    para: "From the moment you enter our opulent establishment, you are enveloped in an ambiance of refined elegance."
  }
]

export default {slides,
  contentInfo
}