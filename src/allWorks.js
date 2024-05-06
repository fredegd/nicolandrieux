let allWorks = [
  {
    metadata: {
      title: "KUNSTKRAFTWERK LEIPZIG",
      publishedAt: "2024-04-07",
      summary: "ART DIRECTION, CREATIVE CODING, MOTION DESIGN",
      image: "/images/kunstkraftwerk.png",
      slides: [
        { caseImg: "/images/kraftwerk1.png", content: "Slide 1 content" },
        { caseImg: "/images/kraftwerk2.png", content: "Slide 2 content" },
        { caseImg: "/images/kraftwerk3.png", content: "Slide 3 content" },
      ],
    },
    slug: "kunstkraftwerk",
    content:
      "## Kunstkraftwerk Leipzig\n\n- ART DIRECTION, CREATIVE CODING, MOTION DESIGN",
  },
  {
    metadata: {
      title: "Liebeskind Berlin",
      publishedAt: "2024-04-08",
      summary: "BRAND DESIGN, ART DIRECTION, SEASONAL ARTWORKS, SCREEN DESIGN",
      image: "/images/liebeskind.png",
      slides: [
        { caseImg: "/images/liebeskind1.png", content: "Slide 1 content" },
        { caseImg: "/images/liebeskind2.png", content: "Slide 2 content" },
        { caseImg: "/images/liebeskind3.png", content: "Slide 3 content" },
      ],
    },
    slug: "liebeskind",
    content:
      "## Liebeskind Berlin\n\n- BRAND DESIGN, ART DIRECTION, SEASONAL ARTWORKS, SCREEN DESIGN",
  },
  {
    metadata: {
      title: "Salted-Beauty",
      publishedAt: "2024-04-09",
      summary:
        "Brand Experience, corporate identity, UI-UX, Creative Coding, Team lead",
      image: "/images/salted.png",
      slides: [
        { caseImg: "/images/salted-01.png", content: "Slide 1 content" },
        { caseImg: "/images/salted-02.png", content: "Slide 2 content" },
        { caseImg: "/images/salted-03.png", content: "Slide 3 content" },
        { caseImg: "/images/salted-04.png", content: "Slide 1 content" },
        { caseImg: "/images/salted-05.png", content: "Slide 2 content" },
        { caseImg: "/images/salted-06.png", content: "Slide 3 content" },
        { caseImg: "/images/salted-07.png", content: "Slide 1 content" },
        { caseImg: "/images/salted-08.png", content: "Slide 2 content" },
        { caseImg: "/images/salted-09.png", content: "Slide 3 content" },
        { caseImg: "/images/salted-10.png", content: "Slide 3 content" },
      ],
    },
    slug: "salted",
    content: "",
  },
];

export { allWorks };
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Article",
//           headline: title,
//           image: [ogImage],
//           datePublished: publishedTime,
//           description,
//         }),
//       }}
//       />
//       <h1>{work.metadata.title}</h1>
//     </section>
//   );
// }
// Compare this snippet from src/pages/index.jsx:
