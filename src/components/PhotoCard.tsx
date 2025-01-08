import React from 'react';
import Image from 'next/image';
import StyledWrapper from './StyledWrapper';
import { IoMdPlayCircle } from "react-icons/io";
import { MdSkipNext } from 'react-icons/md';
import { CgPlayTrackPrev } from 'react-icons/cg';

const CardContent = ({ imageSrc, altText, title, description }) => (
  <StyledWrapper>
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <Image
              src={imageSrc}
              alt={altText}
              width={600}
              height={400}
              className="flex object-cover p-8 items-center w-full h-5/6 justify-center"
            />
            <strong className="flex gap-8">
              <CgPlayTrackPrev size={42} />
              <IoMdPlayCircle size={42} />
              <MdSkipNext size={42} />
            </strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">{title}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{title}</strong>
                </p>
              </div>
              <p className="card-footer">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

const PhotoCard = () => {
  const cardsData = [
    {
      imageSrc: "/assets/foto1.jpeg",
      altText: "foto1",
      title: "Dia no shopping",
      description: "30 Mins &nbsp; | &nbsp; 1 Serving",
    },
    {
      imageSrc: "/assets/foto2.jpg",
      altText: "foto2",
      title: "Dia no shopping",
      description: "30 Mins &nbsp; | &nbsp; 1 Serving",
    },
    // Adicione mais dados aqui, se necessário.
  ];

  return (
    <div className="flex">
      {cardsData.map((card, index) => (
        <CardContent
          key={index}
          imageSrc={card.imageSrc}
          altText={card.altText}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default PhotoCard;
