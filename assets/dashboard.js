function changeDays(day_id){
    let intro = document.getElementById("content");
    let day = document.getElementById(day_id);

    intro.style.display = 'none';
    day.style.display = "block";
}