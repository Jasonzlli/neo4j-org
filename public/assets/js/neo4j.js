$(document).ready(function(){
    $(".lightbox").each(function() {
        var lb=$(this);
        var url=lb.attr("src");
        if (url==null) {
            console.log("No URL");
            console.log(lb);
        }
        lightbox(lb.attr("id"),url);
    });
});


function getCookies() {
    var cks = {};
    var ckList = document.cookie.split("; ");
    for (var i=0; i < ckList.length; i++)
    {
        var ck = ckList[i].split("=");
        cks[ck[0]] = unescape(ck[1]);
    }
    return cks;
}

function marketo_cookie() {
    Munchkin.createTrackingCookie(true);
    var cookies=document.cookie.split("; ");
    for (i in cookies) {
        var m = cookies[i].match(/^_mkto_trk=.+-(\d+)$/);
        if (m) return m[1];
    }
    return null;
}

function renderConsole(url) {
    $('#console').html('<a class="btn" href="'+url+'" target="_blank">Open in new Window</a><iframe width="800" height="400" src="'+url+'"/>');
}

function lightbox(id, url) {
    // console.log("Handling lightbox "+id+" "+url)

    var lightbox = $('#' + id);
    var iframe=lightbox.find(".lightbox-content iframe");
    if (lightbox.find(".lightbox-content .lightbox-header").length==0) {
        iframe.before('<div class="lightbox-header"> <button type="button" class="close" data-dismiss="lightbox" aria-hidden="true">&times;</button> </div>');
    }
    lightbox.on('show', function () {
        url+="?badge=0&title=0&portrait=0&autoplay=1&rel=0&byline=0";
        iframe.attr("src",url).attr("height",$(window).height() / 1.2).attr("width",$(window).width() / 1.2);
    }).on('hide', function () {
        iframe.removeAttr("src");
    });
}

