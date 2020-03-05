let plansza = [
    {
        name: 'p1_1',
        html: document.querySelector('#p1_1'),
        ownedBy: ''
    },
    {
        name: 'p1_2',
        html: document.querySelector('#p1_2'),
        ownedBy: ''
    },
    {
        name: 'p1_3',
        html: document.querySelector('#p1_3'),
        ownedBy: ''
    },
    {
        name: 'p2_1',
        html: document.querySelector('#p2_1'),
        ownedBy: ''
    },
    {
        name: 'p2_2',
        html: document.querySelector('#p2_2'),
        ownedBy: ''
    },
    {
        name: 'p2_3',
        html: document.querySelector('#p2_3'),
        ownedBy: ''
    },
    {
        name: 'p3_1',
        html: document.querySelector('#p3_1'),
        ownedBy: ''
    },
    {
        name: 'p3_2',
        html: document.querySelector('#p3_2'),
        ownedBy: ''
    },
    {
        name: 'p3_3',
        html: document.querySelector('#p3_3'),
        ownedBy: ''
    },

]
const startbtn = document.querySelector('.startbtn');
const startx = document.querySelector('.startx');
const starto = document.querySelector('.starto');
let actualplayer = '';
let gameisOver = false;
startbtn.addEventListener('click', start);
function start(){
    startbtn.style.display = 'none';
    document.querySelector('.ktozaczyna').style.display = 'block';
    startx.style.display = 'inline-block';
    starto.style.display = 'inline-block';
};
startx.addEventListener('click', function(){
    document.querySelector('.ktozaczyna').style.display = 'none';
    startx.style.display = 'none';
    starto.style.display = 'none';
    document.querySelector('.plansza').style.display = 'flex';
    actualplayer = 'x';
});
starto.addEventListener('click', function(){
    document.querySelector('.ktozaczyna').style.display = 'none';
    startx.style.display = 'none';
    starto.style.display = 'none';
    document.querySelector('.plansza').style.display = 'flex';
    actualplayer = 'o';
});
for(let i = 0; i < plansza.length; i++){
    plansza[i].html.addEventListener('click', function(){
        ruchgracza(i);
        checkwinner();
    });
};
function ruchgracza(i){
    if(plansza[i].html.style.backgroundImage === "" && !gameisOver){
        if(actualplayer === 'x'){
            plansza[i].html.style.backgroundImage = "url('x.png')";
            plansza[i].ownedBy = 'x';
            actualplayer='o';
        }else{
            plansza[i].html.style.backgroundImage = "url('o.png')";
            plansza[i].ownedBy = 'o';
            actualplayer='x';
        }
    }
};
function checkwinner(){
    if(
        (plansza[0].ownedBy !== '' && plansza[0].ownedBy === plansza[1].ownedBy && plansza[0].ownedBy === plansza[2].ownedBy) || 
        (plansza[3].ownedBy !== '' && plansza[3].ownedBy === plansza[4].ownedBy && plansza[3].ownedBy === plansza[5].ownedBy) || 
        (plansza[6].ownedBy !== '' && plansza[6].ownedBy === plansza[7].ownedBy && plansza[6].ownedBy === plansza[8].ownedBy) || 
        (plansza[0].ownedBy !== '' && plansza[0].ownedBy === plansza[3].ownedBy && plansza[0].ownedBy === plansza[6].ownedBy) || 
        (plansza[1].ownedBy !== '' && plansza[1].ownedBy === plansza[4].ownedBy && plansza[1].ownedBy === plansza[7].ownedBy) || 
        (plansza[2].ownedBy !== '' && plansza[2].ownedBy === plansza[5].ownedBy && plansza[2].ownedBy === plansza[8].ownedBy) || 
        (plansza[0].ownedBy !== '' && plansza[0].ownedBy === plansza[4].ownedBy && plansza[0].ownedBy === plansza[8].ownedBy) || 
        (plansza[2].ownedBy !== '' && plansza[2].ownedBy === plansza[4].ownedBy && plansza[2].ownedBy === plansza[6].ownedBy)){
            gameisOver = true
            actualplayer === 'x' ? actualplayer = 'o' : actualplayer = 'x';
            setTimeout(function(){ alert('Gracz '+ actualplayer.toUpperCase() + ' wygrał!'); }, 200);
    }
};


