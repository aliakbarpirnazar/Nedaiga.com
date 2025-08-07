
import OurPartnersPage from "@/components/Ourpartners";
import Foundersmessage from "./Foundermessage";

export const metadata = {
  title: "Founder’s Message | NEDA Group",
  description:
    "Discover the personal story behind NEDA Group. Founder Aye Katebi shares her journey from growing up in Iran’s energy sector to building a trusted advisory hub for international oil and gas contracts in Iran. Learn how NEDA bridges global expectations with local expertise.",
};



export default function Foundermessage() {
  return (
    <main >
      <Foundersmessage />
      <OurPartnersPage />
    </main>
  );
}