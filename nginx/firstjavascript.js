class player_name{
    constructor(name1,name2){
        this.name1 = name1;
        this.name2 = name2;
    }
}

class UI{
    //add player 
    static add_player(name){
        var player_board_id = document.querySelector("#player_board_id");
        var new_row = document.createElement('div');
        new_row.innerHTML = `
            <div>${name.name1} V.S ${name.name2}</div>
        `;
        player_board_id.appendChild(new_row);
    }

}

var block_key_id = document.querySelectorAll('.block');

let human_player = 'o'
let computer_player = 'x'
let current_player = human_player;
let winning_game = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]

function check_game_staus(e,current_player){

    //console.log(current_player);
    for(let i = 0; i < winning_game.length; i++){
   
        let winning_combination = winning_game[i];

        let table_0 = winning_combination[0];
        let table_1 = winning_combination[1];
        let table_2 = winning_combination[2];
        //console.log(winning_combination);
        if(current_player == block_key_id[table_0].classList[1] &&
           block_key_id[table_0].classList[1] == block_key_id[table_2].classList[1] &&
           block_key_id[table_0].classList[1] == block_key_id[table_1].classList[1] &&
           block_key_id[table_1].classList[1] == block_key_id[table_2].classList[1]){

               //Game Over Show Winning Message
                var win_game = document.querySelector('#end_game');
                win_game.firstChild.nodeValue=`${current_player} Win!!`;
                document.getElementById("end_game").classList.add('show');
                //console.log('fucking win');

        }else if( block_key_id[0].classList[1] != null &&
                  block_key_id[1].classList[1] != null &&
                  block_key_id[2].classList[1] != null &&
                  block_key_id[3].classList[1] != null &&
                  block_key_id[4].classList[1] != null &&
                  block_key_id[5].classList[1] != null &&
                  block_key_id[6].classList[1] != null &&
                  block_key_id[7].classList[1] != null &&
                  block_key_id[8].classList[1] != null ){
                
                var draw_game = document.querySelector('#end_game');
                draw_game.firstChild.nodeValue="Draw!!";
                document.getElementById("end_game").classList.add('show');
        }
       
        function checkWin(currentClass) {
            return WINNING_COMBINATIONS.some(combination => {
              return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)
              })
            })
        }
        
    }

}

function which_block(e){

    const blockarry = Array.from(block_key_id);
    const index = blockarry.indexOf(e.target);

    if (block_key_id[index].classList[1] === 'x' || block_key_id[index].classList[1] === 'o'){
        return;
    }

    if(current_player === human_player){
        block_key_id[index].classList.add(current_player);
        check_game_staus(e,current_player);

        current_player = computer_player;

    }else{
        block_key_id[index].classList.add(current_player);
        check_game_staus(e,current_player);

        current_player = human_player;

    }
        
   // console.log(index);
}

function reset_game(){

    for(let i=0; i < block_key_id.length; i++){
        block_key_id[i].classList.remove('x');
        block_key_id[i].classList.remove('o');
    }

    document.getElementById("end_game").classList.remove('show');

}

function main(){
    
    document.getElementById('play_area_id').addEventListener('click', which_block);
    document.getElementById('reset_game').addEventListener('click', reset_game);
    document.querySelector('#playerinformation').addEventListener('submit',(e)=>{
        e.preventDefault();
        const name_1 = document.querySelector('#input_column_1').value;
        const name_2 = document.querySelector('#input_column_2').value;

        const new_player = new player_name(name_1,name_2);

        UI.add_player(new_player);
        const game_start = document.getElementById("cover");
        
        game_start.remove();
    },{once:true});
}

main();