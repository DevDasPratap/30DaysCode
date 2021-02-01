jQuery('.quarter').click(function(){
    if ( jQuery(this).hasClass('active') ) {
        jQuery(this).removeClass('active')
        jQuery(this).find('.day_dropdown').slideUp();

    }else{
        jQuery(".quarter:not(this) .day_dropdown").slideUp();
        jQuery(".quarter:not(this)").removeClass('active');
        jQuery(this).addClass('active')
        jQuery(this).find('.day_dropdown').slideDown();
    }
})

// to be implemented soon
// function randomQuestion(){
//     let questions = ['https://leetcode.com/problems/h-index/','https://leetcode.com/problems/first-unique-character-in-a-string/'];
//     let question_number = Math.floor(Math.random() * 100);

//     // opens the question in a new tab - leetcode
//     // window.open(questions[question_number], '_blank');
//     window.open('https://leetcode.com/problems/random-one-question/all','_blank'

// }