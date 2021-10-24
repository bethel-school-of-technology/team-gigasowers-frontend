import React from 'react'
import styled from 'styled-components';

const MascotStyles = styled.div`
.body {
    background: clear;
    margin: 0;
    padding: 0;
  }
  
  .hit-area {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;
  }
  
  .hitbox {
    width: 100px;
    height: 100px;
    float:left;
  }
  
  .eye {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    left: 25%;
    top: 40%;
    background-color: white;
    pointer-events: none;
  }
  
  .eye + .eye {
    left: 55%;
  }
  
  .pupil {
    position: relative;
    width: 10px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    transition: all .5s ease;
  }
  
  .eyelid {
    width: 75px;
    height: 50px;
    background-color: black;
    position: absolute;
    left: 20%;
    top: 25%;
    pointer-events: none;
    -webkit-animation-name: blink;
    -webkit-animation-duration: 4.5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -webkit-animation-direction: alternate;
    -webkit-animation-delay: 1s;
    -webkit-transition: all .5s ease;
  }
  
  .eyelid + .eyelid {
    left: 50%;
  }
  
  @-webkit-keyframes blink {
    0% {
      top: 25%;
    }
    95% {
      top: 25%;
    }
    100% {
      top: 40%;
    }
  }
  
  .hitbox:hover ~ .eyelid {
    -webkit-transform: rotate(-10deg);
  }
  
  .hitbox:hover ~ .eyelid:nth-of-type(2n+1) {
    -webkit-transform: rotate(10deg);
  }
  
  #c-3:hover ~ .eyelid {
    -webkit-transform:  rotate(15deg);
  }
  
  #c-3:hover ~ .eyelid:nth-of-type(2n+1) {
    -webkit-transform: rotate(-15deg);
  }
  
  #c-3:hover ~ .eye .pupil {
    background-color: red;
  }
  
  #a-1:hover ~ .eye > .pupil {
    -webkit-transform: rotate(60deg) translate(-30px);
  }
  
  #a-2:hover ~ .eye > .pupil {
    -webkit-transform: rotate(80deg) translate(-30px);
  }
  
  #a-3:hover ~ .eye > .pupil {
    -webkit-transform: rotate(90deg) translate(-30px);
  }
  
  #a-4:hover ~.eye > .pupil {
    -webkit-transform: rotate(100deg) translate(-30px);
  }
  
  #a-5:hover ~ .eye > .pupil {
    -webkit-transform: rotate(120deg) translate(-30px);
  }
  
  #b-1:hover ~ .eye > .pupil {
    -webkit-transform: rotate(50deg) translate(-25px);
  }
  
  #b-2:hover ~ .eye > .pupil {
    -webkit-transform: rotate(70deg) translate(-25px);
  }
  
  #b-3:hover ~ .eye > .pupil {
    -webkit-transform: rotate(90deg) translate(-25px);
  }
  
  #b-4:hover ~.eye > .pupil {
    -webkit-transform: rotate(110deg) translate(-25px);
  }
  
  #b-5:hover ~ .eye > .pupil {
    -webkit-transform: rotate(130deg) translate(-25px);
  }
  
  #c-1:hover ~ .eye > .pupil {
    -webkit-transform: rotate(0deg) translate(-25px);
  }
  
  #c-2:hover ~ .eye > .pupil {
    -webkit-transform: rotate(0deg) translate(-10px);
  }
  
  #c-3:hover ~ .eye > .pupil {
    -webkit-transform: rotate(0deg) translate(20px);
  }
  
  #c-3:hover ~ .eye:nth-of-type(2n+1) > .pupil {
    -webkit-transform: rotate(0deg) translate(-20px);
  }
  
  #c-4:hover ~.eye > .pupil {
    -webkit-transform: rotate(0deg) translate(10px);
  }
  
  #c-5:hover ~ .eye > .pupil {
    -webkit-transform: rotate(0deg) translate(25px);
  }
  
  #d-1:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-50deg) translate(-25px);
  }
  
  #d-2:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-70deg) translate(-25px);
  }
  
  #d-3:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-90deg) translate(-25px);
  }
  
  #d-4:hover ~.eye > .pupil {
    -webkit-transform: rotate(-110deg) translate(-25px);
  }
  
  #d-5:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-130deg) translate(-25px);
  }
  
  #e-1:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-40deg) translate(-30px);
  }
  
  #e-2:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-60deg) translate(-30px);
  }
  
  #e-3:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-80deg) translate(-30px);
  }
  
  #e-4:hover ~.eye > .pupil {
    -webkit-transform: rotate(-100deg) translate(-30px);
  }
  
  #e-5:hover ~ .eye > .pupil {
    -webkit-transform: rotate(-120deg) translate(-30px);
  }
`;



export default function Mascot() {
    


    return (
        <MascotStyles>
            <div class="body">
            <div class="hit-area">
            <div class="hitbox" id="a-1"></div>
            <div class="hitbox" id="a-2"></div>
            <div class="hitbox" id="a-3"></div>
            <div class="hitbox" id="a-4"></div>
            <div class="hitbox" id="a-5"></div>
            <div class="hitbox" id="b-1"></div>
            <div class="hitbox" id="b-2"></div>
            <div class="hitbox" id="b-3"></div>
            <div class="hitbox" id="b-4"></div>
            <div class="hitbox" id="b-5"></div>
            <div class="hitbox" id="c-1"></div>
            <div class="hitbox" id="c-2"></div>
            <div class="hitbox" id="c-3"></div>
            <div class="hitbox" id="c-4"></div>
            <div class="hitbox" id="c-5"></div>
            <div class="hitbox" id="d-1"></div>
            <div class="hitbox" id="d-2"></div>
            <div class="hitbox" id="d-3"></div>
            <div class="hitbox" id="d-4"></div>
            <div class="hitbox" id="d-5"></div>
            <div class="hitbox" id="e-1"></div>
            <div class="hitbox" id="e-2"></div>
            <div class="hitbox" id="e-3"></div>
            <div class="hitbox" id="e-4"></div>
            <div class="hitbox" id="e-5"></div>
            <div class="eye">
            <div class="pupil"></div>
                </div>
                <div class="eye">
                    <div class="pupil"></div>
                </div>
                <div class="eyelid"></div>
                <div class="eyelid"></div>
                </div>
            </div>
        </MascotStyles>
    )
}


// var element = document.getElementById("leela-eye");
//     document.addEventListener("mousemove", function (event) {
//         var x = event.pageX;
//         var y = event.pageY;   
//         var offsets = eye.lens.getBoundingClientRect();
//         var left = (offsets.left - x)
//         var top = (offsets.top - y)
//         var rad = Math.atan2(top, left);
//         element.style.webkitTransform = "rotate(" + rad + "rad)";
//     });





// document.querySelector("body").addEventListener("mousemove", eyeball);
// function eyeball() {
//     var event;
//     var eye = document.querySelectorAll(".eye");
//     eye.forEach(function(eye) {
//       // x & y are variables and x represents the x coordinate of the mouse and y represents the coordinate of the mouse.
//       let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
//       let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
//       let radian = Math.atan2(event.pageX - x, event.pageY - y);
//       //   rot is a variable (short for rotate)
//       let rot = radian * (180 / Math.PI) * -1 + 270;
//       eye.style.transform = "rotate(" + rot + "deg)";
//     });
//   }


{/* <div class="hat">
<div class="face">
<div class="eyes">
    <div class="eye">.</div>
    <div class="eye">.</div>
</div>
</div>
</div> */}


{/* <div className="container">
<div className="face">
    <div className="eyes">
        <div className="eye">.</div>
        <div className="eye">.</div>
    </div>
</div>
</div> */}


    //  $("face").mousemove(function(event) {
    //     var eye = $("eye");
    //     var x = (eye.offset().left) + (eye.width()/2);
    //     var y = (eye.offset().top) + (eye.height()/2);
    //     var rad = Math.atan2(event.pageX - x, event.pageY - y);
    //     var rot = (rad * (180 / Math.PI) * -1) + 180;
    //     eye.css({
    //         '-webkit-transform': 'rotate(' + rot + 'deg)',
    //         '-moz-transform': 'rotate(' + rot + 'deg)',
    //         '-ms-transform': 'rotate(' + rot + 'deg)',
    //         'transform': 'rotate(' + rot + 'deg)',
    //     });
    // });


    // function eyeball() {
    //     var eye = document.querySelectorAll('eye');
    //     eye.forEach(function (eye) {
    //         // x & y are variables and x represents the x coordinate of the mouse and y represents the coordinate of the mouse.
    //         let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    //         let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    //         let radian = Math.atan2(eye.pageX - x, eye.pageY - y);
    //         //   rot is a variable (short for rotate)
    //         let rot = radian * (180 / Math.PI) * -1 + 270;
    //         eye.style.transform = "rotate(" + rot + "deg)";
    //     });
    // }

    // *{
    //     margin: 0;
    //     padding: 0;
    //     box-sizing: border-box;
    // }
    // body{
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     min-height: 100vh;
    //     background: #abcde4;
        
    // }
    // .container{
    //     display: flex;
    //     flex-wrap: wrap;
    //     float: right;
    //     position:absolute;
    //     margin-top: 22rem;
    //     margin-right: 1rem;
    // }
    
    // .face{
    //     position:relative;
    //     float: right;
    //     width:300px;
    //     height:300px;
    //     border-radius: 50%;
    //     background-color: #ffcd00;
    //     display: flex;
    //     justify-content:center;
    //     align-items: center;
    
    // }
    // .face::before{
    //     content: "";
    //     position: absolute;
    //     top: 180px;
    //     width: 150px;
    //     height: 70px;
    //     background: #b57700;
    //     border-bottom-left-radius: 70px;
    //     border-bottom-right-radius:70px;
    //     transition: 0.5s;   
    // }
    // .face:hover::before{
    //     top:210px;
    //     width: 150px;
    //     height: 20px;
    //     background: #b57700;
    
    // }
    
    // .eyes{
    //     position: relative;
    //     top: -40px;
    //     display: flex;
    // }
    
    // .eyes .eye{
    //     position: relative;
    //     width: 80px;
    //     height: 80px;
    //     display: inline-block;
    //     background: #fff;
    //     margin: 0 15px;
    //     border-radius: 50%;
    // }
    
    // .eyes .eye::before {
    //     content: "";
    //     position: absolute;
    //     top: 50%;
    //     left: 25px;
    //     transform: translate(-50%, -50%);
    //     width: 40px;
    //     height: 40px;
    //     background: #333;
    //     border-radius: 50%;
    // }