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
    '#orange-cortada',
    {
        top: '160%', //move o elemento com ID 'orange-cut' para 160% do topo
        left: '23%', //move o elemento para 23% da esquerda
    },
    'orange'
); //sincronizando com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width:'15%', //reduz a largura do elemento com id 'orange' para 15%
        top:'160%', //move o elemento para 160% do topo
        right:'10%', //move o elemento para 10% da direita
    },
    'orange'
); //sincronizando com a animação nomeada 'orange'
tl.to(
    '#folha',
    {
       top:'110%', //move o elemento com id 'leaf' para 110% do topo
       rotate:'530deg', //rotaciona o elemento em 530 graus
       left:'70%', //move o elemento para 70% da esquerda
    },
    'orange'
); //sincronizando com a animação nomeada 'orange'
tl.to(
    '#folha2',
    {
       top:'110%', //move o elemento com id 'leaf' para 110% do topo
       rotate:'530deg', //rotaciona o elemento em 530 graus
       left:'0%', //move o elemento para 0% da esquerda
    },
    'orange'
); //sincronizando com a animação nomeada 'orange'


//criando segunda timeline


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start:'0% 95%',
        end:'20% 50%', // fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

//definindo a animação dos elementos com a timeline 'tl2'
tl2.from(
    '.lemon1',
    {
        rotate:'-90deg', //iniciando o elemento com classe 'lemon1' rotacionando
        left:'-100%', //inicia o elemento fora da tela, á esquerda (-100%)
        top:'110%', //inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
); //nomeando esse trecho de animação como 'ca' para sincronização
tl2.from(
    '#coca',
    {
        rotate:'-90deg', //iniciando o elemento com id 'coca' rotacionando
        left:'-100%', //inicia o elemento fora da tela, á esquerda (-100%)
        top:'110%', //inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
); //nomeando esse trecho de animação como 'ca' para sincronização
tl2.from(
    '.lemon2',
    {
        rotate:'-90deg', //iniciando o elemento com classe 'lemon2' rotacionando
        left:'100%', //inicia o elemento fora da tela, á esquerda (-100%)
        top:'110%', //inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
); //nomeando esse trecho de animação como 'ca' para sincronização
tl2.from(
    '.#pepsi',
    {
        rotate:'-90deg', //iniciando o elemento com id 'pepsi' rotacionando
        left:'100%', //inicia o elemento fora da tela, á esquerda (-100%)
        top:'110%', //inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
); //nomeando esse trecho de animação como 'ca' para sincronização
tl2.to(
    '#orange-cortada',
    {
       width:'18%', //aumenta a alargura do elemento com id 'orange-cortada' para 18%
       left:'42%', //move o elemento para 42% da esquerda
       top:'204%', //move o elemento para 204% do topo
    },
    'ca'
); //sincronizando com a animação nomeada 'ca'
tl2.to(
    '#fanta',
    {
       width:'35%', //aumenta a alargura do elemento com id 'orange-cortada' para 35%
       left:'33%', //move o elemento para 42% da esquerda
       top:'210%', //move o elemento para 204% do topo
    },
    'ca'
); //sincronizando com a animação nomeada 'ca'