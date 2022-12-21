document.querySelector(".control-buttons span").onclick = function() {
    let yourName = prompt("what's your name?");
   
    if(yourName == null || yourName == ""){  
        document.querySelector(".name span").innerHTML = 'UnKnown'; 
    } else{
        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-buttons").remove();
};

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);
let orderRang = Array.from(Array(blocks.length).keys());
shuffel(orderRang);

blocks.forEach((block,index) => {
block.style.order = orderRang[index];
block.addEventListener('click',function(){
    flipBlock(block);
 });
});
function flipBlock(selectedBlock){
selectedBlock.classList.add('is-flipped');
let allFlipedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));
if(allFlipedBlocks.length === 2){
    stopClicking();
    checkMatchedBlocks(allFlipedBlocks[0], allFlipedBlocks[1]);
 }
}
function stopClicking() {
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');

    },duration);
}
function checkMatchedBlocks(firstBlock, secondBlock) {
  let triesElement = document.querySelector('.tries span');
  if(firstBlock.dataset.technology === secondBlock.dataset.technology){
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');

      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1 ;
     setTimeout(() => {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
    }, duration);
  }

}

function shuffel(array){
    let current = array.length,
    temp, 
    random;
     while(current > 0){
        random = Math.floor(Math.random() *  current);
        current--;  
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
     }
     return array;
}






















