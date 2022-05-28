
function conversorPlazo(opcion) {
    switch (opcion) {
        case 30:
            return 1;
            break;
        case 60:
            return 2;
            break;
        case 90:
            return 3;
            break;
        case 120:
            return 4;
            break;
        case 150:
            return 5;
            break;
        case 180:
            return 6;
            break;
        case 210:
            return 7;
            break;
        case 240:
            return 8;
            break;
        case 270:
            return 9;
            break;
        case 300:
            return 10;
            break;
        case 330:
            return 11;
            break;
        case 360:
            return 12;
            break;
        default:
            return "El plazo ingresado es incorrecto. Por favor ingresar los siguientes plazos: \n 30 \n 60 \n 90 \n 120 \n 150 \n 180 \n 210 \n 240  \n 270 \n 300 \n 330 \n 360";
            break;
    }
}

