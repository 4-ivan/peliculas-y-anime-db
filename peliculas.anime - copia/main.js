$(document).ready(function () {
    // Panel deslizable
    $('#flip').on('click', function () {
        $('#panel').slideToggle('slow');
    });

    // Mostrar/Ocultar párrafo
    $('#hide').on('click', function () {
        $('p').hide();
    });

    $('#show').on('click', function () {
        $('p').show();
    });

    // Agregar y eliminar ítems de la lista de películas
    $('#addItem').on('click', function () {
        $('#movieList').append('<li>Nuevo ítem</li>');
    });

    $('#removeItem').on('click', function () {
        $('#movieList li').last().remove();
    });

    // Función de búsqueda en la sección de películas
    $('#searchInput').on('keyup', function () {
        let value = $(this).val().toLowerCase();
        $('#movieList li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    $('#searchInput').on('keyup', function () {
        let value = $(this).val().toLowerCase();
        $('.anime-list li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // Cambio de tema
    $('#toggleTheme').click(function() {
        $('body').toggleClass('dark-theme');
    });
});
