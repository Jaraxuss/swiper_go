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
    let currentStepIndex = -1;
    let steps = []; // Array of arrays of elements

    function initNavigation() {
        const fragments = Array.from(document.querySelectorAll('.fragment'));
        steps = [];

        // Separation: Explicitly ordered vs Implicit (DOM order)
        const explicitFragments = [];
        const implicitFragments = [];

        fragments.forEach(el => {
            if (el.hasAttribute('animation_step')) {
                explicitFragments.push(el);
            } else {
                implicitFragments.push(el);
            }
        });

        // Part 1: Process Explicit Steps
        // Group by step value
        const explicitGroups = {};
        explicitFragments.forEach(el => {
            const stepVal = parseFloat(el.getAttribute('animation_step'));
            if (!explicitGroups[stepVal]) {
                explicitGroups[stepVal] = [];
            }
            explicitGroups[stepVal].push(el);
        });

        // Sort keys and add to main steps
        Object.keys(explicitGroups)
            .sort((a, b) => a - b)
            .forEach(key => {
                steps.push(explicitGroups[key]);
            });

        // Part 2: Process Implicit Steps (Play last, one by one)
        implicitFragments.forEach(el => {
            steps.push([el]);
        });

        document.addEventListener('keydown', (event) => {
            const isNextKey = ['ArrowRight', 'PageDown', ' ', 'ArrowDown'].includes(event.key);
            const isPrevKey = ['ArrowLeft', 'PageUp', 'ArrowUp'].includes(event.key);

            if (isNextKey) {
                if (currentStepIndex < steps.length - 1) {
                    currentStepIndex++;
                    // Activate all elements in this step
                    steps[currentStepIndex].forEach(el => el.classList.add('visible'));
                } else {
                    window.parent.postMessage({ type: 'SWIPER_NEXT' }, '*');
                }
                if ([' ', 'ArrowDown'].includes(event.key)) event.preventDefault();
            } else if (isPrevKey) {
                if (currentStepIndex >= 0) {
                    // Deactivate all elements in this step
                    steps[currentStepIndex].forEach(el => el.classList.remove('visible'));
                    currentStepIndex--;
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

    // 4. Brand Configuration Logic
    // 4. Brand Configuration Logic
    function applyBrandConfiguration() {
        let brand;
        try {
            if (window.parent && window.parent.brandConfig) {
                brand = window.parent.brandConfig;
            } else if (window.top && window.top.brandConfig) {
                brand = window.top.brandConfig;
            }
        } catch (e) {
            console.warn("Could not access parent window for brandConfig", e);
        }

        if (!brand) {
            console.warn("brandConfig not found in parent window. Placeholders will remain.");
            return;
        }

        // Deep traversal to replace text in nodes
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        const textNodes = [];
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        textNodes.forEach(textNode => {
            let text = textNode.nodeValue;
            let changed = false;

            if (text.includes("{{CLIENT_NAME}}")) {
                text = text.replace(/\{\{CLIENT_NAME\}\}/g, brand.clientName || "客户");
                changed = true;
            }

            if (changed) {
                textNode.nodeValue = text;
            }
        });

        // Also replace in alt and title attributes
        const elementsWithAttrs = document.querySelectorAll('[alt], [title]');
        elementsWithAttrs.forEach(el => {
            ['alt', 'title'].forEach(attr => {
                let val = el.getAttribute(attr);
                if (val) {
                    let changed = false;

                    if (val.includes("{{CLIENT_NAME}}")) {
                        val = val.replace(/\{\{CLIENT_NAME\}\}/g, brand.clientName || "客户");
                        changed = true;
                    }
                    if (changed) el.setAttribute(attr, val);
                }
            });
        });
    }

    // 5. Lifecycle Hooks
    window.addEventListener('load', () => {
        fitSlide();
        initNavigation();
        initWheelForwarding();
        applyBrandConfiguration();
    });
    window.addEventListener('resize', fitSlide);

    // Initial check in case load already fired
    if (document.readyState === 'complete') {
        fitSlide();
        initNavigation();
        initWheelForwarding();
        applyBrandConfiguration();
    }
})();
