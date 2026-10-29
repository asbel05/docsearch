(() => {
  function updateSelection() {
    const selected = [...document.querySelectorAll('[data-document]:checked')];
    const list = document.querySelector('#selected-documents');
    list.replaceChildren(...selected.map((checkbox) => {
      const item = document.createElement('li');
      item.textContent = checkbox.dataset.document;
      return item;
    }));
    document.querySelector('#selection-count').textContent = selected.length;
    document.querySelector('#selection-empty').hidden = selected.length > 0;
    document.querySelector('#ask-button').disabled = selected.length === 0;
  }

  document.querySelectorAll('[data-document]').forEach((checkbox) => {
    checkbox.addEventListener('change', updateSelection);
  });
  document.querySelector('#upload-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const count = document.querySelector('#files').files.length;
    document.querySelector('#upload-status').textContent = `${count} archivo(s) seleccionado(s).`;
  });
  updateSelection();
})();
