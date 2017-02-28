var nums=new Array();
var score=0;


$(function(){

	newGame();


});

function newGame(){
	init();

	generateNumber();
	generateNumber();
}


function init(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var gridCell=$("#grid-cell-"+i+"-"+j);
			gridCell.css("top",getPosTop(i,j));
			gridCell.css("left",getPosLeft(i,j));
		}
	}

	for(var i=0;i<4;i++){
		nums[i]=new Array();
		for(var j=0;j<4;j++){
			nums[i][j]=0;
		}
	}
	updateView();
}

function updateView(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var numberCell=$("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
			$("#grid-container").append(numberCell);

			if(nums[i][j]==0){
				numberCell.css("width","0px");
				numberCell.css("height","0px");
				numberCell.css("top",getPosTop(i,j)+50);
				numberCell.css("left",getPosLeft(i,j)+50);

			}else{
				numberCell.css("width","100px");
				numberCell.css("height","100px");
				numberCell.css("top",getPosTop(i,j));
				numberCell.css("left",getPosLeft(i,j));
				numberCell.css("background-color",getNumberBackgroundColor(nums[i][j]));
				numberCell.css("color",getNumberColor(nums[i][j]));
				numberCell.text(nums[i][j]);
			}
		}
	}
}


function generateNumber(){
	//判断是否还有空位置
	if(noSpace(nums)){
		return;
	}

	//随机一个位置，思路：把所有空位置取出来放到一个新数组中
	var count=0; //空位置的个数
	var temp=new Array(); //13
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(nums[i][j]==0){   // 2  3
				temp[count]=i*4+j;  // 2*4+3=11 
				count++;			// 11/4=2  11%4=3
			}
		}
	}
	var pos=Math.floor(Math.random()*count)
	var x=Math.floor(temp[pos]/4);
	var y=Math.floor(temp[pos]%4);

	//随机一个数字：2和4
	var randomNumber=Math.random()>0.5?2:4;
	nums[x][y]=randomNumber;

	showNumberWithAnimation(x,y,randomNumber);
}











