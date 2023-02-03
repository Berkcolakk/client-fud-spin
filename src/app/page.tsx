import SpinnerAdd from "@/components/Spinner/SpinnerAdd";
import SpinnerWheel from "@/components/Spinner/SpinnerWheel";
import { getAllSpinnerData } from '@services/SpinnerService';
import { v4 as uuidv4 } from 'uuid';
export interface Wheel {
  id:number;
  name:string;
  color:string;
}
const Home = async () => {
  console.log(process.env.NEXT_PUBLIC_TEST)
  const data: Array<Wheel> = await getAllSpinnerData()
  return (
    <div className="container mx-auto flex-auto 2xl:flex xl:flex lg:flex md:flex sm:block items-center justify-center">
      <SpinnerAdd />
      <SpinnerWheel Wheels={data} />
    </div>
  )
}
export default Home
