//Coding Steps:
//Create a menu app as seen in this week's video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.
class piece{
    constructor(name, movement){
        this.name=name;
        this.movement=movement;
    }
    describe(){return this.name+": "+this.movement;}
}
let king=new piece("king","moves 1 in any direction");
let queen=new piece("queen","moves ∞ in any direction");
let bishop=new piece("bishop","moves ∞ diagonally");
let knight=new piece("knight","moves 1x2");
let rook=new piece("rook","moves ∞ orthogonally");
let pawn=new piece("pawn","moves 1 forward");
let marshal=new piece("marshal","moves like a knight and a rook");
let cardinal=new piece("cardinal","moves like a knight and a bishop");
let amazon=new piece("amazon","moves like a knight and a queen");
class category{
    constructor(name){
        this.name=name;
        this.pieces=[];
    }
    include(p){if(p instanceof piece){this.pieces.push(p);}}
    describe(){return this.name+" has "+this.pieces.length+" types of pieces";}
}
let accepted=new category("accepted");
accepted.pieces=[king,queen,bishop,knight,rook,pawn];
let undecided=new category("undecided");
undecided.pieces=[marshal,cardinal,amazon];
class menu{
    constructor(){
        this.categories=[];
        this.selGame=null;
    }
    start(){
        let sel=this.showOptions();
        while(sel!=0){
            switch(sel){
                case "1":this.viewAcc();break;
                case "2":this.descAcc();break;
                case "3":this.viewUnd();break;
                case "4":this.descUnd();break;
                case "5":this.grantAcc();break;
                case "6":this.revokeAcc();break;
                case "7":this.makePiece();break;
                case "8":this.delePiece();break;
                default: sel=0;
            }sel=this.showOptions();
        }alert("done");
    }
    showOptions(){
        return prompt(`
        0) exit
        1) view accepted pieces
        2) describe an accepted piece
        3) view undecided pieces
        4) describe an undecided piece
        5) grant a piece accepted status
        6) revoke a piece's accepted status
        7) create a new undecided piece
        8) delete an undecided piece
        `);
    }
    viewAcc(){
        let message = "";
        for (let i = 0; i < accepted.pieces.length; i++) {message += i+": "+accepted.pieces[i].name + '\n';}
        alert(message);
    }
    descAcc(){
        let index = prompt('what is the index of accepted piece: ');
        alert(accepted.pieces[index].name+": "+accepted.pieces[index].movement);
    }
    viewUnd(){
        let message = "";
        for (let i = 0; i < undecided.pieces.length; i++) {message += i+": "+undecided.pieces[i].name + '\n';}
        alert(message);
    }
    descUnd(){
        let index = prompt('what is the index of undecided piece: ');
        alert(undecided.pieces[index].name+": "+undecided.pieces[index].movement);
    }
    grantAcc(){
        let index = prompt('what is the index of undecided piece you wish to grant acceptance: ');
        accepted.pieces.push(undecided.pieces[index]);
        undecided.pieces.splice(index,1);
    }
    revokeAcc(){
        let index = prompt('what is the index of accepted piece you wish to revoke acceptance: ');
        undecided.pieces.push(accepted.pieces[index]);
        accepted.pieces.splice(index,1);
    }
    makePiece(){
        let name = prompt('Name the new piece: ');
        let movement = prompt('Describe how the piece moves: ');
        undecided.pieces.push(new piece(name,movement));
    }
    delePiece(){
        let index = prompt('what is the index of the undecided piece you want to delete: ');
        undecided.pieces.splice(index,1);
    }
}
let m = new menu();
m.start(); 