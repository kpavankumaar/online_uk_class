
        var dataContent = document.getElementById("data");
        function ajaxCall(url, cb){
            
            var xhr = new XMLHttpRequest();
            var userDetails = {
                "userId": 11,
                "id": 1,
                "title": "fugiat",
                "completed": true
            };
            xhr.onreadystatechange = function(e){
                debugger;
                
            }
            xhr.onprogress = function(){
                console.log("onprogress", xhr.readyState)
            }
            
            xhr.onload = function(e){

                var dataFromServer= e.target.response;
                cb(dataFromServer);
                dataContent.innerText = dataFromServer[0].title;
            }
            console.log("readystate" , xhr.readyState)
            xhr.open("GET", url, true);
            console.log("readystate" , xhr.readyState)
            xhr.setRequestHeader("content-type","application/json");
            xhr.setRequestHeader("token", "")
            stringifyUserDetails = JSON.stringify(userDetails);
            xhr.send(stringifyUserDetails);
        }
        