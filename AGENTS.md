# AGENTS.md — look.me

## Rotina de Sessão

1. Ler `SOUL.md` — quem sou
2. Ler `MEMORY.md` — estado atual do projeto
3. Ler `memory/YYYY-MM-DD.md` — contexto recente
4. Executar a tarefa

## Memória

- **Daily notes:** `memory/YYYY-MM-DD.md` — log do que foi feito
- **Long-term:** `MEMORY.md` — decisões, arquitetura, stack, TODOs

## Estrutura do Projeto

```
/look.me/
├── SOUL.md           # Identidade do agente
├── AGENTS.md         # Este arquivo
├── MEMORY.md         # Contexto do projeto
├── docs/             # Documentação técnica
│   ├── ARCHITECTURE.md
│   ├── API.md
│   └── ROADMAP.md
├── src/              # Código fonte
└── memory/           # Logs diários
```

## Princípios

- **Ship fast** — MVP funcional > perfeito
- **Document decisions** — futuro-eu precisa entender o porquê
- **Test the core** — try-on precisa funcionar bem, resto pode ser básico
- **B2B first** — foco em resolver dor de lojista

## Segurança

- Não commitar secrets
- Usar variáveis de ambiente
- Perguntar antes de deploy em produção
