    function getGithubInfo(user) {
        // calling an api with the help of ajax call
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/"+user,
        dataType: "json",
        success: function (result, status, xhr) {
            var table = $("<table><tr><th>UserInformation</th></tr>");

            table.append("<tr><td>Login:</td><td>" + result["login"] + "</td></tr>");
            table.append("<tr><td>Id:</td><td>" + result["id"] + "</td></tr>");
            table.append("<tr><td>Git Link:</td><td>" + result["html_url"] +"</td></tr>");
            table.append("<tr><td>Avatar:</td><td>" +"<img style='width:150px;height:150px;' src="+result["avatar_url"] +"></td></tr>")
            $("#message").html(table);
        },
        error: function (xhr, status, error) {
            var table = $("<table><tr><th> User Information Not Found</th></tr>");
            table.append("<tr><td>Status :</td><td>" + xhr.status + "</td></tr>");
            table.append("<tr><td>Error :</td><td>" + xhr.statusText + "</td></tr>");
            $("#message").html(table);
            //alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    });

}



$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            // console.log(username,"this is username");
            // calling a function
            getGithubInfo(username);
            $(this).val("");
        }
    });
});
