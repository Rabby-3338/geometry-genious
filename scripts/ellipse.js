function calculateEllipseArea(){
    // ellipse a //
    const ellipseA = document.getElementById('ellipse-A');
    const ellipaseText = ellipseA.value;
    const a = parseFloat(ellipaseText);
    console.log(a)

    // ellipse b //

    const ellipseB = document.getElementById('ellipase-B');
    const ellipase = ellipseB.value;
    const b = parseFloat(ellipase);
    console.log(b) 

    // area calculation //
    const area = 22/7 * a * b;
    console.log('the ellipse area is', area);

    // display area //
    const ellipseAreaSpan = document.getElementById('ellipse-area')
    ellipseAreaSpan.innerText = area;
    

}