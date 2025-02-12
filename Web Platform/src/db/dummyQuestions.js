
export const dummyQuestions = [
    {
        //1p
        id: 1,
        title: "Características dos Usuários Emergentes",
        description: "Quais dessas características denominam um usuário emergente?",
        category: "Personas",
        options: [
            { id: 1, text: "Ter facilidade utilizar o celular e o computador.", value: false },
            { id: 2, text: "Estar distantes da zona urbana e enfrentar barreiras de uso das tecnologias.", value: true },
            { id: 3, text: "Ser desenvolvedor de software e usuário do sistema.", value: false },
            { id: 4, text: "Saber realizar pagamentos via Pix.", value: false },
            { id: 5, text: "Ter acompanhado os avanços da tecnologia.", value: false }
        ]
    },
    {
        //2p
        id: 2,
        title: "Características dos Usuários Emergentes",
        description: "Quais dessas dificuldades os usuários emergentes enfrentam em seu cotidiano?",
        category: "Personas",
        options: [
            { id: 1, text: "Apenas ao acesso à escolaridade.", value: false },
            { id: 2, text: "Apenas ao acesso aos programas do governo.", value: false },
            { id: 3, text: "Apenas ao acesso à saúde.", value: false },
            { id: 4, text: "Apenas ao acesso aos serviços financeiros.", value: false },
            { id: 5, text: "Acesso a qualquer serviço tradicional (escola, programas sociais, saúde, financeiros, etc), desde que seja mediado por tecnologias digitais.", value: true }
        ]
    },
    {
        //1c
        id: 1,
        title: "Considerações de design para ilustração",
        description: "Sobre as considerações de ilustrações, o sistema deve:",
        category: "Considerações",
        options: [
            { id: 1, text: "Um sistema não deve apresentar ilustrações animadas.", value: false },
            { id: 2, text: "Não há retorno sobre o investimento desse tipo de recurso.", value: false },
            { id: 3, text: "Um sistema deve apresentar ilustrações que estejam em coerência com as vivências dos usuários.", value: true },
            { id: 4, text: "A ilustração não deve ser uma preocupação do design, pois não melhora a interação de usuários emergentes.", value: false },
            { id: 5, text: "Deve-se utilizar apenas texto, pois os usuário entenderão com facilidade o que deve ser feito.", value: false }
        ]
    },
    {
        //2c
        id: 2,
        title: "Considerações de design para entrada de dados",
        description: "Sobre as considerações de entrada de dados, o sistema deve:",
        category: "Considerações",
        options: [
            { id: 1, text: "Mostrar as informações solicitadas.", value: false },
            { id: 2, text: "Agrupar formulários na mesma tela.", value: false },
            { id: 3, text: "Inserir dados apenas por teclado.", value: true },
            { id: 4, text: "Realizar busca apenas por áudio.", value: false },
            { id: 5, text: "Eventos de clique em botões são opcionais.", value: false }
        ]
    },
    {
        //3c
        id: 3,
        title: "Considerações de design para saída de dados",
        description: "Sobre as considerações de saída de dados, o sistema deve:",
        category: "Considerações",
        options: [
            { id: 1, text: "Disponilizar informações sobre finalização de tarefas são opcionais.", value: false },
            { id: 2, text: "Apresentar animações de interação são opcionais.", value: false },
            { id: 3, text: "Fornecer com clareza os dados solicitados.", value: true }
        ]
    },
    {
        //4c
        id: 4,
        title: "Considerações de design para interface",
        description: "Sobre a interface, é correto afirmar",
        category: "Considerações",
        options: [
            { id: 1, text: "Ícones de fácil compreensão são opcionais.", value: false },
            { id: 2, text: "Menu de ajuda são opcionais.", value: false },
            { id: 3, text: "Textos de fácil compreensão são fundamentais para o entendimento da tarefa.", value: true },
            { id: 4, text: "Forneça ícones pequenos com design minimalista por todo aplicativo.", value: false },
            { id: 5, text: "Palavras destacadas dificultam a compreensão da tarefa.", value: false }
        ]
    },
    {
        //5c
        id: 5,
        title: "Considerações de design para áudio",
        description: "Sobre as considerações de design sobre áudio, é correto afirmar:",
        category: "Considerações",
        options: [
            { id: 1, text: "Configurações de áudio são configuradas pelo sistema operacional.", value: false },
            { id: 2, text: "Recursos de áudio são opcionais.", value: false },
            { id: 3, text: "Recursos de áudio devem estar presente em todo aplicativo.", value: true },
            { id: 4, text: "Pesquisa por áudio devem ser disponibilizadas em menu de ajuda.", value: false },
            { id: 5, text: "As notificações não devem reproduzir áudio.", value: false }
        ]
    }
];
