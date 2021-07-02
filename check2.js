// DH - Programação Imperativa - Checkpoint 2 - Tony Jonas

let menu = {
    pipoca: 12,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8
}

let usuario = (comida, tempo) => {
    if (menu.hasOwnProperty(comida)) {
        for (let prato in menu){
            switch (comida) {
                case prato:
                    if (tempo >= menu[prato]*3){
                        console.log("kabummm")
                    } else if (tempo > menu[prato]*2){
                        console.log("A comida queimou, resete tudo")
                    } else if (tempo < menu[prato]){
                        console.log("Tempo insuficiente")
                    } else {
                        console.log("Prato pronto, bom apetite!!!")
                    }
                    break;
            }
        }
    } else {
        console.log("Escolha um prato válido")
    }
}

// Testes
usuario('arroz', 37); // Escolha um prato válido
usuario('pipoca', 36); // Kabum
usuario('pipoca', 11); // Tempo insuficiente
usuario('pipoca', 25); // A comida queimou
usuario('pipoca', 24); // Bom apetite
