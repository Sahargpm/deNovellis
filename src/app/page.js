
import Image from "next/image";
import Hero from "./component/Hero";
import Container  from "./component/Container";
import Services from "./component/Services";
import Quote from "./component/Quote";
import Step from "./component/Step";
import Form from "./component/Form";
import Enquiries from "./component/Enquiries";
import Carousal from "./component/Carousal";

export default function Home() {
  
  return (
    <div  className="w-full bg-secondary" >   
      <Hero ></Hero>
      <Container></Container>
      <Quote></Quote>
      <Services></Services>
      <Step></Step>
      <Enquiries></Enquiries>
    </div>
  )
}
    