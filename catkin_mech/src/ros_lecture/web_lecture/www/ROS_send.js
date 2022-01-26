var Talker = {
  ros : null,
  name : "",
  init : function(){
    this.ros = new ROSLIB.Ros();
    this.ros.on('error', function(error) {
        document.getElementById('rosbridge_status').innerHTML = "Error";
    });
    this.ros.on('connection', function(error) {
        document.getElementById('rosbridge_status').innerHTML = "Connect";
    });
    this.ros.on('close', function(error) {
        document.getElementById('rosbridge_status').innerHTML = "Close";
    });
    this.ros.connect('ws://' + location.hostname + ':9090');
  },
  send : function(joy_data){
    if(joy_data != null){
      var pub = new ROSLIB.Topic({
          ros : this.ros,
          name : '/web/joy',
          messageType : 'sensor_msgs/Joy'
      });
      pub.publish(joy_data);
    }
  },
  getJoy : function() {
    var pads = navigator.getGamepads ? navigator.getGamepads() :
                    (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);



    var joy_data = new ROSLIB.Message({  axes:[], buttons:[]});

    //keycode
    //87:w
    //83:s
    //68:d
    //65:a
    //74:j
    //76:l
    //16;shift
    //13:enter

    pad = 1;
    if(1) {
      document.getElementById("gamepad_status").innerHTML = "Connected";
      document.getElementById("gamepad_buttons").innerHTML = "good";
      document.getElementById("gamepad_axes").innerHTML = "none";
    
      var buttons = [];

      document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode==87){
      buttons[0]=1;
      buttons[1]=0;
      w=2;
      s=-1;

      j=0;
      l=0;

      document.getElementById("W").innerHTML = buttons[0];
      document.getElementById("S").innerHTML = buttons[1];
      //buttons[0]=1;
    } //Wキー
      //document.getElementById("W").innerHTML = "1";
    });

    document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode==83){ 
      buttons[1]=1;
      buttons[0]=0;
      s=-2;
      w=1;

      j=0;
      l=0;

      document.getElementById("S").innerHTML = buttons[1];
      document.getElementById("W").innerHTML = buttons[0];
    } //Sキー
    });


      document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode==68){
      buttons[2]=1;
      buttons[3]=0;
      d=4;
      a=-1;
      j=0;
      l=0;

      document.getElementById("D").innerHTML = buttons[2];
      document.getElementById("A").innerHTML = buttons[3];
      //pad.buttons[2].value=1;
    } //Dキー
    });


      document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode==65){
        buttons[3]=1;
        buttons[2]=0;
        a=-4;
        d=1;
        j=0;
        l=0;
      document.getElementById("A").innerHTML = buttons[3];
      document.getElementById("D").innerHTML = buttons[2];
      
    } 
    //A印キー
      /*if (event.key === 'w' ) {
          buttons[0]=1;
        }
        
        else if(event.key === 'a' ) {
          alert("aが押されました")
          buttons[1]=1;
        }

        else if(event.key === 's' ) {
          alert("sが押されました")
          buttons[2]=1;
        }

        else if(event.key === 'd' ) {
          alert("dが押されました")
          buttons[3]=1;
        }*/
    });


    document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode==74){
        buttons[4]=1;
        buttons[5]=0;
        j=5;
        l=0;

        s=0;
        w=0;

        d=0;
        a=0;

      document.getElementById("J").innerHTML = buttons[4];
      document.getElementById("L").innerHTML = buttons[5];
      
      //key j
    } 
  });

    document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode==76){
        buttons[4]=0;
        buttons[5]=1;
        j=0;
        l=-5;

        s=0;
        w=0;

        d=0;
        a=0;

      document.getElementById("J").innerHTML = buttons[4];
      document.getElementById("L").innerHTML = buttons[5];
      
      //key j
    } 
  });


  document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode == 16){
        buttons[6]=1;
        buttons[7]=0;
        shift = 1;
        enter = 0;

      document.getElementById("Shift").innerHTML = buttons[6];
      
      //key shift
    } 
  });


  document.body.addEventListener( 
        'keydown',event => {
      if(event.keyCode == 13){
        buttons[7]=1;
        buttons[6]=0;
        enter = 70;
        shift = 0;

      document.getElementById("Enter").innerHTML = buttons[7];
      
      //key enter
    } 
  });





    document.body.addEventListener("keyup",()=>{ //キーボードのキーを離したときに処理
      if(event.keyCode==87){
      buttons[0]=0;
      w=0;
      s=0;
      document.getElementById("W").innerHTML = buttons[0];
      } //Wキー
      //document.getElementById("W").innerHTML = "0";
    });

    document.body.addEventListener("keyup",()=>{
      if(event.keyCode==83){
      buttons[1]=0;
      s=0;
      w=0;
      document.getElementById("S").innerHTML = buttons[1]=0;;
      //pad.buttons[1].value=0;
    } //Sキー
    });


      document.body.addEventListener("keyup",()=>{
      if(event.keyCode==68){
        buttons[2]=0;
        d=0;
        a=0;
      document.getElementById("D").innerHTML = buttons[2];
      //pad.buttons[2].value=0;
    } //Dキー
    });


      document.body.addEventListener("keyup",()=>{
      if(event.keyCode==65){
        buttons[3]=0;
        a=0;
        d=0;
      document.getElementById("A").innerHTML = buttons[3];
      //pad.buttons[3].value=0;
    } //Aキー
    });


    document.body.addEventListener("keyup",()=>{
      if(event.keyCode==74){
        buttons[4]=0;
        j=0;
        l=0;
      document.getElementById("J").innerHTML = buttons[4];
      //pad.buttons[4].value=0;
    } //Jキー
    });

    document.body.addEventListener("keyup",()=>{
      if(event.keyCode==76){
        buttons[5]=0;
        j=0;
        l=0;
      document.getElementById("L").innerHTML = buttons[5];
      //pad.buttons[5].value=0;
    } //Lキー
    });

    document.body.addEventListener("keyup",()=>{
      if(event.keyCode == 16){
        buttons[6]=0;
        shift=0;
        

      document.getElementById("Shift").innerHTML = buttons[6];
      //pad.buttons[6].value=0;
    } //Shiftキー
    });

    document.body.addEventListener("keyup",()=>{
      if(event.keyCode == 13){
        buttons[7]=0;
        enter=0;

      document.getElementById("Enter").innerHTML = buttons[7];
    } //enterキー
    });




      //pad.buttons.length=4;
      //buttons for display
      //var but0 = "";
      //for(var i = 0 ; i < pad.buttons.length; i++) {
        //but0 += "but" + 0 + ":" + buttons0+ "<br>";//or .pressed
      //}
      
      //axes for display
      //var ax = "";
      //for(var i = 0 ; i < pad.axes.length; i++) {
        //ax += pad.axes[i] + '<br>';
      //}
      //document.getElementById("gamepad_axes").innerHTML = ax;

      //for json

      //pad.buttons.length=4;
      //for(var i = 0 ; i < pad.buttons.length; i++) {
        //joy_data.buttons.push(Number(pad.buttons[i].pressed));      
      //}

     var buttons = [];

     buttons[0] = w;
     buttons[1] = s;
     buttons[2] = d;
     buttons[3] = a;
     buttons[4] = j;
     buttons[5] = l;
     buttons[6] = shift;
     buttons[7] = enter;

     joy_data.buttons.push(Number(buttons[0])); 
     joy_data.buttons.push(Number(buttons[1])); 
     joy_data.buttons.push(Number(buttons[2])); 
     joy_data.buttons.push(Number(buttons[3]));
     joy_data.buttons.push(Number(buttons[4])); 
     joy_data.buttons.push(Number(buttons[5]));
     joy_data.buttons.push(Number(buttons[6]));
     joy_data.buttons.push(Number(buttons[7]));  



      //pad.axes.length=4;

      //for(var i = 0 ; i < pad.axes.length; i++) {
        //joy_data.axes.push(pad.axes[i]);
      //}  
      
      var axes = [];

      axes[0]=1.0;
      axes[1]=0.0;
      axes[2]=0.0;
      axes[3]=0.0;

      //joy_data.axes.push(axes[0]);
      //joy_data.axes.push(axes[1]);
      //joy_data.axes.push(axes[2]);
      //joy_data.axes.push(axes[3]);

       //for(var i = 0 ; i < pad.buttons.length; i++) {
        //joy_data.axes.push(pad.buttons[i].value); 
      //}

      //joy_data.axes.push(buttons[0]);
      //joy_data.axes.push(buttons[1]);
      //joy_data.axes.push(buttons[2]);
     // joy_data.axes.push(buttons[3]);

      console.log(joy_data);
      return joy_data
      }
  
      else{
        document.getElementById("gamepad_status").innerHTML = "Disonnected";
        joy_data = null
      }
    }
  }
  Talker.init();
  
  window.onload = function(){
  };
  window.onunload = function(){
    Talker.ros.close();
  };
  
  function update(){
    joy_data = Talker.getJoy();
    Talker.send(joy_data);
  }
  setInterval("update()",100);