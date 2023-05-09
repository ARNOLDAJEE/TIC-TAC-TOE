
const array=Array.from(document.getElementsByClassName('box'))
const restart=document.getElementById("restartgame")
//console.log("working")

const symbolx= "x"
const symbolo= "o"
let currentplayer = symbolx
let space=Array(9).fill(null)

const arr =()=>{
 //  console.log(array)
   
    array.forEach(item =>{
        item.addEventListener("click",boxclick)
    })
}
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function boxclick(e){
   // console.log("working")
    const id =e.target.id
    //console.log(space)
    
    if(!space[id]){
        space[id]=currentplayer
        e.target.innerText=currentplayer
        currentplayer = currentplayer == symbolx ? symbolo : symbolx

        if(playerwon() !== false){
            const won =playerwon()
           // let win = currentplayer == symbolx ? symbolo :symbolx
            console.log(won)
           // won =[a,b,c]
           let box1=array[won[0]]
           let box2=array[won[1]]
           let box3=array[won[2]]
            //console.log(box1)
           // console.log(box2)
           // console.log(box3)
           box1.classList.add("active")
           box2.classList.add("active")
           box3.classList.add("active")
           array.forEach(item =>{
            item.removeEventListener("click",boxclick)
        })
        }
        
    }
   
}

function playerwon(){
    
    for(let combo of winningCombos){
        let [a,b,c] = combo
        if(space[a] && (space[a] == space[b] && space[a] == space[c])){
            return  [a,b,c]
        }
       
    }
    return false
}
function emptybox(){
    array.forEach(item=>{
        item.innerText=""
        item.classList.remove("active")
    })
    space =space.fill(null)
    arr()
}

restart.addEventListener("click",emptybox)
//console.log(space)
arr()
