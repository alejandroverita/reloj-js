(function(){
    var actualizarHora= function(){
        //objeto de tipo DATE
        var fecha= new Date(),
            horas=fecha.getHours(),
            ampm,
            minutos=fecha.getMinutes(),
            segundos=fecha.getSeconds(),
            diaSemana=fecha.getDay(),
            dia=fecha.getDate(),
            mes=fecha.getMonth(),
            year=fecha.getFullYear();

        //acceder a cada elemento en el index
        var pHoras = document.getElementById("horas"),
            pAMPH = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia= document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        var semana=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        
        //se almacena el arreglo y en la var pDiaSemana
        pDiaSemana.textContent=semana[diaSemana];

        pDia.textContent =dia;

        var meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        pMes.textContent=meses[mes];


    };

        

    actualizarHora();
}())