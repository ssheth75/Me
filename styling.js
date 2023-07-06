 window.onload = () => {
//     const grid = document.querySelector('.grid');

//     const masonry = new Masonry(grid, {
//         itemSelector: '.grid_item', 
//     });
var container = document.querySelector('.photosGrid');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.grid_item',
  gutter: 20,
  originTop: false,
  originCenter: false
});
 }

