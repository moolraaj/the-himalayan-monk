import { destination_page_bg } from "../assets/images";
import DestinatinationPage from "./component/destinatinationPage";
import DPlaces from "./component/destinationLocation";

const page = () => {
  return (
    <>
    
      <DestinatinationPage />
      <div className="destination_page_bg" style={{ backgroundImage: `url(${destination_page_bg.src})` }}>
      <DPlaces />
      </div>
    </>
  );
};

export default page;
