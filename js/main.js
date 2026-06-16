$(function () {
    $('.lang-switch').on('click', '.lang-switch__btn', function () {
      const $wrap = $(this).closest('.lang-switch');
      $wrap.find('.lang-switch__btn').removeClass('is-active');
      $(this).addClass('is-active');
      $wrap.attr('data-lang', $(this).data('lang-btn')); // если нужно знать выбранный язык
    });
  });

$(function () {

  // Открытие / закрытие каталога
  $(document).on('click', '.header-nav__toggle', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $btn = $(this);
    const $menu = $('#catalogMenu');
    const isOpen = $menu.is(':visible');

    if (isOpen) {
      $menu.stop(true, true).slideUp(200);
    } else {
      $menu.stop(true, true).slideDown(200);
    }

    $btn.attr('aria-expanded', String(!isOpen));
  });

  // Закрытие по клику вне
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header-nav__item--has-menu').length) {
      $('#catalogMenu').stop(true, true).slideUp(200);
      $('.header-nav__toggle').attr('aria-expanded', 'false');
    }
  });

});

$(function () {
    const $track = $('#popularTrack');
    const $viewport = $('#popularViewport');

    const $btnLeft = $('.popular__arrow--left');
    const $btnRight = $('.popular__arrow--right');

    const step = 280 + 20; // ширина карточки + gap
    let offset = 0;

    function maxOffset() {
      const trackWidth = $track[0].scrollWidth;
      const viewWidth = $viewport[0].clientWidth;
      return Math.max(0, trackWidth - viewWidth);
    }

    function render() {
      $track.css('transform', `translateX(-${offset}px)`);
    }

    $btnRight.on('click', function () {
      offset = Math.min(maxOffset(), offset + step);
      render();
    });

    $btnLeft.on('click', function () {
      offset = Math.max(0, offset - step);
      render();
    });

    $(window).on('resize', function () {
      offset = Math.min(maxOffset(), offset);
      render();
    });
  });

  document.addEventListener("click", (e) => {
  const filterBtn = e.target.closest("[data-filter] .catalog-filter__btn");
  const all = document.querySelectorAll("[data-filter]");

  if (filterBtn) {
    const wrap = filterBtn.closest("[data-filter]");
    const willOpen = !wrap.classList.contains("is-open");
    all.forEach(x => x.classList.remove("is-open"));
    wrap.classList.toggle("is-open", willOpen);
    return;
  }

  if (!e.target.closest("[data-filter]")) {
    all.forEach(x => x.classList.remove("is-open"));
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".product-tabs__link");
  if (!btn) return;

  const tab = btn.getAttribute("data-tab");
  if (!tab) return;

  document.querySelectorAll(".product-tabs__link").forEach(x => x.classList.remove("is-active"));
  btn.classList.add("is-active");

  document.querySelectorAll(".product-tab").forEach(p => p.classList.remove("is-active"));
  document.querySelector(`.product-tab[data-pane="${tab}"]`)?.classList.add("is-active");
});


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("faq");
  if (!root) return;

  const items = [...root.querySelectorAll(".faq-item")];

  const closeAll = (except) => {
    items.forEach((it) => {
      if (it === except) return;
      it.classList.remove("is-open");
      it.querySelector(".faq-item__head")?.setAttribute("aria-expanded", "false");
    });
  };

  items.forEach((it) => {
    const head = it.querySelector(".faq-item__head");
    if (!head) return;

    head.addEventListener("click", () => {
      const willOpen = !it.classList.contains("is-open");
      closeAll(willOpen ? it : null);

      it.classList.toggle("is-open", willOpen);
      head.setAttribute("aria-expanded", String(willOpen));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-login");
  const overlay = document.getElementById("authOverlay");
  const modal = overlay?.querySelector(".auth-modal");
  const closeBtn = overlay?.querySelector(".auth-modal__close");

  const email = document.getElementById("login-email");
  const pass = document.getElementById("login-password");

  const submit = document.getElementById("login-submit");
  const retry = document.getElementById("retry-submit");

  const errorBox = document.getElementById("authError");
  const actions = document.getElementById("authActions");
  const retryWrap = document.getElementById("authRetry");

  if (!overlay || !modal) return;

  const open = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  };

  const setError = (v) => {
    modal.classList.toggle("is-error", v);
    errorBox.hidden = !v;
    actions.hidden = v;
    retryWrap.hidden = !v;
  };

  const validate = () => {
    const ok = (email?.value.trim() || "") && (pass?.value.trim() || "");
    setError(!ok);
    return ok;
  };

  openBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    setError(false);
    open();
  });

  closeBtn?.addEventListener("click", close);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  submit?.addEventListener("click", (e) => {
    e.preventDefault();
    validate();
  });

  retry?.addEventListener("click", (e) => {
    e.preventDefault();
    validate();
  });

  // глазик (псевдо)
  overlay.addEventListener("click", (e) => {
    const eye = e.target.closest(".login-eye");
    if (!eye) return;
    if (!pass) return;
    pass.type = pass.type === "password" ? "text" : "password";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const regOverlay = document.getElementById("regOverlay");
  const regModal = regOverlay?.querySelector(".reg-modal");
  if (!regOverlay || !regModal) return;

  const openRegisterBtn = document.getElementById("open-register"); // кнопка в login
  const closeBtn = regOverlay.querySelector(".auth-modal__close");

  const nameEl = document.getElementById("reg-name");
  const emailEl = document.getElementById("reg-email");
  const phoneEl = document.getElementById("reg-phone");
  const passEl = document.getElementById("reg-pass");
  const consentEl = document.getElementById("reg-consent");

  const submitBtn = document.getElementById("reg-submit");
  const errorBox = document.getElementById("regError");

  const loginOverlay = document.getElementById("authOverlay"); // если логин открыт

  const open = () => {
    loginOverlay?.classList.remove("is-open");
    loginOverlay?.setAttribute("aria-hidden", "true");

    regOverlay.classList.add("is-open");
    regOverlay.setAttribute("aria-hidden", "false");

    setError(false);
    setFieldError(false);
  };

  const close = () => {
    regOverlay.classList.remove("is-open");
    regOverlay.setAttribute("aria-hidden", "true");
  };

  const setError = (v) => {
    errorBox.hidden = !v;
  };

  const setFieldError = (v) => {
    regModal.classList.toggle("is-error", v);
  };

  const validateEmpty = () => {
    const ok =
      (nameEl?.value || "").trim() &&
      (emailEl?.value || "").trim() &&
      (phoneEl?.value || "").trim() &&
      (passEl?.value || "").trim() &&
      !!consentEl?.checked;

    setFieldError(!ok);

    // по твоему ТЗ: полотно появляется как в логине при ошибке
    // текст другой — используем уже готовый текст в regError
    setError(!ok);

    return !!ok;
  };

  // открытие (делегирование, чтобы точно ловить)
  document.addEventListener("click", (e) => {
    if (e.target.closest("#open-register")) {
      e.preventDefault();
      open();
      return;
    }

    if (e.target.closest("#regOverlay .auth-modal__close")) {
      e.preventDefault();
      close();
      return;
    }

    if (e.target === regOverlay) close();

    const eye = e.target.closest("#regOverlay .login-eye");
    if (eye && passEl) {
      e.preventDefault();
      passEl.type = passEl.type === "password" ? "text" : "password";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  submitBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmpty();
  });

  // сброс красноты, когда пользователь начинает исправлять
  [nameEl, emailEl, phoneEl, passEl].forEach((el) => {
    el?.addEventListener("input", () => {
      setFieldError(false);
      setError(false);
    });
  });

  consentEl?.addEventListener("change", () => {
    setFieldError(false);
    setError(false);
  });
});

