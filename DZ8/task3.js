function whoIsYounger(){
    let birthDay1 = '30.10.1998';
    let birthDay2 = '23.08.1999';
    let birthDay1Date = new Date(birthDay1.split(".")[2],birthDay1.split(".")[1]-1,birthDay1.split(".")[0]);
    let birthDay2Date = new Date(birthDay2.split(".")[2],birthDay2.split(".")[1]-1,birthDay2.split(".")[0]);
    if (birthDay1Date < birthDay2Date) console.log("Second is younger");
    else console.log("First is younger");
}

/*3.*В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя.*/