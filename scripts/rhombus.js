function calculateRhombusArea(){
    // rhombus d1 //
    const rd1 = document.getElementById('rhombusD1');
    const d1Text = rd1.value;
    const d1 = parseFloat(d1Text);
    console.log(d1);

    // rhombus d2 //
    const rd2 = document.getElementById('rhombusD2');
    const d2Text = rd2.value;
    const d2 = parseFloat(d2Text);
    console.log(d2);

    // calculate area //

    const area = 0.5 * d1 * d2;
    console.log(area);

    // display result //
    const rhombusSpanArea = document.getElementById('rhombus-area');
    rhombusSpanArea.innerText = area;
}