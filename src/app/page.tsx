import SpinnerAdd from "@/components/Spinner/SpinnerAdd";
import SpinnerWheel from "@/components/Spinner/SpinnerWheel";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const wheels = [
    {
        id: uuidv4(),
        name: "Pizzas",
        color: "#AA5656"
    },
    {
        id: uuidv4(),
        name: "Hamburger",
        color: "#FFEA20"
    },
    {
        id: uuidv4(),
        name: "Pastas",
        color: "#CD0404"
    },
    {
        id: uuidv4(),
        name: "Risotto",
        color: "#A31ACB"
    },
    {
        id: uuidv4(),
        name: "Doner",
        color: "#FF6E31"
    }
]
  return (
    <div className="container mx-auto flex-auto 2xl:flex xl:flex lg:flex md:flex sm:block items-center justify-center">
      <SpinnerAdd />
      <SpinnerWheel Wheels={wheels} />
    </div>
  )
}

export default Home
