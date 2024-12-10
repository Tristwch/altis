import { FC } from "react";

import ExpirianceSection from "../components/home/expiriance-section";
import BenefitsSection from "../components/home/benefits-section/BenefitsSection";
import CooperationStepsSection from "../components/home/cooperation-steps-section";
import ContactUs from "../components/home/contact-us-section";
import Hero from "../components/home/hero-section";
import Container from "../components/container";

const Home: FC = () => {
  return (
    <Container>
      <>
        <Hero />
        <ExpirianceSection />
        <BenefitsSection />
        <CooperationStepsSection />
        <ContactUs />
      </>
    </Container>
  );
};
export default Home;
