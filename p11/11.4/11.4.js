var returnedResult = prompt("Введіть число від 1 до 10");

switch(returnedResult){
    case "1":
        document.write ("<p>В породі " + returnedResult + " " + "мінерал" + "<\/p>");
        break;
    default:
        document.write ("<p>В породі " + returnedResult + " " + "мінерали" + "<\/p>");
}

/* var returnedResult = prompt("Введіть число від 1 до 10");

var suffix = parseInt(returnedResult, 10) == 1 ? "мінерал" : "мінерали";

// нам вообще не нужен свитч тут, можно просто писать document.write ("<p>В породі " + returnedResult + " " + suffix+ "<\/p>");

switch(returnedResult){
    default:
        document.write ("<p>В породі " + returnedResult + " " + suffix+ "<\/p>");
} */