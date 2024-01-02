setInterval(() => {
    let d = new Date();
    let h = d.getHours()*30;
    let m = d.getMinutes()*6;
    let s = d.getSeconds()*6;
    document.getElementById('hr').style.transform = `rotateZ(${h+(m/12)}deg)`;
    document.getElementById('mn').style.transform = `rotateZ(${m}deg)`;
    document.getElementById('sc').style.transform = `rotateZ(${s}deg)`; 
});