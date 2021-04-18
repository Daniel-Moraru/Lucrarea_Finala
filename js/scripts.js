jQuery(document).ready(function() {
    jQuery('.js-full-select').select2();
});
jQuery(document).ready(function() {
    jQuery('.js-full-select-2').select2();
    document.querySelectorAll('.js-change-resolution').forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const res = link.dataset.resolution;
            document.querySelector('.js-styleguide-iframe').style.width = res;
        });
    });
});