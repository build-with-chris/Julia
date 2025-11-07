/**
 * Julia Booking Page - Interactive Features
 * Mobile menu, form validation, smooth scrolling
 */

// ============================================
// MOBILE MENU
// Based on agent-os/standards/frontend/mobile-menu.md
// ============================================

const menuBtn = document.querySelector('[data-menu-btn]');
const mobileNav = document.querySelector('[data-menu]');

/**
 * Opens the mobile navigation menu
 */
function openMenu() {
  document.body.classList.add('nav-open');
  mobileNav.hidden = false;
  menuBtn.setAttribute('aria-expanded', 'true');
}

/**
 * Closes the mobile navigation menu
 */
function closeMenu() {
  document.body.classList.remove('nav-open');
  mobileNav.hidden = true;
  menuBtn.setAttribute('aria-expanded', 'false');
}

// Toggle menu on button click
menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  isExpanded ? closeMenu() : openMenu();
});

// Close menu on nav link click (for smooth scroll to sections)
mobileNav.addEventListener('click', (e) => {
  if (e.target.matches('[data-menu-close], .mobile-nav, .mobile-nav nav a')) {
    closeMenu();
  }
});

// Close menu on ESC key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================

const bookingForm = document.getElementById('booking-form');
const formFeedback = document.querySelector('.form-feedback');

/**
 * Validates an email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a date is in the future
 * @param {string} dateString - Date string to validate
 * @returns {boolean} True if date is in the future
 */
function isFutureDate(dateString) {
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
}

/**
 * Shows error message for a form field
 * @param {HTMLElement} field - Input field
 * @param {string} message - Error message
 */
function showError(field, message) {
  const formGroup = field.closest('.form-group');
  const errorMessage = formGroup.querySelector('.error-message');

  field.classList.add('error');
  field.setAttribute('aria-invalid', 'true');
  errorMessage.textContent = message;
}

/**
 * Clears error message for a form field
 * @param {HTMLElement} field - Input field
 */
function clearError(field) {
  const formGroup = field.closest('.form-group');
  const errorMessage = formGroup.querySelector('.error-message');

  field.classList.remove('error');
  field.removeAttribute('aria-invalid');
  if (errorMessage) {
    errorMessage.textContent = '';
  }
}

/**
 * Validates a single form field
 * @param {HTMLElement} field - Input field to validate
 * @returns {boolean} True if valid
 */
function validateField(field) {
  clearError(field);

  const fieldName = field.name;
  const value = field.value.trim();

  // Check required fields
  if (field.hasAttribute('required') && !value) {
    showError(field, 'Dieses Feld ist erforderlich.');
    return false;
  }

  // Email validation
  if (fieldName === 'email' && value && !isValidEmail(value)) {
    showError(field, 'Bitte gib eine g�ltige E-Mail-Adresse ein.');
    return false;
  }

  // Event date validation
  if (fieldName === 'event-date' && value && !isFutureDate(value)) {
    showError(field, 'Das Eventdatum muss in der Zukunft liegen.');
    return false;
  }

  // Privacy checkbox validation
  if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
    showError(field, 'Bitte stimme der Datenschutzerkl�rung zu.');
    return false;
  }

  return true;
}

/**
 * Validates all form fields
 * @returns {boolean} True if all fields are valid
 */
function validateForm() {
  const fields = bookingForm.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Shows form submission feedback
 * @param {string} message - Feedback message
 * @param {string} type - Type of feedback ('success' or 'error')
 */
function showFormFeedback(message, type) {
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback ${type}`;
  formFeedback.removeAttribute('hidden');

  // Scroll to feedback
  formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Auto-hide success message after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      formFeedback.textContent = '';
      formFeedback.className = 'form-feedback';
    }, 5000);
  }
}

/**
 * Handles form submission
 * @param {Event} e - Submit event
 */
function handleFormSubmit(e) {
  e.preventDefault();

  // Clear previous feedback
  formFeedback.textContent = '';
  formFeedback.className = 'form-feedback';

  // Validate form
  if (!validateForm()) {
    showFormFeedback('Bitte f�lle alle erforderlichen Felder korrekt aus.', 'error');

    // Focus first error field
    const firstError = bookingForm.querySelector('.error');
    if (firstError) {
      firstError.focus();
    }
    return;
  }

  // Get form data
  const formData = new FormData(bookingForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    eventDate: formData.get('event-date'),
    location: formData.get('location'),
    budget: formData.get('budget') || 'Nicht angegeben',
    message: formData.get('message'),
    utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || ''
  };

  // Simulate form submission (replace with actual backend call)
  console.log('Form Data:', data);

  // Show success message
  showFormFeedback('Vielen Dank f�r deine Anfrage! Ich melde mich so schnell wie m�glich bei dir.', 'success');

  // Reset form
  bookingForm.reset();

  // Clear any remaining error states
  const errorFields = bookingForm.querySelectorAll('.error');
  errorFields.forEach(field => clearError(field));
}

// Add real-time validation on blur
const formFields = bookingForm.querySelectorAll('input, textarea');
formFields.forEach(field => {
  field.addEventListener('blur', () => {
    if (field.value.trim()) {
      validateField(field);
    }
  });

  // Clear error on input
  field.addEventListener('input', () => {
    if (field.classList.contains('error')) {
      clearError(field);
    }
  });
});

// Form submission
bookingForm.addEventListener('submit', handleFormSubmit);

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Don't prevent default for links like #datenschutz that show/hide content
    if (href === '#datenschutz' || href === '#impressum') {
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus();
    }
  });
});

// ============================================
// UTM PARAMETER TRACKING
// ============================================

/**
 * Adds UTM parameters to CTA links
 */
function initUTMTracking() {
  const urlParams = new URLSearchParams(window.location.search);
  const ctaLinks = document.querySelectorAll('[data-utm]');

  ctaLinks.forEach(link => {
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    if (utmSource || utmMedium || utmCampaign) {
      const linkUrl = new URL(link.href, window.location.origin);
      if (utmSource) linkUrl.searchParams.set('utm_source', utmSource);
      if (utmMedium) linkUrl.searchParams.set('utm_medium', utmMedium);
      if (utmCampaign) linkUrl.searchParams.set('utm_campaign', utmCampaign);
      link.href = linkUrl.toString();
    }
  });
}

// Initialize UTM tracking on page load
initUTMTracking();

// ============================================
// PAGE LOAD ENHANCEMENTS
// ============================================

/**
 * Sets minimum date for event date picker to today
 */
function initDatePicker() {
  const eventDateInput = document.getElementById('event-date');
  if (eventDateInput) {
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initDatePicker();
  initPortfolioFilter();
  initContactForm();

  // Log page load for debugging
  console.log('Julia Photography Portfolio loaded successfully');
});

// ============================================
// PORTFOLIO FILTER
// ============================================

/**
 * Initializes the portfolio filter functionality
 */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterButtons.length || !galleryItems.length) {
    return; // Not on portfolio page
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter gallery items
      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          // Fade in animation
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 10);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

/**
 * Initializes contact form validation and submission
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  if (!contactForm) {
    return; // Not on contact page
  }

  const contactFeedback = contactForm.querySelector('.form-feedback');

  // Real-time validation
  const contactFields = contactForm.querySelectorAll('input, textarea');
  contactFields.forEach(field => {
    field.addEventListener('blur', () => {
      if (field.value.trim()) {
        validateField(field);
      }
    });

    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        clearError(field);
      }
    });
  });

  // Form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous feedback
    contactFeedback.textContent = '';
    contactFeedback.className = 'form-feedback';

    // Validate form
    const fields = contactForm.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      contactFeedback.textContent = 'Bitte fülle alle erforderlichen Felder korrekt aus.';
      contactFeedback.className = 'form-feedback error';

      // Focus first error field
      const firstError = contactForm.querySelector('.error');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject') || 'Kontaktanfrage',
      message: formData.get('message')
    };

    // Simulate form submission (replace with actual backend call)
    console.log('Contact Form Data:', data);

    // Show success message
    contactFeedback.textContent = 'Vielen Dank für deine Nachricht! Ich melde mich so schnell wie möglich bei dir.';
    contactFeedback.className = 'form-feedback success';
    contactFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Reset form
    contactForm.reset();

    // Clear any remaining error states
    const errorFields = contactForm.querySelectorAll('.error');
    errorFields.forEach(field => clearError(field));

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      contactFeedback.textContent = '';
      contactFeedback.className = 'form-feedback';
    }, 5000);
  });
}
