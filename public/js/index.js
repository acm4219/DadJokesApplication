$(document).ready(() => {
    const $joke = $("#joke");
    const $punchline = $("#punchline");
    const $jokeList = $(".list-container .list-group");
    const $jokeItem = $(".joke-item")

    // const $jokeItem = $(.joke-item)
    // const activeJoke = {};

    console.log($jokeList)


    $jokeItem.on("click", function (event) {
        event.preventDefault()

        let jokeid = $(this).data("jokeid");
        let jokename = $(this).data("jokename")
        let jokepunchline = $(this).data("jokepunchline")
        console.log(jokeid)
        console.log(jokename)

        $joke.text(jokename);
        $punchline.text(jokepunchline);
        $joke.attr("readonly", false);
        $punchline.attr("readonly", false);
    });


})



// $(function () {
// const $joke = $("#joke");
// const $punchline = $("#punchline");
// const $jokeList = $(".list-container .list-group");
// const $jokeBtn =$(".joke-item")
// let activeJoke = {};
// const handleJokeView = function () {
//     $jokeList = $(this).data();
//     renderActiveJoke();
// };
// const renderActiveJoke = () => {
//     if (activeJoke.id) {
//         $joke.val($jokeList.name);
//         $punchline.val($jokeList.punchline);
//     } else {
//         $joke.attr("readonly", false);
//         $punchline.attr("readonly", false);
//         $joke.val("Joke");
//         $punchline.val("Punchline");
//     }
// };
//     $("#joke-item").on("submit", function (event) {
//         event.preventDefault();
//         console.log("Testing")
//     })
// })





