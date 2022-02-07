window.addEventListener('DOMContentLoaded', () => {
  const $BTN_MODAL = document.querySelector('.btn-modal');
  const $MODAL = document.querySelector('.modal');

  $BTN_MODAL.addEventListener('click', openModal);
  $MODAL.addEventListener('click', closeModal);

  document.addEventListener('keydown', closeModal);

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
