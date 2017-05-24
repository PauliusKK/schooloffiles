$( document ).ready(function() {
    function moveArrow() {
        $('.dashed-tip').each(function() {
            $tip = $(this);
            $height = $tip.find('.box').height();
            if( $height < 28 ) $tip.find('.image').css({ height: $height, top: '7.5px' });
        });
    }

    // function changeFooterPosition() {
    //     $screenHeight = $(window).height();
    //     $bodyHeight = $('body').height();
    //     $headerHeight = $('header.header-started').height();

    //     if( $screenHeight > ($bodyHeight + $headerHeight) ) {
    //         $('footer.footer-started').css({ position: 'absolute', bottom: 0, width: '100%' });
    //         $('body').css({ backgroundColor: '#f3f3f3' });
    //     }
    // }

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
    // changeFooterPosition();

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