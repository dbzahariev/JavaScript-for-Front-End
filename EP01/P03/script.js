attachEvents();

function attachEvents() {
    $('.location-form>button').click(function (e) {
        e.preventDefault();

        let inputValue = $('.location-input').val();

        if (inputValue.length > 0) {
            $('.result').append('<div class="result-element">' + inputValue + '</div>');
        }

        $('.location-input').val('');
    })
}