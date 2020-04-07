$('.column').on('click',function(e) {
    var value = $(this).data('value')
    if (value == 0) {
        $(this).css('transform','rotateY(180deg)')
        var value = $(this).data('value',1)
    } else if (value == 1) {
        $(this).css('transform','unset')
        var value = $(this).data('value',0)
    }
})