import { getAllSpinnerData } from '@services/SpinnerService';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
import HomeContainer from '@containers/Home';
const Home = async () => {
  // const data: Array<IWheel> = await getAllSpinnerData();
  return (
    <HomeContainer />
  )
}
export default Home;