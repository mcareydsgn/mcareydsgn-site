

export default class ARSlider extends HTMLElement {
	constructor() {
		super();
		this.panels = this.querySelectorAll('ar-panel');
		this.hasArrows = this.hasAttribute('has-arrows');
		this.hasNavDots = this.hasAttribute('has-nav-dots');
		this.classList.add('init')

		this.activeObserver = new MutationObserver((mutationList, observer) => {
			function setTabIndex(elem, shouldAddTabIndex) {

				const isTab = elem.getAttribute('role') === 'tab';

				if (shouldAddTabIndex) {
					elem.tabIndex = -1;

					if (isTab) {
						elem.setAttribute('aria-selected', false);
					}
				} else {
					elem.removeAttribute('tabindex');
					if (isTab) {
						elem.setAttribute('aria-selected', true);
					}
				}
			}

			for (const mutation of mutationList) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
					const elem = mutation.target;

					//Active Tab Panels should have tab index -1 where active tabs should not have tab index -1;
					//We don't want non active tabs to be able to receive focus via tabs. only the active one. This will maintain users last interaction when navigation with keyboard
					//We do want the active panel to receive focus via tabs.

					if (mutation.target.classList.contains('active')) {
						let shouldAddTabIndex = elem.getAttribute('role') === 'tabpanel';
						setTabIndex(elem, shouldAddTabIndex)
					} else {
						let shouldAddTabIndex = elem.getAttribute('role') === 'tab';
						setTabIndex(elem, shouldAddTabIndex)

					}
				}
			}
		})

	}



	nextSlide() {
		const targetPanel = this.querySelector(`ar-panel.active`);
		let nextPanel = targetPanel.nextElementSibling;

		if (nextPanel) {
			this.toSlide(nextPanel.id);
		}
	}

	previousSlide() {
		const targetPanel = this.querySelector(`ar-panel.active`);
		let previousPanel = targetPanel.previousElementSibling;

		if (previousPanel) {
			this.toSlide(previousPanel.id);
		}
	}

	disableArrows(targetPanel) {

		this.nextButton.disabled = targetPanel.nextElementSibling === null;
		this.prevButton.disabled = targetPanel.previousElementSibling === null

	}


	toSlide(panelId) {
		const targetPanel = this.querySelector(`#${panelId}`);
		const targetNavDot = this.querySelector(`[data-panel-id="${panelId}"]`);

		this.stage.style.height = targetPanel.offsetHeight + 'px'

		this.removeActive();

		if (this.hasArrows) {
			this.disableArrows(targetPanel);
		}

		targetPanel.classList.add('active');

		if (targetNavDot) {
			targetNavDot.classList.add('active');
			targetNavDot.focus();
		}

		this.stage.scrollTo({
			top: 0,
			left: targetPanel.offsetLeft,
			behavior: 'smooth'
		})
	}

	removeActive() {
		let activeElems = this.querySelectorAll('.active');
		activeElems.forEach(activeElem => {
			activeElem.classList.remove('active');
		})
	}

	initArrowButtons() {
		this.arrows = document.createElement('div')
		this.nextButton = document.createElement('button');
		this.prevButton = document.createElement('button');

		this.nextButton.addEventListener('click', () => { return this.nextSlide() });
		this.prevButton.addEventListener('click', () => { return this.previousSlide() });

		if (this.hasNavDots) {
			this.nextButton.tabIndex = '-1';
			this.prevButton.tabIndex = '-1';
		} else {
			this.nextButton.setAttribute('aria-label', 'Next Slide');
			this.prevButton.setAttribute('aria-label', 'Previous Slide');
			this.nextButton.setAttribute('aria-controls', this.stage.id);
			this.prevButton.setAttribute('aria-controls', this.stage.id);
		}


		this.prevButton.disabled = true;

		this.arrows.appendChild(this.prevButton);
		this.arrows.appendChild(this.nextButton);
	}

	initNavDots() {
		this.menu = document.createElement('menu');
		this.menu.role = 'tablist';


		for (let index = 0; index < this.panels.length; index++) {
			const panel = this.panels[index];
			const li = document.createElement('li');
			const button = document.createElement('button');

			button.dataset.panelId = panel.id;
			button.role = 'tab'
			button.setAttribute('id', `tab-${panel.id.replaceAll('panel-', '')}`);
			button.addEventListener('click', ({ currentTarget }) => { return this.toSlide(currentTarget.dataset.panelId) });
			if (index === 0) {
				button.classList.add('active');
				button.setAttribute('aria-selected', true);


			} else {
				button.tabIndex = '-1';
				button.setAttribute('aria-selected', false);
			}

			this.activeObserver.observe(button, { attributes: true })

			li.appendChild(button);
			this.menu.appendChild(li)
		}

	}

	initPanels() {
		const totalPanels = this.panels.length;
		this.panels.forEach((panel, index) => {
			if (index === 0) {
				panel.classList.add('active')
				panel.tabIndex = '-1'
			}
			panel.setAttribute('arial-label', `${index + 1} of ${totalPanels}`);


			if (this.hasNavDots) {
				panel.setAttribute('aria-labelledby', `tab-${panel.id.replaceAll('panel-', '')}`);
			} else {
				panel.setAttribute('role', 'group');
				panel.setAttribute('aria-roledescription', 'slide');
			}

			this.stage.appendChild(panel);
			this.activeObserver.observe(panel, { attributes: true });
		});
	}


	connectedCallback() {

		this.stage = document.createElement('div');
		this.stage.classList.add('stage');
		this.stage.id = 'stage-' + crypto.randomUUID();
		this.stage.setAttribute('arial-live', 'polite');

		if (this.hasArrows) {
			this.initArrowButtons();
			this.appendChild(this.arrows)

			if (this.hasNavDots === false) {
				this.setAttribute('aria-roledescription', 'carousel');
			}
		}

		if (this.hasNavDots) {
			this.initNavDots();
			this.appendChild(this.menu);
		}

		this.initPanels();
		this.appendChild(this.stage);

		this.addEventListener('keydown', (e) => {
			const key = e.key;
			const elemRole = e.target.getAttribute('role');
			const elemClassList = e.target.classList;

			switch (key) {
				case 'ArrowRight':
					if (this.nextButton === undefined || this.nextButton.disabled === false) {
						this.nextSlide();
					}
					break;

				case 'ArrowLeft':
					if (this.prevButton === undefined || this.prevButton.disabled === false) {
						this.previousSlide();
					}
					break;
				case 'Tab':
					if (elemRole === 'tab' && !e.shiftKey) {

						if (elemClassList.length === 0 || !elemClassList.contains('active')) {
							e.preventDefault();

							let activeDot = this.menu.querySelector('.active');
							activeDot.focus();
							break;
						}

						e.preventDefault();

						let activePanel = this.stage.querySelector('.active');
						activePanel.focus();

					} else if (elemRole === 'tab' && e.shiftKey) {
						console.log(e.target)
					}

					break;

				default:
					break;
			}
		})




		//Sometimes the render of the active slide does not settle rendering and the height may change.
		let activePanel = this.querySelector('ar-panel.active');
		let settledHeight;
		let previousHeight;
		const checkRender = () => {
			let request = requestAnimationFrame(() => {
				let currentHeight = activePanel.offsetHeight;

				if (previousHeight === currentHeight) {
					settledHeight = currentHeight;
				}

				if (currentHeight === settledHeight && settledHeight > 0) {
					this.stage.style.height = activePanel.offsetHeight + 'px'
					cancelAnimationFrame(request)
				} else {
					checkRender();
				}

				previousHeight = currentHeight;
			});
		}
		checkRender();


	}

}