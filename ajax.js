/**
 * Created by 2017.4.29 on 2017/11/6.
 */
var oAjax=function () {
    if (window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }
    else {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    oAjax.open('GET','test.txt?t='+new Date().getTime(),true);
    oAjax.send();
    oAjax.onreadystatechange=function () {
        if(oAjax.readyState==4){
            if(oAjax.status==200){
                alert('成功'+oAjax.responseText);
            }
            else {
                alert('失败'+oAjax.status);
            }
        }
    }
}
