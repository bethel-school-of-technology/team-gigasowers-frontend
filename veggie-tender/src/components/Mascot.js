import React from 'react'
import styled from 'styled-components';

const MascotStyles = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    display: flexl;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #abcde4;
    
}

.face{
    position:relative;
    width:300px;
    height:300px;
    border-radius: 50%;
    background-color: #ffcd00;
    display: flex;
    justify-content:center;
    align-items: center;
}
.face::before{
    content: "";
    position: absolute;
    top: 180px;
    width: 150px;
    height: 70px;
    background: #b57700;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius:70px;
    transition: 0.5s;   
}
.face:hover::before{
    top:210px;
    width: 150px;
    height: 20px;
    background: #b57700;

}

.eyes{
    position: relative;
    top: -40px;
    display: flex;
}

.eyes .eye{
    position: relative;
    width: 80px;
    height: 80px;
    display: block;
    background: #fff;
    margin: 0 15px;
    border-radius: 50%;
}

.eyes .eye::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: #333;
    border-radius: 50%;
}

`;

export default function Mascot() {

    document.querySelector("body").addEventListener("mousemove", eyeball);
    function eyeball() {
        var eye = document.querySelectorAll(".eye");
        eye.forEach(function (eye) {
            // x & y are variables and x represents the x coordinate of the mouse and y represents the coordinate of the mouse.
            let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
            let radian = Math.atan2(eye.pageX - x, eye.pageY - y);
            //   rot is a variable (short for rotate)
            let rot = radian * (180 / Math.PI) * -1 + 270;
            eye.style.transform = "rotate(" + rot + "deg)";
        });
    }


    return (
        <MascotStyles>
        <div class="face">
            <div class="eyes">
                <div class="eye">.</div>
                <div class="eye">.</div>
            </div>
        </div>
        </MascotStyles>
    )
}
