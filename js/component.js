function menuBtn() {
    $('.navi-list').toggleClass('on');
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

