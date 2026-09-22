const classe = "Mago";

switch (classe) {
    case "Guerreiro":
        console.log ("Classe: Guerreiro");
        console.log ("O guerrero é um combatente corpo a corpo, especializado em força e resistência.");
        console.log ("Habilidadea: Ataque poderoso, defesa sólida, fúria de batalha");
        break;
    case "Mago":
        console.log ("Classe: Mago");
        console.log ("O mago é um conjuradoe de feitiços, especializado em magia ofensiva e suporte.");
        console.log ("Habilidadea: magia de fogo, magia de gelo, magia de cura");
        break;
    case "Arqueiro":
        console.log ("Classe: Arqueiro");
        console.log ("O arqueiro é um atirador de longa distância, especializado em precisão e agilidade.");
        console.log ("Habilidadea: Precisão, agilidade, tiro com precisão");
        break;
    case "Ladino":
        console.log ("Classe: Ladino");
        console.log ("O ladino é um especialista em furtividade e trapas, utilizado para sabotagem e espionagem.");
        console.log ("Habilidadea: Furtividade, trapas, assasínio");
        break;
    default:
        console.log("Classe desconhecida. Por favor, escolha entre guerreiro, mago, arqueiro ou ladino.");
}