function calculateTriangleArea(){
    const triangleBseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log( base)

    // triangle height //
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height)

    // calculate triangle area //
    const area = 0.5 * base * height
    console.log('the triangle area is', area);

    // display triangle area //
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}