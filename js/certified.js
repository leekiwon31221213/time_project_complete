$(document).ready(function () {
  let certified_btn = document.querySelector('.certified-btn');
  let certified_modal = document.querySelector('.certified-modal-container');
  let certified_modal_close_btn = document.querySelectorAll('.close');
  let nameInput = document.querySelector('.user-name input');
  let phoneInput = document.querySelector('.send-phone-num input');
  let messageTextarea = document.querySelector('.future-msg textarea');
  let submitButton = document.querySelector('.form-submit-btn');
  let certified_modal_save_container = document.querySelector('.certified-modal-save-container');

  function admin_pw_input() {
    let admin_pw = document.querySelector('.admin-pw');
    return admin_pw && admin_pw.value === '1234';
  }

  function certifiedBtn() {
    certified_btn.addEventListener('click', function () {
      if (admin_pw_input()) {
        certified_modal.classList.add('active');
        // console.log('인증버튼 클릭');
      } else {
        alert('잘못된 비밀번호입니다.');
      }
    });
  }

  certifiedBtn();

  // 모달 닫기
  function certified_modalClose() {
    certified_modal_close_btn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // console.log('인증모달닫힘');
        certified_modal.classList.remove('active');
      });
    });
  }
  certified_modalClose();

  // 인풋 이벤트 리스너 추가
  nameInput.addEventListener('input', checkFormValidity);
  phoneInput.addEventListener('input', checkFormValidity);
  messageTextarea.addEventListener('input', checkFormValidity);

  // 폼 벨류가 값이 있을때 submit 버튼 활성화 및 클릭 이벤트 처리
  function checkFormValidity() {
    const isNameFilled = nameInput.value.trim() !== '';
    const isPhoneFilled = phoneInput.value.trim() !== '';
    const isMessageFilled = messageTextarea.value.trim() !== '';

    if (isNameFilled && isPhoneFilled && isMessageFilled) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  // 전송 버튼 클릭
  function submit_btn() {
    submitButton.addEventListener('click', function () {
      if (!submitButton.disabled) {
        certified_modal_save_container.classList.add('active');
        certified_modal.classList.remove('active');
      }
    });
  }
  submit_btn();

  // 인증 ajax (주석 처리된 부분은 필요에 따라 활성화)
  /*
    $.ajax({
      method: 'POST',
      url: '',
      success: function (response) {
        //   certifiedBtn();
      },
      error: function (error) {
        alert('인증번호가 맞지 않습니다.');
      },
    });
    */

  // 전송 ajax (주석 처리된 부분은 필요에 따라 활성화)
  /*
    $.ajax({
      method: 'POST',
      url: '',
      success: function (response) {
      submit_btn()
        //   
      },
      error: function (error) {
        console.log('통신이 실패했습니다.');
      },
    });
    */
});
