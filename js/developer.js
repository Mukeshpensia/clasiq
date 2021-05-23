function progress (timeleft, timetotal, $element){
    var barWidth = $element.parent('.auction-bid-time').width();
    var progessBarWidth = timeleft * barWidth / timetotal;
    var progessBarWidth = barWidth - progessBarWidth;
    $element.animate({width: progessBarWidth}, 100);
    $element.parent().find('#countdown').html(timeleft  + ' Seconds');
    if(timeleft > 0){
        setTimeout(function(){
            progress(timeleft - 1, timetotal, $element);
        }, 1000);

    }
    else{
        $element.parent().find('#countdown').html("Auction Completed")
    }
};
progress(90, 90, $('.my-progress'))