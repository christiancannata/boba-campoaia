/**
 * Created by christiancannata on 03/12/14.
 */
JQ(document).ready(function () {

    JQ(".timeline.homepage").on('click', '.month', function () {
        var rel = JQ(this).attr('rel');
        var clicked = JQ(this);
        var current = JQ(".timeline .month-selected");

        var month = current.find(".text").html();

        var nuovo_mese = JQ('<div class="month" rel="' + current.attr('rel') + '" number="' + current.attr('number') + '"><div class="image"></div> <div class="number"></div>' + current.attr('number') + '  <div class="triangle"> </div> </div>');

        JQ(".timeline .month-selected").replaceWith(nuovo_mese);


        var nuovo_selected = JQ('<div class="month-selected" rel="' + clicked.attr('rel') + '" number="' + clicked.attr('number') + '"><div class="text">' + clicked.attr('number') + '<br>' + clicked.attr('rel') + ' </div> </div>');

        JQ(".timeline .month[number=" + clicked.attr('number') + "]").replaceWith(nuovo_selected);

    });

    JQ(".timeline.site").on('click', '.month', function () {
        var rel = JQ(this).attr('rel');
        var clicked = JQ(this);
        var current = JQ(".timeline .month-selected");

        var month = current.find(".text").html();
        var nuovo_mese = JQ('<div class="month" rel="' + current.attr('rel') + '" ><div class="number">   ' + current.attr('rel') + '   </div><div class="triangle"></div></div>');

        JQ(".timeline .month-selected").replaceWith(nuovo_mese);

        var nuovo_selected = JQ('<div class="month-selected" rel="' + clicked.attr('rel') + '"><div class="number">' + clicked.attr('rel') + '</div><div class="triangle"></div></div>');

        JQ(".timeline .month[rel=" + clicked.attr('rel') + "]").replaceWith(nuovo_selected);

    });


    JQ(window).scroll(function () {
        var corners = JQ('.corner');
        ( JQ(window).scrollTop() > 0 ) ? corners.addClass('out') : corners.removeClass('out');

        //  JQ('.subcontent > div.article:in-viewport').run(function(){


        //   });
    });


    if (JQ('.animated').length > 0) {

        JQ('.animated').waypoint(function () {

                JQ(this).delay(800).fadeIn(1000);
            },
            {
                offset: '100%',
                triggerOnce: true
            });
    }


    JQ(".menu-popup .close").click(function () {
        JQ.magnificPopup.close();
    });

    JQ(".tabs li").click(function () {
        var rel = JQ(this).attr('rel');
        JQ(this).parent().find("li").removeClass("selected");
        JQ(this).addClass("selected");
        JQ(".tab-content").removeClass("selected");
        console.log(JQ(".tab-content ." + rel));
        JQ(".tab-content." + rel).addClass("selected");
    });

    if (JQ('.menu a').length > 0) {
        JQ('.menu a').magnificPopup({
            type: 'inline',
            alignTop: true,
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    if (JQ('#slide').length > 0) {
        JQ('#slide').bjqs({
            nexttext: 'Next. >', // Text for 'next' button (can use HTML)
            prevtext: '< Prev.', // Text for 'previous' button (can use HTML)
            responsive: true,
            width: "100%",
            height: 400,
            showmarkers: false
        });
    }

});