import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";
import { Inner, BTN } from "./common"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const MainVisual = ({ DEFAULT_CONTENTS }) => {
    const option = {
        arrows: false,
        afterChange: idx => setsNum(idx)
    }

    const s = useRef(null);
    const [sNum, setsNum] = useState();

    useEffect(() => {
        setsNum(0)
        // window.addEventListener('click', fn)
    }, [])

    return (
        <>
            <MainSlide
                {...option}
                ref={s}
                className={`MainSlide`}>
                {
                    DEFAULT_CONTENTS.map((slideItm, slideIdx) => {
                        return (
                            <div key="slideIdx" className={`itm itm0${slideIdx + 1} ${slideIdx === sNum ? 'on' : ''}`}>
                                <Inner className="inner">
                                    <h2>{slideItm.title}</h2>
                                    <p>{slideItm.description}</p>
                                    <BTN color={slideItm.color}><Link to='/'>more</Link></BTN>
                                </Inner>
                            </div>
                        )
                    })
                }
            </MainSlide>
            <div className="tab">
                {DEFAULT_CONTENTS[sNum]?.title}
            </div>
            <div className="arrows">
                {console.log(s.current)}
                <button onClick={() => s.current.slickPrev()}>뒤로가기</button>
                <button onClick={() => s.current.slickNext()}>앞으로가기</button>
            </div>
            <div className="num">
                현재 슬라이드 번호 : {sNum + 1}<br />
                전체슬라이드갯수 : {DEFAULT_CONTENTS.length}
            </div>
            <ul>
                {
                    DEFAULT_CONTENTS.map((_, slideIdx) => {
                        return (
                            <li ><button onClick={() => s.current.slickGoTo(slideIdx)}>{slideIdx + 1}</button></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default MainVisual;