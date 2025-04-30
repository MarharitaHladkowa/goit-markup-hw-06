(() => {
  const refs = {
    // Добавить атрибуты data-modal-open на кнопку открытия
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Добавить атрибуты data-modal-close на кнопку закрытия
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Добавляем атрибуты data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // Открыть этот класс, который нужно будет добавить/удалить на бэкдропе при нажатии на кнопку
    refs.modal.classList.toggle('is-open');
  }
})();
