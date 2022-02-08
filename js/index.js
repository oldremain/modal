window.addEventListener('DOMContentLoaded', () => {
  const $BTN_MODAL = document.querySelector('.btn-modal');
  const $MODAL = document.querySelector('.modal');

  $BTN_MODAL.addEventListener('click', openModal);
  $MODAL.addEventListener('click', closeModal);

  document.addEventListener('keydown', closeModal);

  const $BURGER = document.querySelector('.menu-burger');
  const $HEADER_NAV = document.querySelector('.header__nav');

  $BURGER.addEventListener('click', openBurger);

  function openBurger(e) {
    if (e.target.parentElement == $BURGER) {
      $HEADER_NAV.classList.add('show-header-nav');
      document.body.style.overflow = 'hidden';
    }
    $BURGER.addEventListener('click', closeBurger);
  }
  function closeBurger(e) {
    if (e.target.parentElement == $BURGER) {
      $HEADER_NAV.classList.remove('show-header-nav');
      document.body.style.overflow = '';
    }
  }

  function openModal() {
    $MODAL.classList.toggle('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(e) {
    if (e.target.dataset.close) {
      $MODAL.classList.toggle('show');
      document.body.style.overflow = '';
    }
    if (e.target === $MODAL) {
      $MODAL.classList.toggle('show');
      document.body.style.overflow = '';
    }
    if (e.code === 'Escape' && $MODAL.classList.contains('show')) {
      $MODAL.classList.toggle('show');
      document.body.style.overflow = '';
    }
  }
});
