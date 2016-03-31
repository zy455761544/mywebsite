var data=[];

var dataStr='1、壹<br>\
<br>\
地点:1<br>\
时间:1<br>\
人物:1<br>\
<br>\
<br>\
2、贰<br>\
<br>\
地点:2<br>\
时间:2<br>\
人物:2<br>\
<br>\
<br>\
3、叁<br>\
<br>\
地点:3<br>\
时间:3<br>\
人物:3<br>\
<br>\
<br>\
4、肆<br>\
<br>\
地点:4<br>\
时间:4<br>\
人物:4<br>\
<br>\
<br>\
5、伍<br>\
<br>\
地点:5<br>\
时间:5<br>\
人物:5<br>\
<br>\
<br>\
6、陆<br>\
<br>\
地点:6<br>\
时间:6<br>\
人物:6<br>\
<br>\
<br>\
7、柒<br>\
<br>\
地点:7<br>\
时间:7<br>\
人物:7<br>\
<br>\
<br>\
9、玖<br>\
<br>\
地点:9<br>\
时间:9<br>\
人物:9<br>\
<br>\
<br>\
8、捌<br>\
<br>\
地点:8<br>\
时间:8<br>\
人物:8<br>\
<br>\
<br>\
';
var d=dataStr.split('<br><br><br>')
for(var i=0;i<d.length;i++){
	var c=d[i].split('<br><br>');
	data.push({

		img:c[0].replace('、',' ')+'.jpg',
		caption:c[0].split('、')[1],
		desc:c[1]
	});
	//console.log(c[0].replace('、',' ')+'.jpg');
}
