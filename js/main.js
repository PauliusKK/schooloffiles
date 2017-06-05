$( document ).ready(function() {
    function moveArrow() {
        $('.dashed-tip').each(function() {
            $tip = $(this);
            $height = $tip.find('.box').height();
            if( $height < 28 ) $tip.find('.image').css({ height: $height, top: '7.5px' });
        });
    }

    function fixContent() {
        $('.surgery_signup').css({ maxWidth: '980px' });

        $('.question-but, #value_bottom-signup_but').each(function() {
            $button = $(this);
            $text = $button.text();
            $button.empty();

            if( $button.attr('id') == "value_bottom-signup_but" ) {
                // $button.append('<a>' + $text + '</a>').removeAttr('class').addClass('question-but black').css({
                //     boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.41)'
                //     backgroundColor: '#000',
                //     border: 'none',
                //     borderRadius: '11px',
                //     display: 'block',
                //     margin: '0 auto',
                //     padding: '10px 0'
                // });

                // $button.addClass('main-button');

                // $button.find('a').css({
                //     boxShadow: '0px 10px 0px 0px #b21515',
                //     fontSize: '25px',
                //     lineHeight: '2.08',
                //     borderRadius: '11px',
                //     color: 'white',
                //     padding: '10px 10px',
                //     fontWeight: 800,
                //     letterSpacing: '0.7px',
                //     display: 'block',
                //     width: '100%',
                //     textTransform: 'uppercase',
                //     textDecoration: 'none',
                //     whiteSpace: 'nowrap'
                // });

            } else {
                $button.append('<a>' + $text + '</a>').removeAttr('class').addClass('question-but').css({
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.41)'
                    backgroundColor: '#cd3135',
                    border: 'none',
                    borderRadius: '11px',
                    display: 'block',
                    margin: '0 auto',
                    padding: '10px 0'
                });

                $button.addClass('main-button');

                $button.find('a').css({
                    boxShadow: '0px 10px 0px 0px #B4181C', // #b21515
                    fontSize: '25px',
                    lineHeight: '2.08',
                    borderRadius: '11px',
                    color: 'white',
                    padding: '10px 10px',
                    fontWeight: 800,
                    letterSpacing: '0.7px',
                    display: 'block',
                    width: '100%',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                });
            }

            // $button.append('<a>' + $text + '</a>').removeAttr('class').addClass('question-but').css({
            //     boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.41)',
            //     backgroundColor: '#cd3135',
            //     border: 'none',
            //     borderRadius: '11px',
            //     display: 'block',
            //     margin: '0 auto',
            //     padding: '10px 0'
            // });

            // $button.addClass('main-button');

            // $button.find('a').css({
            //     boxShadow: '0px 10px 0px 0px #b21515',
            //     fontSize: '25px',
            //     lineHeight: '2.08',
            //     borderRadius: '11px',
            //     color: 'white',
            //     padding: '10px 120px',
            //     fontWeight: 800,
            //     letterSpacing: '0.7px',
            //     display: 'block',
            //     width: '100%',
            //     textTransform: 'uppercase',
            //     textDecoration: 'none',
            //     whiteSpace: 'nowrap'
            // });

        });

        $('.content, .surgery-content').each(function() {
            $content = $(this);
            $parent = $content.parent();
            $marginNext = $parent.next().css('margin-top');
            $marginPrev = $parent.prev().css('margin-top');

            $content.css({ width: '100%', maxWidth: '980px', boxShadow: '0 2px 4px 0 rgba(226, 226, 226, 0.5)', border: 'solid 1px #f7f7f7' });
            $parent.css({ margin: 0, padding: '9em 0', background: '#f3f3f3' });
            $parent.parent().css({ marginTop: 0 });

            if( $marginNext = 252 ) $parent.next().hide();
            else if( $marginPrev = 252 ) $parent.prev().hide();

            $('footer.footer-started').show();
        });

        $('#about_body-content').css({ display: 'inherit' });
    }

    // Changing sections height property in coming-soon page
    function changeSectionHeight() {
        $section = $('body.test-main section.main');
        $section.css({ height: '100%' });
        $sectionHeight = $section.height();
        if( $(window).height() > 767 ) {
            $section.css({ height: 'calc(100vh - 75px)' });
        } else {
            $section.css({ height: 'calc(100vh - 55px)' });
        }

        if( $(window).height() < $sectionHeight ) $section.css({ height: '100%' });
    }

    // Fixing modal's height if the screen size gets to lower than it's content.
    function modalFix() {
        $modal = $('.md-modal.md-show');
        $modalHeight = $modal.height();
        $minHeight = 800;

        $containerHeight = $modal.find('.container').height();
        $footerHeight = $modal.find('footer').height();
        $topAway = 85;
        $bottomAway = 65;
        $allHeight = $containerHeight + $footerHeight + $topAway + $bottomAway;

        if( $modal.has('#question-1') ) return false;

        if( $allHeight > $modalHeight ) {

            if( $(window).width() < 767 ) {
                $modal.css({ overflowY: 'scroll' });
            } else {
                // Change footer
                $modal.find('footer').hide();
                $modal.find('.footer').show();

                // Change container styles
                $modal.find('.container').css({ marginTop: $topAway - 40 });
            }
        }
    }

    moveArrow();
    changeSectionHeight();
    fixContent();

    $('header.bigger button.home').click(function() {
        $('nav.menu-appear').toggleClass('active');
    })

    $('.dashed-tip .box').click(function() {
        $('.dashed-tip, .card').removeClass('active');
        $tip = $(this).parent();
        $tip.toggleClass('active');
        $tip.next('.card').toggleClass('active');
        return false;
    });

    $('button.answer').on('click', function() {
        $target = $(this).attr('data-target');
        $('' + $target + '').addClass('md-show');

        if( $($target).has('.video') ) {
            $($target).find('.video').addClass('active');
        }

        modalFix();
    });

    $('.md-close').on('click', function() {
        $target = $(this).closest(".md-modal").attr('id');
        $(this).closest(".md-modal").removeClass('md-show');

        if( $('#' + $target).has('.video') ) {
            $('#' + $target).find('.video').removeClass('active');
        }
    });

    $(window).resize(function () {
        modalFix();
    });
});