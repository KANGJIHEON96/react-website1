import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4'
            autoPlay loop muted />
            <h1>탐험을 떠나보세요</h1>
            <p>망설이지 말고 지금 당장 떠나보세요!
            </p>
            <div className='hero-btns'>
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    시작하기
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>트레일러 보기 <i className='far
                fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection;
