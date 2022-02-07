const addTilesToBattleground = ($battleground, dim = 10) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  $('<div>', {
    class: 'tile index-tile zero-tile',
    text: 0
  }).appendTo($battleground);

  for (let i = 1; i <= dim; i++) {
    $('<div>', {
      class: 'tile index-tile',
      text: i
    }).appendTo($battleground);
  }

  for (let i = 0; i < dim; i++) {
    $('<div>', {
      class: 'tile index-tile',
      text: alphabet.charAt(i).toUpperCase()
    }).appendTo($battleground);

    for (let ii = 0; ii < dim; ii++) {
      $battleground.append(
        $('<div>', { class: 'tile bevel' }).append(
          $('<span>', { class: 'hole' })
        )
      );
    }
  }
};


$(document).ready(() => {
  addTilesToBattleground($('.battleground'));

});