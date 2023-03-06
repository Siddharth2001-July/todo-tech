// DELETE ITEM
$('#del').click(function (e) {
    e.preventDefault();
    let checked = new Array()
    let all = $('#todo-list li input:checkbox:checked');
    all.each(function () {
        $(this).parent('li').remove()
    });
});

// SELECT ALL
$('#all').click((e) => {
    e.preventDefault()
    $('#todo-list li input').prop('checked', true)
})
// DESELECT ALL
$('#de-all').click((e) => {
    e.preventDefault()
    $('#todo-list li input').prop('checked', false)
})


// ADD ITEM
$('#add-form').on('submit', (e) => {
    e.preventDefault();
    let todo = $('#input-text').val()
    $('#todo-list').append(
        '<li><input type="checkbox"><h4>' + todo + '</h4></li>'
    )
    // document.getElementById('add-form').reset()
    $('#input-text').val('')
});