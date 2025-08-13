

export default function PublicationsPage() {
  return (
    <section className="container mx-auto bg-[#0f0f0f] text-left text-gray-200 px-6 py-12">




    <div className="grid grid-cols-12 gap-4">
    <div className="col-span-6 col-start-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
         Publications & Research
        </h1></div>
    <div className="col-span-12 text-justify ">
       <h2 className="text-2xl font-semibold mb-2 text-white">Books:</h2>
        <p className="mb-6">
          <strong>Oil and Gas Contracts, Market and Strategy</strong><br />
          A comprehensive 48-volume work published in 2016, focusing on the complex legal, contractual, and commercial frameworks of the global oil and gas industry. This collection serves as a reference point for practitioners and researchers working on upstream contracts, market analysis, and strategic project development.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Academic Articles & Papers
        </h2>
<ul className="space-y-4 ">
          {/* نمونه مقالات - عناوین با استایل سئو مناسب */}
          <li>
            <p>
              <strong>Pricing Challenges in Export Contracts of Gas Industry of Iran; Capacities and Obstacles</strong><br />
              <em>Journal of Politics and Law, Canada, Vol. 9, No. 5, 2016</em><br />
              Challenges in Iran’s gas export pricing, offering both domestic and international perspectives.
            </p>
          </li>

          <li>
            <p>
              <strong>Comparative Study of the Efficiency of Fiscal Regimes of the Buy Back and IPC</strong><br />
              <em>Iran Energy Economic Journal, No. 20, 2017</em><br />
              Comparing fiscal regimes in Iran’s upstream sector, focused on investor incentives and long-term outcomes.
            </p>
          </li>

          <li>
            <p>
              <strong>Evaluation of Risks in Oil and Gas Upstream Projects</strong><br />
              <em>System Thinking in Practice Conference, 2019</em><br />
              Risk analysis for upstream projects using system-thinking models.
            </p>
          </li>

          <li>
            <p>
              <strong>Comparative Study of the Principle of Reasonableness in Iranian and International Law</strong><br />
              <em>Studies of Political Science, Law and Jurisprudence, 2021</em><br />
              Legal analysis comparing Iranian and global standards of reasonableness.
            </p>
          </li>

          <li>
            <p>
              <strong>Effects of Termination in Installment Sales in Iranian Law and CISG</strong><br />
              <em>Studies of Future Studies and Policy Making, 2021</em><br />
              Examination of contract termination clauses under Iranian law and the CISG.
            </p>
          </li>

          <li>
            <p>
              <strong>Causes of Dissolution of Economic Groups with Common Interests</strong><br />
              <em>3rd National Conference on Humanities and Development, 2022</em><br />
              Socio-economic reasons behind the failure of interest-aligned groups.
            </p>
          </li>

          <li>
            <p>
              <strong>Exceptions to the Principle of National Treatment in WTO</strong><br />
              <em>3rd National Conference on Humanities and Development, 2022</em><br />
              Case-based analysis of WTO exceptions for emerging economies.
            </p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
          External Publication Links
        </h2>
        <div className="mt-2 space-y-2">
          <a
            href="https://www.citizen.org/article/wto-general-exceptions-trade-laws-faulty-ivory-tower/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cccccc] hover:underline block"
          >
            WTO General Exceptions – Public Citizen
          </a>
          <a
            href="https://www.researchgate.net/publication/369506328_Economic_Evaluation_of_Fiscal_Regime_of_Buy-Back_Contracts_in_Comparison_with_Production_Sharing_Contracts_Case_Study_Azadegan_Oil_Field"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cccccc] hover:underline block"
          >
            Buy-Back vs PSC: Azadegan Oil Field
          </a>
          <a
            href="https://jjfil.ut.ac.ir/article_81072.html?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cccccc] hover:underline block"
          >
            Iranian Contract Termination Study – UT Journal
          </a>
          <a
            href="https://www.researchgate.net/publication/340925313_The_Effect_of_Submitting_Sales_in_Irans_Law_and_International_Sale_Convention"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cccccc] hover:underline block"
          >
            CISG and Iranian Sales Contracts
          </a>
          <a
            href="https://doaj.org/article/f1404730dcc24863b557ed4fd0e9c306"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cccccc] hover:underline block"
          >
            Political Science & Law – DOAJ
          </a>
          <a
            href="https://ccsenet.org/journal/index.php/jpl/article/download/61079/32726"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cccccc] hover:underline block"
          >
            Journal of Politics & Law – PDF
          </a>
        </div>

    </div>
    </div>
    </section>
  );
}
