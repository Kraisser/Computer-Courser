export default function burger() {
  let burgerBut = document.querySelector(`#burgerBut`),
    menuContainer = document.querySelector(`#burgerListContainer`),
    span1 = burgerBut.querySelector(`span:nth-child(1)`),
    span2 = burgerBut.querySelector(`span:nth-child(2)`),
    span3 = burgerBut.querySelector(`span:nth-child(3)`);

  burgerBut.addEventListener(`click`, openBurger);

  window.addEventListener(`resize`, closeBurger);
  window.addEventListener(`scroll`, closeBurger);

  function openBurger() {
    menuContainer.classList.add(`menuOpen`);

    span1.classList.remove(`span1CrossAnimBack`);
    span2.classList.remove(`span2CrossAnimBack`);
    span3.classList.remove(`span3Show`);
    span1.classList.add(`span1CrossAnim`);
    span2.classList.add(`span2CrossAnim`);
    span3.classList.add(`span3Hide`);

    burgerBut.addEventListener(`click`, closeBurger);
    burgerBut.removeEventListener(`click`, openBurger);
  }

  function closeBurger() {
    menuContainer.classList.remove(`menuOpen`);

    span1.classList.remove(`span1CrossAnim`);
    span2.classList.remove(`span2CrossAnim`);
    span3.classList.remove(`span3Hide`);
    span1.classList.add(`span1CrossAnimBack`);
    span2.classList.add(`span2CrossAnimBack`);
    span3.classList.add(`span3Show`);

    burgerBut.addEventListener(`click`, openBurger);
    burgerBut.removeEventListener(`click`, closeBurger);
  }
}