function menuBtn(id) {
    $('.navi-list').toggleClass('on');
    if(!$(id).hasClass('on')){
        $(id).addClass('on');
    }else{
        window.location.href='board.html';
    }
}

function utilBtn(id) {
    $(id).toggleClass('on');
    $('.util-list').toggleClass('on');
}

function searchBtn() {
    let searchText = $('#searchTxt').val();
    alert(`${searchText} <- 입력
    검색기능 준비 중 입니다.`);
}

