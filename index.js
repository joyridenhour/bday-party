var madeList = $('.made-list');
var submit = $('.submit-btn');

submit.on("click", toBuyList);

function toBuyList() {
  var toBuy = $('.things-to-buy').val();

  madeList.append(`
    <div class="name-card"><input type="checkbox" class="checkbox"> ${toBuy}</div>
    `);

    var checkbox = $('.checkbox');
      checkbox.on("click", remove)

    $('.name').val("");
}

function remove(){
event.target.parentNode.remove();
localStorage.removeItem('plan');
 }
