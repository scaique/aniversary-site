# 💕 Anniversary Website

Site romântico e interativo para celebrar aniversários de namoro/casamento. Desenvolvido com React, TypeScript e muito amor, o projeto cria uma experiência personalizada com músicas, fotos e mensagens especiais.

![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.3-purple)

## ✨ Funcionalidades

-   🎵 **Player de Música Personalizado**: Playlist com suas músicas especiais usando React Player
-   📸 **Galeria de Fotos Interativa**: Estilo Instagram com curtidas, legendas e localização
-   ⏰ **Contador de Tempo Real**: Mostra anos, meses, dias, horas, minutos e segundos juntos
-   💌 **Mensagem Romântica Personalizada**: Texto customizável com animações
-   📱 **Design Responsivo**: Otimizado para visualização mobile
-   🌙 **Tema Dark Elegante**: Interface moderna e sofisticada

## 🚀 Tecnologias

-   **React** - Biblioteca para construção da interface
-   **TypeScript** - Tipagem estática para JavaScript
-   **Vite** - Build tool e dev server ultrarrápido
-   **Swiper** - Carrossel de fotos com touch support
-   **React Player** - Player de áudio/vídeo customizável
-   **Lucide React** - Ícones modernos e leves
-   **Date-fns** - Utilitários para manipulação de datas

## 📋 Pré-requisitos

-   Node.js 18+
-   NPM ou Yarn
-   Navegador moderno

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/scaique/anniversary-site.git
cd anniversary-site
```

2. Instale as dependências:

```bash
npm install
```

3. Configure os arquivos de dados (veja seção Configuração abaixo)

4. Adicione suas fotos na pasta `public/images/`

5. Adicione seus arquivos de áudio na pasta `public/audio/` (se usar áudio local)

6. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

7. Acesse `http://localhost:5173` no navegador

## ⚙️ Configuração

### 📅 Data de Início (data.example.ts)

Copie o arquivo de exemplo e configure a data de início do relacionamento:

```bash
cp src/data/data.example.ts src/data/data.ts
```

```typescript
// Exemplo: 14 de Setembro de 2002, 13:06 (GMT-3)
export const START_DATE = new Date('2002-09-14T13:06:00-03:00');
```

**Formato:** `YYYY-MM-DDTHH:mm:ss-03:00` (horário de Brasília)

### 📸 Fotos (photos.example.ts)

Configure suas fotos com legendas, datas e localizações:

```bash
cp src/data/photos.example.ts src/data/photos.ts
```

```typescript
import type { Photo } from '../types';

export const photos: Photo[] = [
    {
        id: 1,
        url: '/images/Foto-01.jpg', // Caminho da imagem
        caption: 'Nosso primeiro encontro', // Legenda romântica
        date: '03 de Janeiro de 2024', // Data da foto
        location: 'Parque Ibirapuera, SP', // Local
    },
    // Adicione mais fotos...
];
```

**Dicas:**

-   Coloque as imagens na pasta `public/images/`
-   Use imagens otimizadas (JPEG/WebP, max 1MB)
-   Recomendado: proporção 1:1 ou 4:3

### 🎵 Playlist (playlist.example.ts)

Configure sua playlist de músicas especiais:

```bash
cp src/data/playlist.example.ts src/data/playlist.ts
```

```typescript
import type { Song } from '../types';

export const playlist: Song[] = [
    {
        id: 1,
        title: 'musica', // Título da música
        artist: 'artista', // Artista
        coverUrl: 'https://i.scdn.co/image/ab67616d...', // URL ou caminho da capa
        audioUrl: '/audio/song.mp3', // Arquivo de áudio local
    },
    // Adicione mais músicas...
];
```

**Opções de áudio:**

-   Arquivos MP3 locais: coloque em `public/songs/`

### 💌 Mensagem Personalizada (MessageText.example.tsx)

Customize a mensagem romântica:

```bash
cp src/components/MessageText.example.tsx src/components/MessageText.tsx
```

```typescript
export default function MessageText({ timeElapsed }: { timeElapsed: timeElapsed }) {
    return (
        <div className="love-message">
            <p className="message-text">
                já faz <Time timeElapsed={timeElapsed} /> desde que começamos a namorar/casar!
            </p>
            <div className="message-footer">
                <span>te amo muito meu amor,</span>
                <span className="signature">
                    feliz <Time2 timeElapsed={timeElapsed} />
                    <Heart size={16} fill="currentColor" />
                </span>
            </div>
        </div>
    );
}
```

## 🏗️ Build para Produção

```bash
npm run build
```

## 📱 Estrutura do Projeto

```
anniversary-site/
├── public/
│   ├── images/         # Suas fotos
│   └── songs/          # Arquivos de música
├── src/
│   ├── components/
|   |   ├── MusicPlayer.css
│   │   ├── MusicPlayer.tsx
|   |   ├── PhotoGallery.css
│   │   ├── PhotoGallery.tsx
│   │   ├── MessageText.css
|   |   ├── MessageText.tsx
│   │   └── Time.tsx
│   ├── data/
│   │   ├── data.ts         # Data de início
│   │   ├── photos.ts       # Array de fotos
│   │   └── playlist.ts     # Playlist de músicas
│   ├── types/
│   │   └── index.ts        # Interfaces
│   ├── utils/
│   │   └── timeCalculator.ts
|   ├── App.css
│   ├── App.tsx
|   └── main.tsx
└── README.md
```
