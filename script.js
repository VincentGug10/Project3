jQuery(document).ready(function () {
    axios.get('https://csc225.mockable.io/movies')
        .then(function (response) {
            console.log(response.data);
            var moviesHTML = response.data.map(function (movie) {

                return '<p class="movie" data-movie="' + movie.id + '">' +
                    movie.title + '</p>';
            });

            $('#movies').html(moviesHTML);

            $('.card3').remove();
        });

    $('body').on('click', '.movie', function () {
        var $card2 = $('.card2');
        var id = $(this).data('movie');

        var url = 'http://csc225.mockable.io/movies/' + id;
        $card2.toggle();

        axios.get(url).then(function (response) {

            var movie = response.data;
            var movieHTML = '<p>' + movie.director + '</p>';
            movieHTML += '<p>' + movie.title + '</p>';
            movieHTML += '<p>' + movie.release + '</p>';
            movieHTML += '<a href="' + movie.poster + '">[LINK]</a>';

            $('#current-movie').html(movieHTML);
            $card2.toggle();


        })
    });




});

var quotes = [
    'Now go home and get your fuckin\' shinebox.',
    'I\'ll make him an offer he can\'t refuse.',
    'Friendship is everything. Friendship is more than talent. It is more than the government. It is almost the equal of family.',
    'A friend should always underestimate your virtues and an enemy overestimate your faults',
    'You Go In The Cage, Cage Goes In The Water, Shark’s In The Water',
    'We\'re gonna need a bigger boat.',
    'You\'re so ugly you could be a modern art masterpiece!'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('footer2').innerHTML = quotes[randomNumber];
}
