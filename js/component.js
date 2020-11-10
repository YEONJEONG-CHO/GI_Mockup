function menuBtn() {
    $('.navi-list').toggleClass('on');
}

function utilBtn(id) {
    $(id).toggleClass('on');
    $('.util-list').toggleClass('on');
}

function searchBtn() {
    let searchText = $('#searchTxt').val();
    alert("테스트");
}

