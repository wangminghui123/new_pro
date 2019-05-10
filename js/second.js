$(function () {
    $('.tap1').on('tap',function () {
        $('.location1').show();
    });
    $('.tap2').on('tap',function () {
        $('.price1').show();
    });
    $('.tap3').on('tap',function () {
        $('.house1').show();
    });
    $('.tap4').on('tap',function () {
        $('.more1').show();
    });



    $('.site').on('tap',function (e) {
        e.stopPropagation();
        $('.location1').show();
    });
    $('.location1').on('tap',function () {
        $(this).hide();
    });
    $('.price').on('tap',function (e) {
        e.stopPropagation();
        $('.price1').show();
    });
    $('.price1').on('tap',function () {
        $(this).hide();
    });
    $('.house').on('tap',function (e) {
        e.stopPropagation();
        $('.house1').show();
    });
    $('.house1').on('tap',function () {
        $(this).hide();
    });
    $('.more2').on('tap',function (e) {
        e.stopPropagation();
        $('.more1').show();
    });
    $('.more1').on('tap',function () {
        $(this).hide();
    });



    $('.nav2').on('tap',function () {
        $('.location1').hide();
        $('.price1').show();
    });

    $('.nav3').on('tap',function () {
        $('.location1').hide();
        $('.house1').show();
    });
    $('.nav4').on('tap',function () {
        $('.location1').hide();
        $('.more1').show();
    });
    $('.nav1').on('tap',function () {
        $('.house1').hide();
        $('.location1').show();
    });
    $('.nav2').on('tap',function () {
        $('.house1').hide();
        $('.price1').show();
    });
    $('.nav4').on('tap',function () {
        $('.price1').hide();
        $('.more1').show();
    });

    $('.nav1').on('tap',function () {
        $('.price1').hide();
        $('.location1').show();
    });
    $('.nav3').on('tap',function () {
        $('.price1').hide();
        $('.house1').show();
    });
    $('.nav4').on('tap',function () {
        $('.price1').hide();
        $('.more1').show();
    });

    $('.nav1').on('tap',function () {
        $('.more1').hide();
        $('.location1').show();
    });
    $('.nav2').on('tap',function () {
        $('.more1').hide();
        $('.price1').show();
    });
    $('.nav3').on('tap',function () {
        $('.more1').hide();
        $('.house1').show();
    });




});
