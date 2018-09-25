$(document).ready(function(){
    $("#recommend").click(function(){
        var dest = $("#destination").val();
        var pd = {"destination": dest};
        $.ajax({
            type: "post",
            url: "/",
            data: pd,
            cache: false,
            success: function(){
                window.location.href = "/user?dest="+dest;
            },
            error: function(){
                alert("error!");
            },
        });
    });
});
