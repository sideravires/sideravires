(function () {
  var section = document.getElementById('products');
  if (!section) return;

  var cards = section.querySelectorAll('.product-card');

  function addRibbon(card, cardClass, ribbonClass, text) {
    card.classList.add(cardClass);

    var ribbon = document.createElement('span');
    ribbon.className = 'product-card__ribbon' + (ribbonClass ? ' ' + ribbonClass : '');
    ribbon.textContent = text;
    card.insertBefore(ribbon, card.firstChild);
  }

  if (cards[0]) {
    addRibbon(cards[0], 'product-card--new', '', 'New!');
  }
})();
