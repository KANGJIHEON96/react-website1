import React from 'react'
import CardItem from './CartItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>희귀 명소들을 확인해보세요!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                 <ul className="cards__items">
                 <CardItem 
                 src="images/img-9.jpg"
                 text="깊은 정글 속, 숨겨진 폭포를 탐험해보세요"
                 label="모험"
                 path="/services"
                 />
                 <CardItem 
                 src="images/img-2.jpg"
                 text="발리에서의 은밀한 크루즈여행"
                 label="호화"
                 path="/services"
                 />
                 </ul>
                 <ul className="cards__items">
                 <CardItem 
                 src="images/img-3.jpg"
                 text="대서양에서 대항해시대의 닻을 올리세요"
                 label="미스터리"
                 path="/services"
                 />
                 <CardItem 
                 src="images/img-4.jpg"
                 text="히말라야 산맥 정상에서 즐기는 축구"
                 label="모험"
                 path="/products"
                 />
                 <CardItem 
                 src="images/img-8.jpg"
                 text="사하라 사막 횡단(feat. 낙타 가이드)"
                 label="아드레날린"
                 path="/sign-up"
                 />
                 </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
