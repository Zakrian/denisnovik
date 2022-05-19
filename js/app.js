// Burger ==============================================
const burgerIcon = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (burgerIcon) {
	burgerIcon.addEventListener('click', function () {
		burgerIcon.classList.toggle('_active-burger')
		menuBody.classList.toggle('_active-menu')
	})
}

// Active link =========================================
// const menuList = document.querySelector('.menu__list');
const menuLink = menuBody.getElementsByClassName('menu__link');
for (var i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("_active-link");
		// Если активного класса нет
		if (current.length > 0) {
			current[0].className = current[0].className.replace(" _active-link", "");
		}
		// Добавляем активный класс к текущей/нажатой кнопке
		this.className += " _active-link";
	});
}

// Перемещение элемента DOM при адпативе ==============
const setLeng = document.querySelector('.set-leng');
if (window.innerWidth <= 767) {
	menuBody.append(setLeng);
}

// Изменение фото на мобилках =========================
const introImg = document.querySelector('.intro__img');
if (window.innerWidth <= 767) {
	introImg.src = 'img/hero-mob.jpg';
}

// Анимации при скролле ===============================
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemsHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemsHeight / animStart;

			if (animItemsHeight > window.innerHeight) {
				let animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemsHeight)) {
				animItem.classList.add('_show');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_show');
				}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect();
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}
	}
	setTimeout(() => {
		animOnScroll();
	}, 500);
}

if (window.innerWidth < 767.98) {
	setLeng.classList.remove('_anim-items', '_anim-no-hide')
}

// Preloader ==========================================
window.onload = function () {
	document.body.classList.add('loaded-hiding');
	window.setTimeout(() => {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded-hiding')
	}, 500);
}