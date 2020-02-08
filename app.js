const pics = [
    'imgs/kitty_bed.jpg',
    'imgs/kitty_basket.jpg',
    'imgs/kitty_laptop.jpg',
    'imgs/kitty_door.jpg', 
    'imgs/kitty_sink.jpg', 
    'imgs/kitty_wall.jpg',
  ]
  
  const button = document.querySelector('button')
  const img = document.querySelector('img')
  
  let showIndex = 1
  button.addEventListener('click', function() {
    if (showIndex === 6) {
      showIndex = 0
    }
    img.src = pics[showIndex]
    showIndex = showIndex + 1
  })
  