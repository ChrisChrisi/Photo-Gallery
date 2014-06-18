
$.fn.gallery = function (columns) {
   this.addClass('container');
   var galleryList = this.children(".gallery-list");
   galleryList.addClass("row");
   galleryList.children().css({
   "width": 100/columns - 1 + '%'
   });
   $("#gallery").addClass('gallery')
   $(".selected").hide();

    $("img").on("click", function(){
        if($(this).attr("data-info")) {
            $("#current-image").attr('src', $(this).attr("src"));
            if( $('[data-info="'+ parseInt($(this).attr("data-info") - 1) +'"]').parent().length) {
                $("#previous-image").attr('src', $('[data-info="' + parseInt($(this).attr("data-info") - 1) + '"]').attr("src"));
                $("#previous-image").show();
            }else{
                $("#previous-image").hide();
            }
            if($('[data-info="'+  parseInt(parseInt($(this).attr("data-info")) + 1) +'"]').parent().length) {
                $("#next-image").attr('src', $('[data-info="' + parseInt(parseInt($(this).attr("data-info")) + 1) + '"]').attr("src"));
                $("#next-image").show();
            }
            else{
                $("#next-image").hide();
            }
            $(".selected").show();
        }
    });

    $("#current-image").on("click",function(){
        $(".selected").hide();
    });

    $(document).keydown(function(e){
       if( $(".selected").is(':visible')){
           var keyCode = e.keyCode || e.which;
           if (keyCode == 37)
           {
               alert("left click");
           }
           if (keyCode == 39)
           {
               alert("right click");
           }
       }
    });

};