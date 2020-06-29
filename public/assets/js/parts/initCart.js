import { $, tween, $wnd, $doc } from './_utility';

/*------------------------------------------------------------------

  Init Cart

-------------------------------------------------------------------*/
function initCart() {
    const self = this;
    const $cart = $('.nk-cart');
    const $cartItems = $cart.find('.nk-store-cart-products tr');
    const $cartTotal = $cart.find('.nk-cart-total');
    const $cartBtns = $cart.find('.nk-cart-btns');
    const $cartToggle = $('.nk-cart-toggle');
    const $nav = $('.nk-navbar-top');
    let navRect;
    let isOpened;

    self.toggleCart = () => {
        self[`${isOpened ? 'close' : 'open'}Cart`]();
    };

    self.openCart = () => {
        if (isOpened) {
            return;
        }
        isOpened = 1;

        // active all togglers
        $cartToggle.addClass('active');

        // add cart top position
        navRect = $nav[0] ? $nav[0].getBoundingClientRect() : 0;

        // set top position and animate
        tween.set($cart, {
            paddingTop: navRect ? navRect.bottom : 0,
        });
        tween.set($cartItems, {
            y: -10,
            opacity: 0,
        });
        tween.set($cartTotal, {
            y: -10,
            opacity: 0,
        });
        tween.set($cartBtns, {
            y: -10,
            opacity: 0,
        });
        tween.to($cart, 0.5, {
            opacity: 1,
            display: 'block',
            force3D: true,
        });
        tween.staggerTo($cartItems, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.2,
        }, 0.1);
        tween.to($cartTotal, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.3,
            force3D: true,
        });
        tween.to($cartBtns, 0.3, {
            y: 0,
            opacity: 1,
            delay: 0.4,
            force3D: true,
        });

        // open cart block
        $cart.addClass('open');

        // prevent body scrolling
        self.bodyOverflow(1);

        // trigger event
        $wnd.trigger('nk-open-cart', [$cart]);
    };

    self.closeCart = (dontTouchBody) => {
        if (!isOpened) {
            return;
        }
        isOpened = 0;

        // deactive all togglers
        $cartToggle.removeClass('active');

        tween.to($cart, 0.5, {
            opacity: 0,
            display: 'none',
            force3D: true,
            onComplete() {
                if (!dontTouchBody) {
                    // restore body scrolling
                    self.bodyOverflow(0);
                }
            },
        });

        // open cart block
        $cart.removeClass('open');

        // trigger event
        $wnd.trigger('nk-close-cart', [$cart]);
    };

    $doc.on('click', '.nk-cart-toggle', (e) => {
        self.toggleCart();
        e.preventDefault();
    });
    $wnd.on('nk-open-full-navbar nk-open-search-block nk-open-sign-form', () => {
        self.closeCart(1);
    });
}

export { initCart };
