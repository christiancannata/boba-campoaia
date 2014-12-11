/**
 * Created by christiancannata on 03/12/14.
 */
JQ(document).ready(function () {

    JQ(".timeline").on('click', '.month', function () {
        var rel = JQ(this).attr('rel');
        var clicked = JQ(this);
        var current = JQ(".timeline .month-selected");

        var month = current.find(".text").html();

        var nuovo_mese = JQ('<div class="month" rel="' + current.attr('rel') + '" number="' + current.attr('number') + '"><div class="image"></div> <div class="number"></div>' + current.attr('number') + '  <div class="triangle"> </div> </div>');

        JQ(".timeline .month-selected").replaceWith(nuovo_mese);


        var nuovo_selected = JQ('<div class="month-selected" rel="' + clicked.attr('rel') + '" number="' + clicked.attr('number') + '"><div class="text">' + clicked.attr('number') + '<br>' + clicked.attr('rel') + ' </div> </div>');

        JQ(".timeline .month[number=" + clicked.attr('number') + "]").replaceWith(nuovo_selected);

    });


    JQ(window).scroll(function () {
        var corners = JQ('.corner');
        ( JQ(window).scrollTop() > 0 ) ? corners.addClass('out') : corners.removeClass('out');

        //  JQ('.subcontent > div.article:in-viewport').run(function(){


        //   });
    });



    JQ('.animated').waypoint(function () {

            JQ(this).delay(800).fadeIn(1000);
        },
        {
            offset: '100%',
            triggerOnce: true
        });


});