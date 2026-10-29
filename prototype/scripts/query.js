(() => {
  const question = document.querySelector('#question');
  const status = document.querySelector('#question-status');
  const examples = {
    access: {
      question: '¿Cómo recupero el acceso a mi cuenta?',
      answer: 'Solicita el restablecimiento del acceso a la mesa de ayuda e indica tu usuario corporativo. El equipo validará tu identidad antes de continuar. [1]',
      document: 'Acceso a cuentas.txt',
      excerpt: 'Para recuperar el acceso, contacta a la mesa de ayuda e indica tu usuario corporativo. El equipo debe validar tu identidad antes de restablecer la cuenta.',
    },
    support: {
      question: '¿Qué información debe llevar un ticket?',
      answer: 'Incluye una descripción del problema, el nombre del equipo y el mensaje de error. Puedes adjuntar una captura sin información confidencial. [1]',
      document: 'Solicitud de soporte.txt',
      excerpt: 'Cada ticket debe incluir la descripción del problema, el nombre del equipo y el mensaje de error. Las capturas adjuntas no deben contener información confidencial.',
    },
  };

  function showExample(id) {
    const example = examples[id];
    question.value = example.question;
    document.querySelector('#answer-text').textContent = example.answer;
    document.querySelector('#source-name').textContent = `[1] ${example.document}`;
    document.querySelector('#source-text').textContent = example.excerpt;
    document.querySelector('#answer-empty').hidden = true;
    document.querySelector('#answer-example').hidden = false;
    status.textContent = '';
  }

  document.querySelector('#show-example').addEventListener('click', () => showExample('access'));
  document.querySelectorAll('[data-example]').forEach((link) => {
    link.addEventListener('click', () => showExample(link.dataset.example));
  });
  question.addEventListener('input', () => {
    document.querySelector('#answer-example').hidden = true;
    document.querySelector('#answer-empty').hidden = false;
    status.textContent = '';
  });
  document.querySelector('#question-form').addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Pregunta preparada para consultar.';
  });
})();
