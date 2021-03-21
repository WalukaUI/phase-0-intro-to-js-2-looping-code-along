// Code your solutions in this file
let spy;
const all=['Lisa', 'Kaitlin', 'Jan'];
const messages=[];

beforeEach( () => {
  spy = sinon.spy( console, 'log' );
} );

function writeCards(names,event){
for(let i=0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`,);
}
return messages;
}
writeCards(all,'surprise');

afterEach( () => {
  spy.restore();
} );
////////////////////////////////////////////////////////////////////////////////////////////////


function countDown(numProvided) {
 for(let i = numProvided;i>=0;i--){
   console.log(i);
  }
}


  
