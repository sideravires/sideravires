(function () {
  var section = document.getElementById('products');
  if (!section) return;

  var firstCard = section.querySelector('.product-card');
  if (!firstCard) return;

  firstCard.classList.add('product-card--new');

  var ribbon = document.createElement('span');
  ribbon.className = 'product-card__ribbon';
  ribbon.textContent = 'New!';
  firstCard.insertBefore(ribbon, firstCard.firstChild);
})();
