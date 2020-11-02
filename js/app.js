document.querySelectorAll('.navbar .nav-link').forEach(enlace =>{
  enlace.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector(enlace.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// color del menu
window.onscroll = (e) => {
  const scroll = window.scrollY;

  const header = document.querySelector('#navegacion-principal');
  if(scroll > 300){
    header.classList.add('bg-success');
  } else {
    header.classList.remove('bg-success');
  }
}



// conutdown
$(document).ready(function(){
  $('#fecha').countdown('2020/12/23', function(evento){
    $(this).html(evento.strftime('<span>%D</span> Dia <span>%H</span> Horas <span>%M</span> Minutos <span>%S</span> segundos'));
  })
});