var each = Array.prototype.forEach;

var filters = document.querySelectorAll("[data-event-filter]");
var allCards = document.querySelectorAll("[data-event-card]");

each.call(filters, function(filter) {
  var tag = filter.getAttribute("data-event-filter");

  filter.addEventListener("click", function () {
    var activeCards = document.querySelectorAll("[data-event-tags~='" + tag + "']");

    each.call(allCards, function(card) { card.style.display = "none" });
    each.call(activeCards, function(card) { card.style.display = "" });
  });
});
