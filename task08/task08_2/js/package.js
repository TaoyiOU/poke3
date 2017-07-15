/**
 * Created by OU on 2017/7/14 0014.
 */
//封装一个函数，用来实现打钩功能
function tips(tip) {
    document.getElementById(tip).innerHTML = '<em style="color: green;font-size: 20px">√</em>';
}
//封装一个函数，用来判断用户输入的值并提示
function judge(regular,ids,tip,texts) {
    if(regular.test(ids.value)){
        tips(tip);
        ids.style.borderColor = '#ccc';
    }else{
        document.getElementById(tip).innerHTML = texts;
        ids.style.borderColor = 'red';
        return false;
    }
}
//封装一个函数，用来判断checkbox是否被选中
function chkcheckbox(check) {
    var chks = document.getElementsByName(check);
    for(var i in chks){
        if(chks[i].checked == true){
            return true;
        }
    }
    return false;
}