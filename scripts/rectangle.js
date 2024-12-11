function calculateRectangleArea(){
    // rectangle length //
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length)

    // rectangle base //
    const baseInput = document.getElementById('rectangle-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base)

    // rectangle area calculate//

    const area = length *base;
    console.log('the rectangle area is', area);

    // show the area of rectangle //
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText =  area;

}