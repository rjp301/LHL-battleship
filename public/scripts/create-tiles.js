const addTilesToBattleground = ($battleground, dim = 10) => {
  for (let i = 0; i <= dim; i++) {
    const attributes = {
      class: 'tile index-tile',
      text: i,
    };

    if (i === 0) {
      attributes.class += ' zero-tile';
    }
    
    $('<div>', attributes).appendTo($battleground);
  }

  // for (let i = 0; i <= )


};


$(document).ready(() => {
  addTilesToBattleground($('.battleground'));

});