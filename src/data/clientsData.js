export const clientsData = [
  {
    id: 'cli001',
    name: "Ana Beatriz Costa",
    photoUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    hasNewMessage: true,
    newMessageCount: 2,
    lastMessagePreview: "Gostaria de saber se o item X está incluso.",
    lastMessageTimestamp: "10:32",
    isOnline: true,
    messages: [
      { id: 'msg001', sender: 'client', text: "Olá! Tenho uma dúvida sobre o orçamento que você me enviou...", timestamp: "10:30" },
      { id: 'msg002', sender: 'me', text: "Olá Ana! Claro, pode perguntar. Como posso te ajudar?", timestamp: "10:31" },
      { id: 'msg003', sender: 'client', text: "Gostaria de saber se o item X está incluso.", timestamp: "10:32" },
    ]
  },
  {
    id: 'cli002',
    name: "Ricardo Mendes Alves",
    photoUrl: "https://randomuser.me/api/portraits/men/43.jpg",
    hasNewMessage: false,
    newMessageCount: 0,
    lastMessagePreview: "Perfeito, muito obrigado pela agilidade!",
    lastMessageTimestamp: "Ontem",
    isOnline: false,
    messages: [
      { id: 'msg004', sender: 'me', text: "Ricardo, enviei a última versão do projeto para seu email.", timestamp: "Ontem às 14:20" },
      { id: 'msg005', sender: 'client', text: "Perfeito, muito obrigado pela agilidade!", timestamp: "Ontem às 14:25" },
    ]
  },
  {
    id: 'cli003',
    name: "Sofia Carvalho Lima",
    photoUrl: "https://randomuser.me/api/portraits/women/52.jpg",
    hasNewMessage: true,
    newMessageCount: 1,
    lastMessagePreview: "Podemos marcar a visita técnica para a próxima semana? Tenho disponibilidade na terça.",
    lastMessageTimestamp: "09:15",
    isOnline: true,
    messages: [
      { id: 'msg006', sender: 'client', text: "Bom dia! Adorei as primeiras ideias para a cozinha.", timestamp: "09:10" },
      { id: 'msg007', sender: 'client', text: "Podemos marcar a visita técnica para a próxima semana? Tenho disponibilidade na terça.", timestamp: "09:15" },
    ]
  },
  {
    id: 'cli004',
    name: "Jorge Antunes",
    photoUrl: "https://randomuser.me/api/portraits/men/60.jpg",
    hasNewMessage: false,
    newMessageCount: 0,
    lastMessagePreview: "O projeto ficou excelente, parabéns!",
    lastMessageTimestamp: "Sexta-feira",
    isOnline: false,
    messages: [
        { id: 'msg008', sender: 'me', text: "Olá Jorge, como está o andamento da instalação dos móveis?", timestamp: "Quinta-feira" },
        { id: 'msg009', sender: 'client', text: "Tudo certo por aqui, quase finalizando!", timestamp: "Sexta-feira" },
        { id: 'msg010', sender: 'client', text: "O projeto ficou excelente, parabéns!", timestamp: "Sexta-feira" },
    ]
  },
];