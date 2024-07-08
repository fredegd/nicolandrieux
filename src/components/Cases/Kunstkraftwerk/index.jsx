import React from "react";

function Kunstkraftwerk({ data }) {
  return (
    <ul className="    p-0 m-0 bg-black">
      <li
        id="gallery-item-1"
        className="w-[100vw] h-[71vw] flex flex-col items-center bg-cover bg-center bg-black bg-no-repeat sticky -top-80"
        style={
          {
            // backgroundImage: `url(${gallery[0].caseImg})`,
          }
        }
      >
        <iframe
          id="vimeo-video"
          src="https://player.vimeo.com/video/869508192?h=d7442cbbca&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1"
          autoPlay={true}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          className="w-full h-full"
        ></iframe>
      </li>
    </ul>
  );
}

export default Kunstkraftwerk;
