/**
 * Slide Core Engine
 * Handles scaling, fragments, and navigation for slide pages.
 */
(function () {
    // 1. Initial Scale Logic
    function fitSlide() {
        const shell = document.getElementById('page-shell');
        const wrap = document.getElementById('slide-scale-wrapper');
        if (!shell || !wrap) return;
        const sw = 1280, sh = 720;
        const ww = shell.clientWidth, wh = shell.clientHeight;
        const scale = Math.min(ww / sw, wh / sh);
        wrap.style.transform = `scale(${scale})`;
        wrap.style.transformOrigin = 'center center';
    }

    // 2. Fragment & Navigation Logic
    let currentFragmentIndex = -1;
    function initNavigation() {
        const fragments = document.querySelectorAll('.fragment');

        document.addEventListener('keydown', (event) => {
            const isNextKey = ['ArrowRight', 'PageDown', ' ', 'ArrowDown'].includes(event.key);
            const isPrevKey = ['ArrowLeft', 'PageUp', 'ArrowUp'].includes(event.key);

            if (isNextKey) {
                if (currentFragmentIndex < fragments.length - 1) {
                    currentFragmentIndex++;
                    fragments[currentFragmentIndex].classList.add('visible');
                } else {
                    window.parent.postMessage({ type: 'SWIPER_NEXT' }, '*');
                }
                if ([' ', 'ArrowDown'].includes(event.key)) event.preventDefault();
            } else if (isPrevKey) {
                if (currentFragmentIndex >= 0) {
                    fragments[currentFragmentIndex].classList.remove('visible');
                    currentFragmentIndex--;
                } else {
                    window.parent.postMessage({ type: 'SWIPER_PREV' }, '*');
                }
                if (event.key === 'ArrowUp') event.preventDefault();
            }
        });
    }

    // 3. Wheel Event Forwarding
    let lastWheelTime = 0;
    const WHEEL_THROTTLE = 500; // ms

    function initWheelForwarding() {
        window.addEventListener('wheel', (event) => {
            const now = Date.now();
            if (now - lastWheelTime < WHEEL_THROTTLE) return;

            if (Math.abs(event.deltaY) < 10) return; // Ignore small movements

            if (event.deltaY > 0) {
                window.parent.postMessage({ type: 'SWIPER_NEXT' }, '*');
                lastWheelTime = now;
            } else if (event.deltaY < 0) {
                window.parent.postMessage({ type: 'SWIPER_PREV' }, '*');
                lastWheelTime = now;
            }
        }, { passive: true });
    }

    // 4. Lifecycle Hooks
    window.addEventListener('load', () => {
        fitSlide();
        initNavigation();
        initWheelForwarding();
    });
    window.addEventListener('resize', fitSlide);

    // Initial check in case load already fired
    if (document.readyState === 'complete') {
        fitSlide();
        initNavigation();
        initWheelForwarding();
    }
})();
