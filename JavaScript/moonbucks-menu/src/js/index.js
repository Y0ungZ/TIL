const $ = (selector) => document.querySelector(selector);

function App() {
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  }); //form태그의 기본 전송 이벤트를 막아준다.

  const espressoInput = $('#espresso-menu-name');
  const espressoMenuList = $('#espresso-menu-list');
  const espressoBtn = $('#espresso-menu-submit-button');

  const updateMenuCount = () => {
    const menuCount = espressoMenuList.querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount}개`;
  };

  //이벤트 위임
  espressoMenuList.addEventListener('click', (e) => {
    const type = e.target.classList;
    if (type.contains('menu-edit-button')) {
      const $menuName = e.target.closest('li').querySelector('.menu-name');
      const updatedMenuName = prompt('메뉴명을 수정하세요!', $menuName.innerText);
      $menuName.innerText = updatedMenuName;
    }
    if (type.contains('menu-remove-button')) {
      if (confirm('정말 삭제하시겠습니까?')) {
        e.target.closest('li').remove();
        updateMenuCount();
      }
    }
  });

  const addMenuName = () => {
    if (!espressoInput.value) {
      alert('메뉴명을 입력해주세요.');
      return;
    }

    const espressoMenuName = espressoInput.value;
    const menuItemTemplate = (menuName) => {
      return `<li class="menu-list-item d-flex items-center py-2">
              <span class="w-100 pl-2 menu-name">${menuName}</span>
              <button
                type="button"
                class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
              >
                수정
              </button>
              <button
                type="button"
                class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
              >
                삭제
              </button>
            </li>`;
    };
    espressoMenuList.insertAdjacentHTML('beforeend', menuItemTemplate(espressoMenuName));
    updateMenuCount();
    espressoInput.value = '';
  };

  //확인버튼
  espressoBtn.addEventListener('click', () => {
    addMenuName();
  });

  //메뉴입력
  espressoInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  });
}

App();
