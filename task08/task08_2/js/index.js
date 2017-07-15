/**
 * Created by OU on 2017/7/12 0012.
 */
window.onload = function () {
    //1.获取标签
    //获取用户名
    var username = document.getElementById('username');
    username.onchange = function () {
        judge(/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,20}$/, username, 'userTips', '用户名长度只能在4-20位字符之间');
    };
    username.onclick = function () {
        document.getElementById('userTips').innerHTML = '4-20位字符、支持汉字、字母、数字以及“-”、“_”组合';
    };
    //获取密码
    var userpwd = document.getElementById('userpwd');
    var pwdagain = document.getElementById('pwdagain');
    userpwd.onchange = function () {
        judge(/^.*[A-Za-z0-9\w_-]{6,20}$/, userpwd, 'pwdTips1', '密码长度只能在6-20位字符之间');
    };
    userpwd.onclick = function () {
        document.getElementById('pwdTips1').innerHTML = '6-20位字符,建议由字母和数字组合';
    };
    pwdagain.onchange = function () {
        if (pwdagain.value == userpwd.value) {
            tips('pwdTips2');
        } else {
            document.getElementById('pwdTips2').innerHTML = '两次密码输入不一致';
            pwdagain.style.borderColor = 'red';
        }
    };
    pwdagain.onclick = function () {
        document.getElementById('pwdTips2').innerHTML = '请再次输入密码';
    };
    //获取公司名称
    var companyname = document.getElementById('companyname');
    companyname.onchange = function () {
        judge(/^[A-Za-z0-9_\-\u4e00-\u9fa5]{2,20}$/, companyname, 'com-nameTips', '请正确输入');
    };
    companyname.onclick = function () {
        document.getElementById('com-nameTips').innerHTML = '2-20位字符、支持汉字、字母、数字以及“-”、“_”组合';
    };
    //获取公司地址
    var companyaddress = document.getElementById('companyaddress');
    companyaddress.onchange = function () {
        judge(/^[A-Za-z0-9_\\#\-\u4e00-\u9fa5]{2,20}$/, companyaddress, 'addressTips', '请正确输入');
    };
    companyaddress.onclick = function () {
        document.getElementById('addressTips').innerHTML = '广东省珠海市文化广场18号A座11层';
    };
    //获取联系人姓名
    var contactname = document.getElementById('contactname');
    contactname.onchange = function () {
        judge(/^[A-Za-z\u4e00-\u9fa5]{2,20}$/, contactname, 'contactnameTips', '联系人姓名长度只能在2-20位字符之间');
    };
    contactname.onclick = function () {
        document.getElementById('contactnameTips').innerHTML = '2-20位字符，可由中文或英文组成';
    };
    //获取所在部门
    var department = document.getElementById('department');
    department.onchange = function () {
        if (department.value == null || department.value == '') {
            document.getElementById('departmentTips').innerHTML = '部门不能为空';
        } else {
            tips('departmentTips');
        }
    };
    //获取固定电话
    var phone = document.getElementById('phone');
    phone.onchange = function () {
        judge(/^[0-9\-()]{7,18}$/, phone, 'phoneTips', '电话格式有错，请重新输入');
    };
    phone.onclick = function () {
        document.getElementById('phoneTips').innerHTML = '如：0797-2570112';
    };
    //获取手机号
    var checkphone = document.getElementById('checkphone');
    checkphone.onchange = function () {
        judge(/^0?(13|15|17|18|14)[0-9]{9}$/, checkphone, 'checkphoneTips', '手机号码格式有错，请重新输入');
    };
    checkphone.onclick = function () {
        document.getElementById('checkphoneTips').innerHTML = '请输入本人的手机号，以接收验证码'
    };
    //获取短信验证码
    var btn = document.getElementById('btn');
    btn.onclick = function () {
        document.getElementById('msgcode').value = '4832';
    };
    //获取验证码
    var checkcode = document.getElementById('checkcode');
    checkcode.onchange = function () {
        if (!(checkcode.value == 'KVSM' || checkcode.value == 'kvsm')) {
            document.getElementById('checkcodeTips').innerHTML = '请正确输入验证码';
        } else {
            tips('checkcodeTips');
        }
    };

    // 全选，反选按钮
    var selAll = document.getElementById('selAll');
    var buytype = document.getElementsByName('buytype');
    selAll.onclick = function () {
        for (var i = 0; i < buytype.length; i++) {
            var e = buytype[i];
            e.checked = !e.checked;
        }
    };
    //获取购买类型/用途
    buytype.onclick = function () {
        if (chkcheckbox('buytype') == true) {
            tips('buytypeTips');
        } else {
            document.getElementById('buytypeTips').innerHTML = '请选择至少一项';
        }
    };

    //城市级联
    var arr = new Array();
    var arr2 = new Array();
    //js数组支持的下标支持中文。js中的没有二维数组直说，我们仅仅是变量中又可以存储数组
    arr['北京'] = ['朝阳区', '海淀区', '西城区'];
    arr['广东'] = ['广州', '深圳', '珠海'];
    arr['上海'] = ['黄浦区', '卢湾区', '徐汇区'];
    arr2['广州'] = ['天河区', '海珠区', '荔湾区', '越秀区'];
    arr2['深圳'] = ['龙岗区', '福田区', '宝安区', '南山区'];
    arr2['珠海'] = ['香洲区', '斗门区', '金湾区', '吉大区', '拱北区'];
    arr2['朝阳区'] = ['三环以内', '三环到四环', '四环到五环'];
    arr2['海淀区'] = ['三环以内', '三环到四环', '四环到五环'];
    arr2['西城区'] = ['内环到二环', '二环到三环'];
    arr2['黄浦区'] = ['内环以内', '内环中环之间', '中环外环之间'];
    arr2['卢湾区'] = ['内环以内', '内环中环之间', '中环外环之间'];
    arr2['徐汇区'] = ['内环以内', '内环中环之间'];
    var comprovince = document.getElementById('comprovince');
    var comcity = document.getElementById('comcity');
    //for in获取的是下标
    for (var temp in arr) {
        comprovince.add(new Option(temp, temp));
        //console.info("下标："+temp+",值为:"+arr[temp]);
    }
    comprovince.onchange = function () {
        //清空下拉列表框信息
        var comcity = document.getElementById("comcity");
        comcity.length = 1;
        //获取选中的省会信息,value值就是底下option的value值，即为广东省等
        var comprovince = document.getElementById("comprovince").value;
        //如果选择的是"提示信息"就是"选择省会",则不赋值
        if (comprovince == "")
            return;
        for (var i = 0; i < arr[comprovince].length; i++) {
            comcity.add(new Option(arr[comprovince][i], arr[comprovince][i]));
        }
    };
    comcity.onchange = function () {
        //清空下拉列表框信息
        var comarea = document.getElementById("comarea");
        comarea.length = 1;
        //获取选中的市的信息,value值就是底下option的value值，即为广州市
        var comcity = document.getElementById("comcity").value;
        //如果选择的是"提示信息"就是"选择市",则不赋值
        if (comcity == "")
            return;
        for (var i = 0; i < arr2[comcity].length; i++) {
            comarea.add(new Option(arr2[comcity][i], arr2[comcity][i]));
        }
    };

    //提交表单
    var submitBtn = document.getElementById('submitBtn');
    var formcompany = document.getElementById('formcompany');
    submitBtn.onclick = function () {
        if (judge(/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,20}$/, username, 'userTips', '用户名长度只能在4-20位字符之间') == false || judge(/^.*[A-Za-z0-9\w_-]{6,20}$/, userpwd, 'pwdTips1', '密码长度只能在6-20位字符之间') == false || judge(/^[A-Za-z0-9_\-\u4e00-\u9fa5]{2,20}$/, companyname, 'com-nameTips', '请正确输入') == false || judge(/^[A-Za-z0-9_\\#\-\u4e00-\u9fa5]{2,20}$/, companyaddress, 'addressTips', '请正确输入') == false || judge(/^[A-Za-z\u4e00-\u9fa5]{2,20}$/, contactname, 'contactnameTips', '联系人姓名长度只能在2-20位字符之间') == false || judge(/^[0-9\-()]{7,18}$/, phone, 'phoneTips', '电话格式有错，请重新输入') == false || judge(/^0?(13|15|17|18|14)[0-9]{9}$/, checkphone, 'checkphoneTips', '手机号码格式有错，请重新输入') == false) {
            alert('请填写完善内容再提交');
        } else {
            formcompany.submit();
        }
    };
    //京东注册协议弹窗
    var re = document.getElementById('re');
    var re2 = document.getElementById('re2');
    var login = document.getElementById('login');
    var login2 = document.getElementById('login');
    var thickdiv = document.getElementById('thickdiv');
    re.onclick = function (event) {
        //点击按钮，panel和login显示，由于事件冒泡，当触发文档点击的时候，又要隐藏panel和login，此时又显示又隐藏，就出不了效果，所以要阻止冒泡
        var event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
        //panel和login显示
        thickdiv.style.display = 'block';
        login.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    re2.onclick = function (event) {
        //点击按钮，panel和login显示，由于事件冒泡，当触发文档点击的时候，又要隐藏panel和login，此时又显示又隐藏，就出不了效果，所以要阻止冒泡
        var event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
        //panel和login显示
        thickdiv.style.display = 'block';
        login2.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    var btnt = document.getElementById('btnt');
    btnt.onclick = function () {
        thickdiv.style.display = 'none';
        login.style.display = 'none';
        document.body.style.overflow = 'auto';

    }
    var btnt2 = document.getElementById('btnt');
    btnt2.onclick = function () {
        thickdiv.style.display = 'none';
        login2.style.display = 'none';
        document.body.style.overflow = 'auto';

    }
}