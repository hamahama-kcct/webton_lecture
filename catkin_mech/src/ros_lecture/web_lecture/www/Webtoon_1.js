//キーが押されたときにIDを変更


///////////////////////新規CSS////////////////////////////////////

// キーボードの入力状態を記録する配列
var input_key_buffer = new Array();

// ------------------------------------------------------------
// キーボードを押したときに実行されるイベント
// ------------------------------------------------------------
document.onkeydown = function (e){
	if(!e) e = window.event; // レガシー

	input_key_buffer[e.keyCode] = true;
};

// ------------------------------------------------------------
// キーボードを離したときに実行されるイベント
// ------------------------------------------------------------
document.onkeyup = function (e){
	if(!e) e = window.event; // レガシー

	input_key_buffer[e.keyCode] = false;
};

// ------------------------------------------------------------
// ウィンドウが非アクティブになる瞬間に実行されるイベント
// ------------------------------------------------------------
window.onblur = function (){
	// 配列をクリアする
	input_key_buffer.length = 0;
};

// ------------------------------------------------------------
// キーボードが押されているか調べる関数
// ------------------------------------------------------------
function KeyIsDown(key_code){

	if(input_key_buffer[key_code])	return true;

	return false;
}


// ------------------------------------------------------------
// 一定の時間隔で実行する
// ------------------------------------------------------------
setInterval(function (){
    var key_check_up ;
    var key_check_right;
    var key_check_down;
    var key_check_left;
    var key_check_rotate;
    var key_check_rotate_2;
    var Diagonally_abover_right;
    var Diagonally_abover_ileft;
    var Diagonally_abover_down;
    var Diagonally_abover_up;
    
    if(KeyIsDown(87))key_check_up=1;
    else key_check_up=-1;
    
    if(KeyIsDown(68))key_check_right=1;
    else key_check_right=-1;

    if(KeyIsDown(65))key_check_left=1;
    else key_check_left=-1;
            
    if(KeyIsDown(83))key_check_down=1;
    else key_check_down=-1;

    if(KeyIsDown(76))key_check_rotate=1;
    else key_check_rotate=-1;

    if(KeyIsDown(74))key_check_rotate_2=1;
    else key_check_rotate_2=-1;

    if(key_check_up==1 && key_check_right==1) Diagonally_abover_right=1;
    else Diagonally_abover_right=-1;
                

    //////////////////////////////////////////////////

	// wキーが押されているか調べる
	if(key_check_up==1 && key_check_right==-1 && key_check_left ==-1 && key_check_down ==-1&& key_check_rotate_2 ==-1&& key_check_rotate ==-1){
		// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Wkey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_up");
   // document.addEventListener('keypress_Wkey', keypress_ivent);

	}else{
    // 既存の処理中略
    document.getElementById("running_Wkey").classList.remove("pressing");
     document.getElementById("ui").classList.remove("arrow_up");
    //  document.addEventListener('keypress_Wkey', keypress_ivent);
	}

        // sキーが押されているか調べる
	if(key_check_up==-1 && key_check_right==1 && key_check_left==-1 && key_check_down ==-1&& key_check_rotate_2 ==-1&& key_check_rotate ==-1){
	// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Dkey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_right");

	}else{
       // 既存の処理中略
    document.getElementById("running_Dkey").classList.remove("pressing");
    document.getElementById("ui").classList.remove("arrow_right");
         //   document.addEventListener('keypress_Dkey', keypress_ivent);
	}

    if(key_check_left ==1 && key_check_up ==-1 && key_check_right ==-1 && key_check_down ==-1&& key_check_rotate_2 ==-1&& key_check_rotate ==-1){
    document.getElementById("running_Akey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_left");
    }

    else{
    // 既存の処理中略
    document.getElementById("running_Akey").classList.remove("pressing");
    document.getElementById("ui").classList.remove("arrow_left");
   // document.addEventListener('keypress_Akey', keypress_ivent);
    }


    if(key_check_up==-1 && key_check_right==-1 && key_check_left ==-1 && key_check_down ==1&& key_check_rotate_2 ==-1&& key_check_rotate ==-1){
    // キーが離れたときにコンソールに出力
    // 既存の処理中略
    document.getElementById("running_Skey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_down");
  //  document.addEventListener('keypress_Skey', keypress_ivent);

	}
    else{
    // 既存の処理中略
    document.getElementById("running_Skey").classList.remove("pressing");
    document.getElementById("ui").classList.remove("arrow_down");
    //   document.addEventListener('keypress_Skey', keypress_ivent);
	}



    if(key_check_up==-1 && key_check_right==-1 && key_check_left ==-1 && key_check_down ==-1 && key_check_rotate ==1&& key_check_rotate_2 ==-1){
		// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Lkey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_rotate_L");
   // document.addEventListener('keypress_Lkey', keypress_ivent);

	}else{
            // 既存の処理中略
    document.getElementById("running_Lkey").classList.remove("pressing");
    document.getElementById("ui").classList.remove("arrow_rotate_L");
            //document.addEventListener('keypress_Lkey', keypress_ivent);
	}


    if(key_check_up==-1 && key_check_right==-1 && key_check_left ==-1 && key_check_down ==-1 && key_check_rotate_2 ==1&& key_check_rotate ==-1){
		// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Jkey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_rotate_J");

	}else{
            // 既存の処理中略
    document.getElementById("running_Jkey").classList.remove("pressing");
    document.getElementById("ui").classList.remove("arrow_rotate_J");
            //document.addEventListener('keypress_Jkey', keypress_ivent);
	}

    if(key_check_up==1 && key_check_right==1 && key_check_left ==-1 && key_check_down ==-1 && key_check_rotate_2 ==-1&& key_check_rotate ==-1){
		// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Wkey").classList.add("pressing");
    document.getElementById("running_Dkey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_Diagonally_abover_right");

	}else{
            // 既存の処理中略
            
    document.getElementById("ui").classList.remove("arrow_Diagonally_abover_right");
            //document.addEventListener('keypress_Jkey', keypress_ivent);
	}


    if(key_check_up==-1 && key_check_right==1 && key_check_left ==-1 && key_check_down ==1 && key_check_rotate_2 ==-1&& key_check_rotate ==-1){
		// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Skey").classList.add("pressing");
    document.getElementById("running_Dkey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_Diagonally_below_right");

	}else{
            // 既存の処理中略
            
    document.getElementById("ui").classList.remove("arrow_Diagonally_below_right");
            //document.addEventListener('keypress_Jkey', keypress_ivent);
	}
 
    if(key_check_up==-1 && key_check_right==-1 && key_check_left ==1 && key_check_down ==1 && key_check_rotate_2 ==-1&& key_check_rotate ==-1){
		// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Skey").classList.add("pressing");
    document.getElementById("running_Akey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_Diagonally_below_left");

	}else{
            // 既存の処理中略
            
    document.getElementById("ui").classList.remove("arrow_Diagonally_below_left");
            //document.addEventListener('keypress_Jkey', keypress_ivent);
	}

    if(key_check_up==1 && key_check_right==-1 && key_check_left ==1 && key_check_down ==-1 && key_check_rotate_2 ==-1&& key_check_rotate ==-1){
		// キーが離れたときにコンソールに出力

    // 既存の処理中略
    document.getElementById("running_Akey").classList.add("pressing");
    document.getElementById("running_Wkey").classList.add("pressing");
    document.getElementById("ui").classList.add("arrow_Diagonally_abover_left");

	}else{
            // 既存の処理中略
            
    document.getElementById("ui").classList.remove("arrow_Diagonally_abover_left");
            //document.addEventListener('keypress_Jkey', keypress_ivent);
	}
    
////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////
},1000/60);





///////////////////保存用//////////////////////////
//キーが押されたときにIDを変更
/*document.onkeydown = function (evt){

    document.addEventListener('keypress', keypress_ivent);
        function keypress_ivent(e) {
            //Wキーが押された時の処理：前
            if(e.key === 'w' || e.key === 'W' && e.key !== 's' && e.key !== 'S'&& e.key !== 'a' && e.key !== 'A'&& e.key !== 'd' && e.key !== 'D'){
                // 既存の処理中略
                document.getElementById("running_Wkey").classList.add("pressing");
                document.getElementById("ui").classList.add("arrow_up");
            }

            

            //Aキーが押された時の処理：左
             if(e.key === 'a' || e.key === 'A'&&e.key !== 'w' && e.key !== 'W' && e.key !== 's' && e.key !== 'S'&&  e.key !== 'd' && e.key !== 'D'){
                // 既存の処理中略
                document.getElementById("running_Akey").classList.add("pressing");
                document.getElementById("ui").classList.add("arrow_left");
                }

            //Sキーが押された時の処理：後ろ
             if(e.key === 's' || e.key === 'S'){
                // 既存の処理中略
                document.getElementById("running_Skey").classList.add("pressing");
                document.getElementById("ui").classList.add("arrow_down");
                }

            //Dキーが押された時の処理：右
            if(e.key === 'd' || e.key === 'D'){
                // 既存の処理中略
                document.getElementById("running_Dkey").classList.add("pressing");
                document.getElementById("ui").classList.add("arrow_right");
                }
            
            //Jキーが押された時の処理：左回転
            if(e.key === 'j' || e.key === 'J'){
                // 既存の処理中略
                document.getElementById("running_Jkey").classList.add("pressing");
                document.getElementById("ui").classList.add("arrow_rotate_J");
                }
            
            //Lキーが押された時の処理：右回転
            if(e.key === 'l' || e.key === 'L'){
                // 既存の処理中略
                document.getElementById("running_Lkey").classList.add("pressing");
                document.getElementById("ui").classList.add("arrow_rotate_L");
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
            document.getElementById("ui").classList.remove("arrow_up");
            document.addEventListener('keypress_Wkey', keypress_ivent);
        }

        //Aキーが押された時の処理
        else if(e.key === 'a' || e.key === 'A'){
            // 既存の処理中略
            document.getElementById("running_Akey").classList.remove("pressing");
            document.getElementById("ui").classList.remove("arrow_left");
            document.addEventListener('keypress_Akey', keypress_ivent);
        }

        //Sキーが押された時の処理
        else if(e.key === 's' || e.key === 'S'){
            // 既存の処理中略
            document.getElementById("running_Skey").classList.remove("pressing");
            document.getElementById("ui").classList.remove("arrow_down");
            document.addEventListener('keypress_Skey', keypress_ivent);
        }

        //Dキーが押された時の処理
        else if(e.key === 'd' || e.key === 'D'){
            // 既存の処理中略
            document.getElementById("running_Dkey").classList.remove("pressing");
            document.getElementById("ui").classList.remove("arrow_right");
            document.addEventListener('keypress_Dkey', keypress_ivent);
        }

        //Jキーが押された時の処理
        else if(e.key === 'j' || e.key === 'J'){
            // 既存の処理中略
            document.getElementById("running_Jkey").classList.remove("pressing");
            document.getElementById("ui").classList.remove("arrow_rotate_J");
            document.addEventListener('keypress_Jkey', keypress_ivent);
        }

        //Lキーが押された時の処理
        else if(e.key === 'l' || e.key === 'L'){
            // 既存の処理中略
            document.getElementById("running_Lkey").classList.remove("pressing");
            document.getElementById("ui").classList.remove("arrow_rotate_L");
            document.addEventListener('keypress_Lkey', keypress_ivent);
        }
    }
}*/