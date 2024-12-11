function calculatePentagonArea(){

    // pentagon p //
    const pentagonP = document.getElementById('p-pase');
    const pentagonPtext = pentagonP.value;
    const p = parseFloat(pentagonPtext);
    console.log(p)

    // pentagon base //
    const pentagonBase = document.getElementById('p-base');
    const pentagonBaseText = pentagonBase.value;
    const base = parseFloat(pentagonBaseText);
    console.log (base)

    // area calculation //
     
    const area = 0.5 * p * base;
    console.log('the pentagon area is', area);

    // display area //

    const pentagonAreaSapan = document.getElementById('pentagon-area');
    pentagonAreaSapan.innerText =  area;

}