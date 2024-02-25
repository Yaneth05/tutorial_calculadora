//hagarrar los dif elementos
const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

//escuchador de eventos, el cual escucha cd q se haga clic en el btn
btnCalcular.addEventListener('click', calcular)

//crear la funcion que se ejecute cd vez q se oprima el btn calcular
function calcular(){
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)//parseFloat=se cambia a un numero y tmbn puede ser decimal
    const op2 = parseFloat(txtOp2.value)
    //checar q nos pasen el valor correcto q se pide en el input operador
    console.log("apretaste el btn calcular")
    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/")
     && !isNaN(op1) && !isNaN(op2))//isNaN: sig si no es un numero
    {
        let resultado;
        switch (operacion) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }
        pResultado.style = "color:black"//volver al texto negro
        pResultado.innerText = "Resultado = "+ resultado //msj en pantalla
    }else{
        pResultado.style = "color:red"//poner el msj en rojo unicamnete cuando haya un error
        pResultado.innerText = "calculo imposible" //msj en pantalla
    }
}