import { BsFillCloudFill } from "react-icons/bs";
import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";

const ToTopWrapper = styled.div`
position: fixed;
bottom: 100px;
right: 100px;
font-size: 40px;
color: tomato;
opacity: 0;
visibility: hidden;
transition: .5s;
&.on {
    opacity: 1;
    visibility: visible;
}
`

const ToTop = () => {

    const [scr, setScr] = useState(0);

    useEffect(() => {
        //서버 또는 window에서 데이터 가져올 때 여기다가 쓰셈
        gsap.registerPlugin(ScrollToPlugin);
    }, [])

    const scrollHandler = () => {
        let sct = window.scrollY;
        setScr(sct);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.addEventListener('scroll', scrollHandler);
        }
    }, [])

    const ToTopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }

    return (
        <ToTopWrapper onClick={ToTopHandler} className={scr > 400 ? 'on' : ''}>
            <BsFillCloudFill />
        </ToTopWrapper>
    )

}

export default ToTop