export function objectUser(){
    let user = {
        name: John
    }
    user.age = prompt('Enter the number: ');
    let admin = Object.assign({},user,{role:admin});
    let {name,age,role}=admin;
}


/* Создайте объект user, содержащий поле name со
значением ‘John’.
1.Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
2.Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.
*Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей. */