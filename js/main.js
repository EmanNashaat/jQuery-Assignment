/*section 1 */
$("#menuBtn").click(()=>{
    let menuWidth = $(".menuList").outerWidth();
    if($("#menuBtn").css("left") == "0px" ){
        $("#menuList").animate({ "left" : 0 }, 500 )
        $("#menuBtn").animate({ "left" : "20%" }, 500 )
    }
    
    else{
        $("#menuList").animate({ "left" : "-20%" }, 500 )
        $("#menuBtn").animate({ "left" : 0 }, 500 )
    }
})

$("#closeIcon").click(()=>{
    $("#menuList").animate({ "left" : "-20%" }, 500 )
    $("#menuBtn").animate({ "left" : 0 }, 500 )
})

/* section 2 */

$(".mainText").click((e)=>{
    if ($(e.target).next().css("display") == "block" ){
    $(e.target).next().slideUp(500);
    }
    else{
    $(".mainParagraph").slideUp(500);
    $(e.target).next().slideDown(500);
    }
})

/* section3 */
let countDownDate = new Date("march 23, 2023 16:37:52").getTime();
setInterval(function() {
    
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    $("#days").html(days + "d");
    $("#hours").html(hours + "h"); 
    $("#mins").html(minutes + "m"); 
    $("#secs").html(seconds + "s");

    if (timeleft < 0) {
        clearInterval(function(){;
        $("days").html("");
        $("hours").html("");
        $("mins").html("");
        $("secs").html("")
        })
    }

    }, 1000)
/* section4 */
        $("#messageArea").keyup((e)=>{
            let total = 100
            let remainingNumber = total - $("#messageArea").val().length
            if(remainingNumber<= 0){
                $("#countSpan").html("Your available characters finished");
            }
            else{
                $("#countSpan").html(remainingNumber);
            }
      
    })
    // }
