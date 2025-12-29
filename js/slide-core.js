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

        // Replace brand in title
        if (document.title.includes("影刀")) {
            document.title = document.title.replace(/影刀/g, brand.name);
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

            // Strategy: Replace Placeholders First (The new standard)
            if (text.includes("{{BRAND_NAME}}")) {
                text = text.replace(/\{\{BRAND_NAME\}\}/g, brand.name);
                changed = true;
            }
            if (text.includes("{{BRAND_ENGLISH_NAME}}")) {
                text = text.replace(/\{\{BRAND_ENGLISH_NAME\}\}/g, brand.englishName || brand.name);
                changed = true;
            }
            if (text.includes("{{CLIENT_NAME}}")) {
                text = text.replace(/\{\{CLIENT_NAME\}\}/g, brand.clientName || "客户");
                changed = true;
            }

            // Fallback: Replace legacy hardcoded strings (for backward compatibility or missed files)
            if (text.includes("影刀")) {
                text = text.replace(/影刀/g, brand.name);
                changed = true;
            }
            if (text.includes("ShadowBot")) {
                text = text.replace(/ShadowBot/g, brand.englishName || brand.name);
                changed = true;
            }
            if (text.includes("严料坊")) {
                text = text.replace(/严料坊/g, brand.clientName || "客户");
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

                    // Placeholders
                    if (val.includes("{{BRAND_NAME}}")) {
                        val = val.replace(/\{\{BRAND_NAME\}\}/g, brand.name);
                        changed = true;
                    }
                    if (val.includes("{{BRAND_ENGLISH_NAME}}")) {
                        val = val.replace(/\{\{BRAND_ENGLISH_NAME\}\}/g, brand.englishName || brand.name);
                        changed = true;
                    }
                    if (val.includes("{{CLIENT_NAME}}")) {
                        val = val.replace(/\{\{CLIENT_NAME\}\}/g, brand.clientName || "客户");
                        changed = true;
                    }

                    // Legacy
                    if (val.includes("影刀")) {
                        val = val.replace(/影刀/g, brand.name);
                        changed = true;
                    }
                    if (val.includes("ShadowBot")) {
                        val = val.replace(/ShadowBot/g, brand.englishName || brand.name);
                        changed = true;
                    }
                    if (val.includes("严料坊")) {
                        val = val.replace(/严料坊/g, brand.clientName || "客户");
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
