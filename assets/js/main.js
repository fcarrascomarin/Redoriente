const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const forms = document.querySelectorAll('.site-form');

forms.forEach((form) => {
  const feedback = form.querySelector('.form-feedback');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!feedback) return;

    const endpoint = form.getAttribute('action') || '';
    const successMessage = form.dataset.successMessage || 'Formulario enviado correctamente.';
    const errorMessage = form.dataset.errorMessage || 'No fue posible enviar el formulario.';

    feedback.className = 'form-feedback';

    if (!endpoint || endpoint.includes('TU_ENDPOINT')) {
      feedback.textContent = 'Debes reemplazar el endpoint de Formspree antes de publicar el sitio.';
      feedback.classList.add('is-error');
      return;
    }

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
    }
  });
});
