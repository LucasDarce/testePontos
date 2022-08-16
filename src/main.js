const numeros = [1, 2, 3, 4, 5, 7, 8, 10];
    
    const pontos = numeros.map( (numero) => {
        if(numero === 5){
        return 5;
        }

        return numero % 2 === 0 ?  1 : 3
    });

    console.log(pontos);

    const totalPontos =  pontos.reduce((a, b) => a + b, 0);

    console.log(totalPontos);