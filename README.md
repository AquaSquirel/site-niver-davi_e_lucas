# 🍄 Super Davi & Lucas Bros - Convite de Aniversário

Um convite digital interativo, moderno e responsivo criado especialmente para o aniversário de 9 anos do Davi e do Lucas. O tema é inspirado no universo clássico de Super Mario Bros, focando na parceria entre o Player 1 (Davi/Mario) e o Player 2 (Lucas/Luigi).

## 🚀 Tecnologias Utilizadas

- **React + TypeScript**: Para uma interface rápida e tipagem segura.
- **Vite**: Ferramenta de build ultra-rápida.
- **Tailwind CSS**: Estilização moderna e responsiva (Mobile-First).
- **Framer Motion**: Animações suaves de "game" e transições de tela.
- **Lucide React**: Ícones minimalistas e elegantes.

## ✨ Funcionalidades

- **Tela de Título (Start Screen)**: Capa imersiva em tela cheia com HUD de jogo (Score, Moedas, Mundo).
- **Cards dos Players**: Apresentação dos aniversariantes com barras de "Vida" e fotos personalizáveis.
- **Scroll Hint**: Indicador lateral animado que convida o usuário a explorar o conteúdo.
- **Mission Info**: Detalhes da festa (Data, Hora, Local) com integração direta ao Google Maps.
- **RSVP Inteligente**: Botão flutuante de confirmação via WhatsApp que aparece estrategicamente durante a navegação.

## 📸 Como Personalizar as Fotos

Para colocar as fotos reais do Davi e do Lucas:

1. Vá até a pasta `public/`.
2. Adicione as imagens com os nomes:
   - `davi.jpeg`
   - `lucas.jpeg`
3. O sistema aplicará automaticamente o corte circular e o estilo de moldura.

## 🛠️ Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Para acessar pelo celular na mesma rede:**
   - O Vite está configurado para aceitar conexões externas. Basta acessar o IP do seu computador na porta `5173`.
   - Exemplo: `http://100.81.253.73:5173`

## 📦 Build para Produção

Para gerar os arquivos finais para hospedagem:
```bash
npm run build
```
Os arquivos serão gerados na pasta `dist/`.

---
*Criado com ⭐️ para o Level 9 do Davi e do Lucas.*