import React from 'react'
import Image from 'next/image';
import StyledWrapper from './StyledWrapper';

const PhotoCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <Image 
                src="/assets/foto1.jpeg" 
                alt='foto1' 
                width={600} 
                height={600} 
                className='flex p-8 items-center justify-center' 
              />
              <strong>Hover Me</strong>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle">
              </div>
              <div className="circle" id="right">
              </div>
              <div className="circle" id="bottom">
              </div>
            </div>
            <div className="front-content">
              <small className="badge">Pasta</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>Spaguetti Bolognese</strong>
                  </p>
                </div>
                <p className="card-footer">
                  30 Mins &nbsp; | &nbsp; 1 Serving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default PhotoCard
