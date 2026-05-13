const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    primaryNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    const clickedOutside = !primaryNav.contains(event.target) && !menuToggle.contains(event.target);
    if (clickedOutside) {
      closeMenu();
    }
  });
}

const forms = document.querySelectorAll('.site-form');

forms.forEach((form) => {
  const feedback = form.querySelector('.form-feedback');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!feedback || !submitButton) {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const endpoint = (form.getAttribute('action') || '').trim();
    const successMessage = form.dataset.successMessage || 'Formulario enviado correctamente.';
    const errorMessage = form.dataset.errorMessage || 'No fue posible enviar el formulario.';

    feedback.className = 'form-feedback';
    feedback.textContent = '';

    if (!endpoint || endpoint.includes('TU_ENDPOINT')) {
      feedback.textContent = 'Debes reemplazar el endpoint de Formspree antes de publicar el sitio.';
      feedback.classList.add('is-error');
      return;
    }

    const normalizedFields = Array.from(form.elements).filter((element) => {
      return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
    });

    normalizedFields.forEach((field) => {
      if (field.type !== 'email' && field.type !== 'hidden') {
        field.value = field.value.trim();
      }
    });

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    const formData = new FormData(form);
    formData.append('_page', window.location.href);
    formData.append('_form_name', form.dataset.formName || 'Formulario web');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      feedback.textContent = successMessage;
      feedback.classList.add('is-success');
      form.reset();
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      feedback.textContent = errorMessage;
      feedback.classList.add('is-error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});
