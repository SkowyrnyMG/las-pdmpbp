import './style.css';

const images = {
  treasure: '💰',
  leafs: '🍃'
}

const trees = document.querySelectorAll('.tree');

Array.from(trees).forEach(tree => {
  tree.addEventListener('mouseover', ()=> {
    if(tree.className.includes('treasure')) {
      tree.innerHTML = images.treasure;
      tree.classList.add('treasure-found');
    } else {
    tree.innerHTML = images.leafs;
    }
  })
})