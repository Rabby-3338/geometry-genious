function calculateParallelogramArea(){
    // parallelogram base //
    const pBase = document.getElementById('parallelogram-base');
    const pBaseText = pBase.value;
    const base = parseFloat(pBaseText);
    console.log(base);

    // parallelogram height //
    const pHeight = document.getElementById('parallelogram-height');
    const pHeightText = pHeight.value;
    const height = parseFloat(pHeightText);
    console.log(height)

    // parallelogram area //
    const area = base * height;
    console.log('the parallelogram area is', area);

    // display the area //
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
     parallelogramAreaSpan.innerText = area;
     
 }