import React, { useEffect } from 'react'

export default function Linesbackground(hi) {
  useEffect(() => {
    function rain() {
        let nooflines = 2;      // number of lines
        let linesbackground = document.querySelector('.linesbackground');
        let k = 0;
        const myarr = [10, 20, 30, 40, 48, 55];
        while(k < nooflines){
            let drop = document.createElement('span');
            drop.setAttribute('class', 'line');

            // let sizeofline = Math.random() * 5;     //width of line
            // let positonx = Math.floor(Math.random() * window.innerWidth);       //position from left
            // let positiony = Math.floor(Math.random() * window.innerHeight/2);
            let positiony = myarr[Math.floor(Math.random() * 6)];

    
            let delayofline = Math.random() * -30 ;          //delay of animation
            // let durationofline = 10 + Math.random() * 10;      // duration of animation // increase it to increase the speed
            let durationofline = 20 ;
    
            // drop.style.width = 0.2 + sizeofline + 'px';
            // drop.style.left = positonx + 'px';
            drop.style.left = 0 + 'px';
            drop.style.top = positiony + 'vh';
            drop.style.animationDelay = delayofline + 's';
            drop.style.animationDuration = 1 + durationofline + 's';
    
            linesbackground.append(drop);
            k++;
        }
    }
    
    rain();
    
    
  }, [hi])
  
}
