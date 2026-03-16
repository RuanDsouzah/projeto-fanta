//criação de uma timeline do GSAP com animações sicronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start:'0% 95%',
        end:'70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //move o elemento com ID fanta para 120% do topo
        left: '0%', 
    },
    'orange'
); //NOMEANDO ESSE TRECHO DE ANIMAÇÃO COMO ORANGE PARA SINCRONIZAÇÃO
tl.to(
    '#laranja-cortada',
    {
        top: '160%', //move o elemento com ID 'orange-cut' para 160% do topo
        left: '23%', //move o elemento para 23% da esquerda
    },
    'orange'
); //sincronizando com a animação nomeada 'orange'