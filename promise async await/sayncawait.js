console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () =>{
  const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(function() {
      reject('ticket')
    },3000);
  })
  
  const getPopcorn = new Promise((resolve,reject)=>{
    resolve('popcorn')
  })
  
  const addButter = new Promise((resolve,reject) =>{
    resolve('butter')
  })
  
  const coldDrinks = new Promise((resolve,reject) =>{
    resolve('coldDrinks')
  })
  
  let ticket
  try{
   ticket = await promiseWifeBringingTicks;
  }catch(e){
    ticket = "sad face";
  }
  
  let [popcorn,butter,coldDrink] = await Promise.all([getPopcorn,addButter,coldDrinks])
  
  console.log(`${popcorn}, ${butter}, ${coldDrink}`);
  return ticket;
}
preMovie().then((m) =>{
  console.log(`person3: shows ${m}`);
});
console.log('person4: shows ticket');
console.log('person5: shows ticket');