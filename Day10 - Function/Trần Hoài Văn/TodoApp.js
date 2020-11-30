$(document).ready(function () {
    if (localStorage['data'] == null) {
        let arr = [];
        localStorage['data'] = JSON.stringify(arr);
    }
    let showdata = JSON.parse(localStorage['data']);
    let dataArr = showdata;
    index = showdata.length;
    show(showdata);

    $('#cross').click(function () {
        $('input').removeClass('alert');
        $('input').attr('placeholder', 'Add new task here');
        let val = $('#inputadd').val();
        if (val == '') {
            $('input').addClass('alert');
            $('input').attr('placeholder','!Please input task')
            return false;
        }
        $('#inputadd').val('');
        dataArr.push({ value: val, index: index++,status: 'active'});
        $('.task1').append(` 
        <div class="task_main" id="${index-1}">
                <div>${val}</div>
                <div style="display:flex; width: 50px;">
                    <div class="task_tick" id="tick"></div>
                    <div class="task_remove close" id="closed">
                    </div>
                </div>
        </div>`)
        localStorage['data'] = JSON.stringify(dataArr);
    })

    $("body").delegate(".close", "click", function () {
        let index = parseInt($(this).parent().parent().attr('id'));
        dataArr.splice(index, 1);
        localStorage['data'] = JSON.stringify(dataArr);
        $('.task1').html('');
        show(dataArr);
    });
    
    $("body").delegate(".task_tick", "click", function () { 
        // $(this).attr('hidden', '');
        $(this).addClass('ticked')
        let index = parseInt($(this).parent().parent().attr('id'));
        dataArr[index].status = 'complete';
        localStorage['data'] = JSON.stringify(dataArr);
    })
    
    $('.removebtn').click(function () {
        dataArr = [];
        text = '';
        $('.task1').html('');
        localStorage['data'] = JSON.stringify(dataArr);
    })

    function show(dataArr) {
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i].status == 'active') {
                $('.task1').append(` 
            <div class="task_main" id="${i}">
                    <div>${dataArr[i].value}</div>
                    <div style="display:flex; width: 50px;">
                        <div class="task_tick" id="tick"></div>
                        <div class="task_remove close" id="closed">
                        </div>
                    </div>
            </div>`)
            } else {
                $('.task1').append(` 
                <div class="task_main" id="${i}">
                        <div>${dataArr[i].value}</div>
                        <div style="display:flex; width: 50px;">
                            <div class="task_tick ticked" id="tick"></div>
                            <div class="task_remove close" id="closed">
                            </div>
                        </div>
                </div>`)
            }
        }
    }

}) 
