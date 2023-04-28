document.addEventListener("DOMContentLoaded", function(){
    $(document).on("click", ".header__search_form .search-btn", function(e) {
        if (!$(".header__search_form").hasClass("active")) {
            e.preventDefault();
            $(".header__search_form").addClass("active");
        }
    });
    $(document).on("blur", ".header__search_form .search-input", function(e) {
        $(".header__search_form").removeClass("active");
    });
});