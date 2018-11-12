var imclib = {

    valor_imc: function valor_imc(peso, altura) {
        return peso / altura ** 2;
    },

    classificacao_imc: function classificacao_imc(imc) {
        if (imc < 18.5) {
            return "Abaixo do Peso";
        } else if (imc < 25) {
            return "Peso normal";
        } else if (imc < 30) {
            return "Sobrepeso";
        } else if (imc < 35) {
            return "Obesidade Grau I";
        } else if (imc < 40) {
            return "Obesidade Grau II";
        } else if (imc > 40) {
            return "Obesidade Grau III";
        } else {
            return "Aguardando valores de entrada..."
        }
    }
};
