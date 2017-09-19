function lybpage(lybpageobj) { //根据对象生成分页按钮 生成带数字的跳转页面按钮一共11个

    var data = "";
    var lybpageauto = ""; //专门存放页面用的
    if (lybpageobj.allpage <= 0) {
        $(lybpageobj.rongqiclass).html($("<div class='lybpagecontainer' style='border:1px solid gray; display:inline-block;'><div class='lybpageinfo' style='text-align:center;'>暂时没有数据</div></div>"));
        return;
    }
    if (lybpageobj.allpage <= 11) {
        for (var i = 1; i <= lybpageobj.allpage; i++) {
            if (i == lybpageobj.nowpage) {
                lybpageauto += "<a class='pagenum btn btn-danger'>" + i + "</a>";
            } else {
                lybpageauto += "<a class='pagenum btn btn-info'>" + i + "</a>";
            }
        }
    } else {
        if (lybpageobj.nowpage <= 6) { //生成1-11
            for (var i = 1; i <= 11; i++) {
                if (i == lybpageobj.nowpage) {
                    lybpageauto += "<a class='pagenum btn btn-danger'>" + i + "</a>";
                } else {
                    lybpageauto += "<a class='pagenum btn btn-info'>" + i + "</a>";
                }
            }
        } else if (lybpageobj.nowpage + 5 > lybpageobj.allpage) { //当前页是紧邻最后一页 从最后一页生成 生成倒数11个页面
            for (var i = (lybpageobj.allpage - 10); i <= lybpageobj.allpage; i++) {
                if (i == lybpageobj.nowpage) {
                    lybpageauto += "<a class='pagenum btn btn-danger'>" + i + "</a>";
                } else {
                    lybpageauto += "<a class='pagenum btn btn-info'>" + i + "</a>";
                }
            }

        } else { //生成当前页的前5页和当前页以及后5页
            for (var i = (lybpageobj.nowpage - 5); i <= lybpageobj.nowpage + 5; i++) {
                if (i == lybpageobj.nowpage) {
                    lybpageauto += "<a class='pagenum btn btn-danger'>" + i + "</a>";
                } else {
                    lybpageauto += "<a class='pagenum btn btn-info'>" + i + "</a>";
                }
            }
        }

    }
    var html = "<div class='lybpagecontainer' style=' display:inline-block;'><div class='lybpagemode'><a class='lybup btn btn-success'>上一页</a></div><div class='lybpageitem lybpagemode'>" + lybpageauto + "</div><div class='lybpagemode'><a class='lybdown btn btn-success'>下一页</a></div><div class='clear'></div><div class='lybpageinfo' style='text-align:center;'>一共" + lybpageobj.allpage + "页，当前第" + lybpageobj.nowpage + "页</div></div>";
    $(lybpageobj.rongqiclass).html($(html));
    return html;
}
