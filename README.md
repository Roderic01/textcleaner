# Text Cleaner 

Una aplicación web elegante y minimalista diseñada para limpiar textos de números de referencia y otros elementos no deseados.

## Características

- **Interfaz moderna con tema oscuro** - Diseño elegante con tonos azules oscuros
- **Limpieza inteligente de textos** - Elimina automáticamente números de referencia que aparecen después de puntos
- **Área de edición para entrada y salida** - Permite editar tanto el texto original como el resultado
- **Diseño responsive** - Funciona perfectamente en dispositivos móviles y de escritorio

## Ejemplo de uso

Si pegas un texto como este:

```
Mortimer Jerome Adler fue una figura destacada en el panorama intelectual estadounidense del siglo XX: filósofo, educador y autor prolífico.1 Ganó notoriedad como un "popularizador" del pensamiento filosófico, una rareza en un campo a menudo percibido como estratificado y esotérico.10 Adler defendía fervientemente la idea de que "la filosofía es asunto de todos".14, esforzándose por hacerla accesible a un público amplio a través de una escritura clara y directa.11 Su propio trabajo filosófico se enmarca en las tradiciones aristotélica y tomista, buscando en los clásicos respuestas a los problemas contemporáneos.6
```

Al hacer clic en "Limpiar Texto", obtendrás:

```
Mortimer Jerome Adler fue una figura destacada en el panorama intelectual estadounidense del siglo XX: filósofo, educador y autor prolífico. Ganó notoriedad como un "popularizador" del pensamiento filosófico, una rareza en un campo a menudo percibido como estratificado y esotérico. Adler defendía fervientemente la idea de que "la filosofía es asunto de todos", esforzándose por hacerla accesible a un público amplio a través de una escritura clara y directa. Su propio trabajo filosófico se enmarca en las tradiciones aristotélica y tomista, buscando en los clásicos respuestas a los problemas contemporáneos.
```

## Tecnologías utilizadas

- **Next.js 15** - Framework React moderno con renderizado del lado del servidor
- **TypeScript** - Para un código más robusto y con tipado seguro
- **TailwindCSS** - Para un diseño elegante y responsive
- **React Hooks** - Para la gestión de estado y efectos secundarios

## Cómo empezar

1. Clona este repositorio:
```bash
git clone https://github.com/Roderic01/textcleaner.git
cd textcleaner
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Despliegue en Vercel

La forma más sencilla de desplegar esta aplicación es utilizando [Vercel](https://vercel.com), la plataforma de los creadores de Next.js:

[![Desplegar con Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRoderic01%2Ftextcleaner)

## Licencia

Este proyecto está bajo la licencia MIT.
