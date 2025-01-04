import React from 'react'
import Image from 'next/image';
import StyledWrapper from './StyledWrapper';
import { IoMdPlayCircle } from "react-icons/io";
import { MdSkipNext } from 'react-icons/md';
import { CgPlayTrackPrev } from 'react-icons/cg';

const PhotoCard = () => {
  return (
    <div className='flex'>
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
              <strong className='flex gap-8'>
                <CgPlayTrackPrev size={42} />
                <IoMdPlayCircle size={42} />
                <MdSkipNext size={42} />
              </strong>
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
              <small className="badge">Dia no shoping</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>
                      dia no shoping
                    </strong>
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

    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <Image 
                src="/assets/foto2.jpg" 
                alt='foto1' 
                width={600} 
                height={400} 
                className='flex object-cover p-8 items-center w-full h-5/6 justify-center' 
              />
              <strong className='flex gap-8'>
                <CgPlayTrackPrev size={42} />
                <IoMdPlayCircle size={42} />
                <MdSkipNext size={42} />
              </strong>
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
              <small className="badge">Dia no shoping</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>
                      dia no shoping
                    </strong>
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
    </div>
  );
}

export default PhotoCard
