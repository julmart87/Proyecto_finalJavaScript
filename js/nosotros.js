const aboutUs = document.getElementById('aboutContainer');

aboutUs.innerHTML = `
    <div class="about-h1">
        <h1>Exclusive Sport</h1>
    </div>
    <div class="about1">
        <h2><strong>Descubre Exclusive Sport:</strong> donde tus sueños se hacen realidad</h2>
    <p><strong>Desde su humilde inicio en Mar del Plata en 2005 como una empresa familiar, Exclusive Sport se ha dedicado incansablemente a innovar 
    y ofrecer lo mejor a sus clientes.</strong> Lo que comenzó como un sueño ahora se ha convertido en una marca sólida y prestigiosa, reconocida 
    tanto local como internacionalmente por su compromiso con la calidad y la innovación.
    En Exclusive Sport, no solo creamos productos, sino que también creamos experiencias que inspiran y empoderan a nuestros clientes a alcanzar 
    sus metas y sueños deportivos.</p>
    </div>
    <div class="about2">
        <h2><strong>Innovación:</strong> nuestra regla de oro y legado</h2>
    <p><strong>Desde nuestros inicios, la innovación ha sido el corazón de Exclusive Sport. Nos enorgullece liderar el camino en diseño, 
    tecnología y sostenibilidad en la industria deportiva.</strong> Cada producto que desarrollamos es resultado de un proceso meticuloso que combina tradición 
    artesanal con las últimas tendencias y avances tecnológicos.</p>
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
aboutH1.style.paddingTop = '6rem';
aboutH1.style.paddingBottom = '2rem';
aboutH1.style.textAlign = 'center';


aboutH2.forEach(h2 => {
    h2.style.color = '#003352';
    h2.style.textAlign = 'center';
});


aboutP.forEach(p => {
    p.style.paddingTop = '2rem';
    p.style.fontFamily = 'play';
    p.style.textAlign = 'center';
    p.style.fontSize = '1.2rem';
});


// about1Div
about1Div.style.backgroundColor = '#d5d8cd';
about1Div.style.border = 'none';
about1Div.style.padding = '2rem';
about1Div.style.borderRadius = '10px';
about1Div.style.marginBottom = '2rem';

// about2Div
about2Div.style.backgroundColor = '#d5d8cd';
about2Div.style.padding = '2rem';
about2Div.style.borderRadius = '10px';














