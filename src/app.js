const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');

if (layer1) layer1.style.transform = translateX(-100px);
if (layer2) layer2.style.transform = translateX(-100px);
if (layer3) layer3.style.transform = translateX(-100px);

document.addEventListener('mousemove', (event) => {
  const {clientX} = event; // Pozycja kursora w osi X
  const width = window.innerWidth; // Szerokość okna

  const offset1 = (clientX / width) * 20 - 100; // Paralaksa warstwy 1
  const offset2 = (clientX / width) * 40 - 100;// Paralaksa warstwy 2
  const offset3 = (clientX / width) * 60 - 100; // Paralaksa warstwy 3

  document.getElementById(
      'layer1'
  ).style.transform = translateX(${offset1}px);
  document.getElementById(
      'layer2'
  ).style.transform = translateX(${offset2}px);
  document.getElementById(
      'layer3'
  ).style.transform = translateX(${offset3}px);
});