var canvas=new fabric.Canvas("myCanvas");
player_x=30;
player_y=40;

block_img_width=30;
block_img_height=30;

player_object="";
block_img_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img) 
    {
         player_object=Img;

         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set({
         top:player_y,
         left:player_x
         });
        canvas.add(player_object); 
     } );
}

        function new_images(get_image)
        {
         fabric.Image.fromURL(get_image,function(Img) 
         {
              block_img_object = Img;
     
              block_img_object.scaleToWidth(block_img_width);
              block_img_object.scaleToHeight(block_img_height);
              block_img_object.set({
              top:player_y,
              left:player_x
              });
             canvas.add(block_img_object); 
          } );  
        }

        window.addEventListener("keydown",my_Keydown);

        function my_Keydown(e)
        {
            keyPressed = e.keyCode;
            console.log(keyPressed);
            if(e.shiftkey == true && keyPressed == '80')
            {
                console.log("p and shift pressed together");
                block_img_height = block_img_height +10;
                block_img_width = block_img_width +10;
                document.getElementById("curent_height").innerHTML =block_img_height;
                document.getElementById("curent_width").innerHTML =block_img_width;
            }

            if(e.shiftkey == true && keyPressed == '77')
            {
                console.log("m and shift pressed together");
                block_img_height = block_img_height -10;
                block_img_width = block_img_width -10;
                document.getElementById("curent_height").innerHTML =block_img_height;
                document.getElementById("curent_width").innerHTML =block_img_width;
            }

            if(keyPressed =='38')
            {
               up();
               console.log('up');
            }
            if(keyPressed =='40')
            {
               down();
               console.log('down');
            }
            if(keyPressed =='37')
            {
               left();
               console.log('left');
            }
            if(keyPressed =='39')
            {
               right();
               console.log('right');
            }

            if(keyPressed =='83')
            {
               new_images("ston.png");
               console.log('S');
            }
        }


        function up()
        {
           if(player_y >=0)
           {
              player_y = player_y - block_img_height;
              console.log("block img height = "+block_img_height);
              console.log("when up arrow key is pressed x =" + player_x +", y =" + player_y);
              canvas.remove(player_object);
              player_update();
           }
        }

        function down()
        {
           if(player_y <=500)
           {
              player_y = player_y + block_img_height;
              console.log("block img height = "+block_img_height);
              console.log("when down arrow key is pressed x =" + player_x +", y =" + player_y);
              canvas.remove(player_object);
              player_update();
           }
        }


        function right()
        {
           if(player_x <=700)
           {
              player_x = player_x + block_img_width;
              console.log("block img height = "+block_img_width);
              console.log("when up arrow key is pressed x =" + player_x +", y =" + player_y);
              canvas.remove(player_object);
              player_update();
           }
        }
        function left()
        {
           if(player_x >=0)
           {
              player_x = player_x - block_img_width;
              console.log("block img height = "+block_img_width);
              console.log("when up arrow key is pressed x =" + player_x +", y =" + player_y);
              canvas.remove(player_object);
              player_update();
           }
        }