const BTN_COOKIE = document.querySelector('#open-cookie');
const CARD1 = document.querySelector('.card1');
const CARD2 = document.querySelector('.card2');
const BTN_OPEN_COOKIE_AGAIN = document.querySelector('#open-cookie-again')
const P_PHRASE = document.querySelector('#phrase')
const PHRASES = ['A vida trará coisas boas se tiver paciência.', 
'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 
'Não compense na ira o que lhe falta na razão.',
'Defeitos e virtudes são apenas dois lados da mesma moeda.',
'Não há que ser forte. Há que ser flexível.',
'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé, motivação e criatividade.',
'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',
'Acreditar que você pode já é meio caminho andado.']

BTN_COOKIE.addEventListener('click', toggleCards)
BTN_COOKIE.addEventListener('click', generateNewPhrase)
BTN_OPEN_COOKIE_AGAIN.addEventListener('click', toggleCards)

function toggleCards() {
    CARD1.classList.toggle("hide")  
    CARD2.classList.toggle("hide")
}

function generateNewPhrase() {
    const RANDOM_NUMBER = Math.round(Math.random() * 10)
    P_PHRASE.innerHTML = PHRASES[RANDOM_NUMBER]
} 