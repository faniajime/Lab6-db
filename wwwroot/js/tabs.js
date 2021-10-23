﻿var questions = [
    {
        id: "1",
        question: "5+2-(2/2)",
        answer: "6",
    },
    {
        id: "2",
        question: "89(4-2)",
        answer: "144",
    },
    {
        id: "3",
        question: "10/5 - 2/2",
        answer: "1",
    },
    {
        id: "4",
        question: "88-6(2-1)",
        answer: "58",
    },
    {
        id: "5",
        question: "314-8(3+32)-5",
        answer: "-243",
    },
    {
        id: "6",
        question: "87-52(8-39-40)",
        answer: "3748",
    },
    {
        id: "7",
        question: "1+5(3/2+1)4",
        answer: "51",
    },
    {
        id: "8",
        question: "(3-32(100/200))-1",
        answer: "13",
    },
    {
        id: "9",
        question: "2+3(76-1)/15-8",
        answer: "9",
    },
    {
        id: "10",
        question: "26-8+32(-1)",
        answer: "-28",
    },
    {
        id: "11",
        question: "78-45(32/4+3)+3282",
        answer: "217",
    },
    {
        id: "12",
        question: "(88-32(67-2)+30)/3-1",
        answer: "662",
    },
    {
        id: "13",
        question: "8-42+39/3",
        answer: "13",
    },
    {
        id: "14",
        question: "1+1+1-2(64-20/2)-1",
        answer: "111",
    },
    {
        id: "15",
        question: "8-4(25/53)",
        answer: "-52",
    },
    {
        id: "16",
        question: "35-16(4/2-56/4)",
        answer: "207",
    },
    {
        id: "17",
        question: "(89-(88-43/2)(32-6))+ 1040",
        answer: "7",
    },
    {
        id: "18",
        question: "64+32+2(64/8)-16",
        answer: "96",
    },
    {
        id: "19",
        question: "3+517(785/9+10)",
        answer: "4536.33333333",
    },
    {
        id: "20",
        question: "48+321002/5-8*(39-3)+0.2",
        answer: "6173",
    },
];

function clear(tamanio) {

    for (var i = 0; i < tamanio; i++) {
        $("#tasks").empty();
    }
}



function Select() {

    var n = document.getElementById("CantidadEjercicios").value;
    if (n >= 5 & n <= 20) {
        clear(n);
        for (var i = 0; i < n; i++) {
            $("#tasks").append('<li> <span class="hint">' + questions[i].question + '</span> <input type="number" size="21"             value=""           id="solution1_1" tabindex="11"                   name="solution1_1"                               class="ex_textfield"                 autocapitalize="off" requerid> </li>');
        }
    } else {
        clear(n);
        document.getElementById("CantidadEjercicios").value = "";
        alert("El numero debe estar entre 5 y 20");
    }

}