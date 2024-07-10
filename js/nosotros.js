const aboutUs = document.getElementById('aboutContainer');


aboutUs.innerHTML = `
    <div class="about-h1">
        <h1>Exclusive Sport</h1>
    </div>
    <div class="about1">
        <h2>Te damos la bienvenida a Exclusive Sport el lugar donde se cumplen tus sueños!</h2>
        <p>Esta empresa familiar nacio en Mar Del Plata en el año 2005, y luego de varios años innovando y dando lo mejor para sus clientes.
        Se convirtio en una marca solida y prestigiosa .. Dejando su impronta mas alla de las fronteras.. </p>
    </div>
    <div class="about2">
        <h2>La innovacion como regla y legado</h2>
        <p>Esta empresa familiar nacio en Mar Del Plata en el año 2005, y luego de varios años innovando y dando lo mejor para sus clientes.
        Se convirtio en una marca solida y prestigiosa .. Dejando su impronta mas alla de las fronteras.. </p> 
    </div>
`;

aboutUs.style.fontFamily = 'play';
aboutUs.style.margin = '0 10rem 0 10rem';
aboutUs.style.paddingTop = '5rem';

const aboutH1 = aboutUs.querySelector('.about-h1');
const about1Div = aboutUs.querySelector('.about1');
const about2Div = aboutUs.querySelector('.about2');
const aboutH2 = aboutUs.querySelectorAll('h2');
const aboutP = aboutUs.querySelectorAll('p');

aboutH1.style.fontSize = '1.4rem';
aboutH1.style.color = '#003352';
aboutH1.style.marginBottom = '0.5rem';

// Cambiar el color de todos los elementos h2 dentro de aboutUs
aboutH2.forEach(h2 => {
    h2.style.color = '#003352';
});

// Cambiar la fuente de todos los elementos p dentro de aboutUs
aboutP.forEach(p => {
    p.style.fontFamily = 'Arial'; // Aquí debe ser 'Arial' en lugar de 'arial'
});


// Aplicar estilos a about1Div
about1Div.style.backgroundColor = 'rgba(224, 224, 224, 0.5)';
about1Div.style.border = 'none';
about1Div.style.padding = '2rem';


// Aplicar estilos a about2Div
about2Div.style.backgroundColor = '#e0e0e0';
about2Div.style.padding = '2rem';
about2Div.style.border = '1px solid #ccc';




