import { CheckIcon } from "lucide-react";

export default function NedaAcademySection() {
  return (
   <section className="container mx-auto bg-[#0f0f0f] text-left text-gray-200 px-6 py-12">
   
<div className="grid grid-cols-12 gap-4">
    <div className="col-span-6 col-start-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          NEDA Academy
        </h1></div>
    <div className="col-span-12 text-justify ">
       <p className="text-base sm:text-lg leading-relaxed sm:text-left">
          <strong>The NEDA Academy</strong> is a dedicated division focused on advancing industry knowledge and developing technical capabilities for professionals across the <strong>energy</strong> and <strong>upstream sectors</strong>. Our distinguished instructors, many of whom are affiliated with leading national institutions, provide specialized guidance in critical areas such as the <strong>Iranian Petroleum Contract (IPC)</strong>, regulatory frameworks, risk management, and commercial strategy.
          <br /><br />
          What sets NEDA apart is not just the depth of our expertise, but also the breadth of our impact. We have played an active role in numerous <strong>seminars</strong>, <strong>workshops</strong>, and <strong>academic collaborations</strong>, including a longstanding partnership with <strong>Petro Farda</strong> to deliver advanced training programs specifically tailored for the upstream oil and gas sector.
          <br /><br />
          Whether through custom corporate workshops, open-enrolment courses, or high-level industry seminars, NEDA Academy ensures participants gain actionable insights, practical skills, and the confidence to navigate the complexities of today’s energy landscape.
        </p>

    </div>
    {/* <div className="col-span-12 ">3</div> */}
    <div className="col-span-12">  
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-6">
            Key Academic and Industry Contributions
          </h2>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 space-y-2">
            <li>
              Member of management committee for Iran Petroleum Contract drafting, Ministry of Petroleum
            </li>
            <li>
              Member of specialized committee preparing Strategic Plan for Oil Industry Projects
            </li>
            <li>
              Presenter at
              <ul className="list-inside ml-5 mt-1 space-y-1 list-none">
                <li  className="flex items-start gap-2"> <CheckIcon className="w-5 h-5 text-green-600 mt-0.5" /> Tehran Summit 2015</li>
                <l  className="flex items-start gap-2">  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5" /> Iran Oil Industry Contracts Revision Forum 2014</l>
                <li  className="flex items-start gap-2">  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5" /> Economist Committee, Iranian Mining House (IMH), 2016–2019</li>
              </ul>
            </li>
            <li>
              Published and presented in
              <br />
              <span className="block ml-6">
                MEET Journal, The Energy World Magazine, Institute for Energy Relations
              </span>
            </li>
          </ul>
        </div></div>
    {/* <div className="col-span-12 sm:col-span-6 md:col-span-6">5</div> */}
</div>
    
     
    </section>
  );
}
