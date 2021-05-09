{
    /**
   * Let's make a game 🕹
   */
  const position = {
    x: 0,
    y: 0,
  };

  type Cmd = 'up' | 'down' | 'left' | 'right'

  function move(command: Cmd, pos = position) {
    switch(command) {
      case 'up':
        position.y++;
    }
  }
  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  // move('down');
  // console.log(position); // { x: 0, y: 0}
  // move('left');
  // console.log(position); // { x: -1, y: 0}
  // move('right');
  // console.log(position); // { x: 0, y: 0}
}