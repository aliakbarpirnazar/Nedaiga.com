import "../styles/globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata = {
  title: "NEDA Group | Energy Law & Strategy Experts",
  description: "NEDA Group offers legal, strategic, and educational services for the energy, oil, and gas industries with a focus on upstream contracts and policy.",
  keywords: [
    "NEDA Group",
    "energy law",
    "oil and gas contracts",
    "upstream projects",
    "Iran Petroleum Contract",
    "energy strategy",
    "legal advisory",
    "training academy"
  ],
  authors: [{ name: "NEDA Group", url: "https://nedaiga.com" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "NEDA Group | Energy Law & Strategy Experts",
    description:
      "Trusted legal and strategic advisory for upstream oil and gas. Discover NEDA Group’s global impact.",
    url: "https://nedaiga.com",
    siteName: "NEDA Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nedaiga.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "NEDA Group - Energy Law & Strategy",
      },
    ],
  },

  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
      <title>NEDA Group | Energy Law & Strategy Experts</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <link rel="canonical" href="https://nedaiga.com" />
    <link rel="icon" href="/Neda2.webp" />

    <meta name="description" content="NEDA Group offers legal, strategic, and educational services for the energy, oil, and gas industries with a focus on upstream contracts and policy." />
  <meta name="keywords" content="NEDA Group, energy law, oil and gas contracts, upstream projects, Iran Petroleum Contract, energy strategy, legal advisory, training academy" />
  <meta name="author" content="NEDA Group" />

   <meta property="og:title" content="NEDA Group | Energy Law & Strategy Experts" />
  <meta property="og:description" content="Trusted legal and strategic advisory for upstream oil and gas. Discover NEDA Group’s global impact." />
  <meta property="og:url" content="https://nedaiga.com" />
  <meta property="og:site_name" content="NEDA Group" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://nedaiga.com/logo.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="NEDA Group - Energy Law & Strategy" />

    <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NEDA Group",
  "url": "https://nedaiga.com",
  "logo": "https://nedaiga.com/logo.webp",
  "sameAs": [
    "https://www.linkedin.com/in/aye-katebi/",
    "https://wa.me/+989126503974"
  ],
  "description": "Legal and strategic advisory for energy, oil, and gas industries.",
  "founder": {
    "@type": "Person",
    "name": "Dr. Aye katebei"
  }
}
`}
</script>

  </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
