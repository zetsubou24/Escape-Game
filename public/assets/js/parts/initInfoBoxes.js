import { $, tween, $doc } from './_utility';

/*------------------------------------------------------------------

  Init Info Boxes / Alerts

-------------------------------------------------------------------*/
function initInfoBoxes() {
    const self = this;

    // close
    $doc.on('click', '.nk-info-box .nk-info-box-close', function onInfoboxCloseClick(e) {
        e.preventDefault();
        const $box = $(this).parents('.nk-info-box:eq(0)');
        tween.to($box, 0.3, {
            opacity: 0,
            onComplete() {
                tween.to($box, 0.3, {
                    height: 0,
                    padding: 0,
                    margin: 0,
                    display: 'none',
                    onComplete() {
                        self.debounceResize();
                    },
                });
            },
        });
    });
}

export { initInfoBoxes };
