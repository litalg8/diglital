


export function loadProjects() {
  // var dishes = storageService.loadFromStorage(KEY)
//   if (!dishes || !dishes.length) dishes = gDishes
  console.log('loadprojects works')
  return gProjects; 
}

export function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

const gProjects = [
{
  _id:'1',
  title: 'Seared Salmon Fillet',
  desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
  imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1616411794/pixel-perfect/menu-item1_oyssdp.jpg'
},
{
  _id:'2',
  title: 'Rosemary Filet Mignon',
  desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
  imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1616411794/pixel-perfect/menu-item2_g8s8or.jpg'
},
{
  _id:'3', 
  title: 'Summer Fruit Chocolate Mousse',
  desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
  imgUrl: 'https://res.cloudinary.com/dk67dcp9c/image/upload/v1616411794/pixel-perfect/menu-item3_q3bhi2.jpg'
},

]