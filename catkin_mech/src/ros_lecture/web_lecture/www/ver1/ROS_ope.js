//キーが押されたときにIDを変更
document.onkeydown = function (evt){

    document.addEventListener('keypress', keypress_ivent);
        function keypress_ivent(e) {
            //Wキーが押された時の処理
            if(e.key === 'w' || e.key === 'W'){
                // 既存の処理中略
                document.getElementById("running_Wkey").classList.add("pressing");   
            }

            //Aキーが押された時の処理
            else if(e.key === 'a' || e.key === 'A'){
                // 既存の処理中略
                document.getElementById("running_Akey").classList.add("pressing");
                }

            //Sキーが押された時の処理
            else if(e.key === 's' || e.key === 'S'){
                // 既存の処理中略
                document.getElementById("running_Skey").classList.add("pressing");
                }

            //Dキーが押された時の処理
            else if(e.key === 'd' || e.key === 'D'){
                // 既存の処理中略
                document.getElementById("running_Dkey").classList.add("pressing");
                }
            
        return false; 
        }
    }

//キーが離されたときにIDを戻す
document.onkeyup = function (evt){

    document.addEventListener('keyup', keyup_ivent);
    function keyup_ivent(e) {
        //Wキーが押された時の処理
        if(e.key === 'w' || e.key === 'W'){
            // 既存の処理中略
            document.getElementById("running_Wkey").classList.remove("pressing");
            document.addEventListener('keypress_Wkey', keypress_ivent);
        }

        //Aキーが押された時の処理
        else if(e.key === 'a' || e.key === 'A'){
            // 既存の処理中略
            document.getElementById("running_Akey").classList.remove("pressing");
            document.addEventListener('keypress_Akey', keypress_ivent);
        }

        //Sキーが押された時の処理
        else if(e.key === 's' || e.key === 'S'){
            // 既存の処理中略
            document.getElementById("running_Skey").classList.remove("pressing");
            document.addEventListener('keypress_Skey', keypress_ivent);
        }

        //Dキーが押された時の処理
        else if(e.key === 'd' || e.key === 'D'){
            // 既存の処理中略
            document.getElementById("running_Dkey").classList.remove("pressing");
            document.addEventListener('keypress_Dkey', keypress_ivent);
        }
    }
}