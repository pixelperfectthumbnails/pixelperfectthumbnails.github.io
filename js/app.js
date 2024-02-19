const parralax_el = document.querySelectorAll('.parralax');


let xValue = 0,
    yValue = 0;


window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    if (yValue < -133) yValue = -133;
    if (yValue > 110) yValue = 110;
    console.log(xValue, yValue);

    parralax_el.forEach((el) => {
        let speedx = el.dataset.speedx*0;
        let speedy = el.dataset.speedy;


        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        let zValue = e.clientX - parseFloat(getComputedStyle(el).left) * isInLeft * 0.1;
    
        el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue*0}px)`;
});
});