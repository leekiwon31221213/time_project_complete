let termsModal = document.querySelector('.terms-modal-container');
let modalClose = document.querySelectorAll('.close');

// 개인정보 처리방침 및 이용약관 체크
function term_privacy_check() {
  document.querySelectorAll('.checkbox-container').forEach((container) => {
    const checkbox = container.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        container.classList.add('checked');
        termsModal.classList.add('active');
      } else {
        container.classList.remove('checked');
      }
    });
  });
}
term_privacy_check();

// 모달 창 닫기
function term_modal_close() {
  const term_privacy_agree_btn = document.querySelector('.term-submit-btn');
  modalClose.forEach((closeIndex) => {
    closeIndex.addEventListener('click', function () {
      termsModal.classList.remove('active');
      document.querySelectorAll('.checkbox-container').forEach((container) => {
        container.classList.remove('checked');
        const checkbox = container.querySelector('input[type="checkbox"]');
        if (checkbox) {
          checkbox.checked = false;
        }
      });
    });
  });

  term_privacy_agree_btn.addEventListener('click', function () {
    termsModal.classList.remove('active');
  });
}
term_modal_close();
