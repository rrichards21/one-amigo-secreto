# 🎲 Sorteo de Amigos

Una aplicación web simple para realizar sorteos aleatorios entre un grupo de amigos.

## 📋 Descripción

Esta aplicación permite agregar nombres de amigos a una lista y realizar un sorteo aleatorio para seleccionar un ganador. Perfecta para decidir quién paga la cuenta, quién hace las tareas, o cualquier otro sorteo casual entre amigos.

## ✨ Características

- ✅ Agregar nombres a la lista de participantes
- 📝 Visualización en tiempo real de la lista de amigos
- 🎯 Sorteo aleatorio con selección automática del ganador
- 🔄 Interfaz simple e intuitiva
- ⚡ Sin necesidad de backend o base de datos

## 🚀 Cómo usar

1. **Agregar participantes:**
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en el botón para agregarlo a la lista
   - Repite el proceso para todos los participantes

2. **Realizar el sorteo:**
   - Una vez que tengas al menos un participante en la lista
   - Haz clic en el botón de sorteo
   - El ganador aparecerá automáticamente

## 🛠️ Tecnologías utilizadas

- **HTML** - Estructura de la página
- **CSS** - Estilos (no incluido en este código)
- **JavaScript** - Lógica de la aplicación

## 📁 Estructura del proyecto

```
one-amigo-secreto/
├── assets              # Carpeta para imágenes y otros recursos (opcional)
├── app.js              # Lógica JavaScript
├── index.html          # Página principal
├── README.md           # Este archivo
└── styles.css           # Estilos (opcional)
```

## 💻 Instalación y ejecución

1. Clona este repositorio:
```bash
git clone https://github.com/rrichards21/one-amigo-secreto.git
```

2. Navega al directorio del proyecto:
```bash
cd one-amigo-secreto
```

3. Abre el archivo `index.html` en tu navegador web favorito.

¡Eso es todo! No se requiere instalación adicional.

## 🔧 Funciones principales

### `agregarAmigo()`
- Obtiene el valor del campo de entrada
- Valida que no esté vacío
- Agrega el nombre al array de amigos
- Actualiza la lista visual
- Limpia el campo de entrada

### `actualizarLista()`
- Limpia la lista actual
- Recorre el array de amigos
- Crea elementos `<li>` para cada amigo
- Los agrega al DOM

### `sortearAmigo()`
- Verifica que haya al menos un participante
- Genera un índice aleatorio
- Selecciona el ganador
- Muestra el resultado

## 📋 Estructura HTML esperada

El JavaScript espera que existan los siguientes elementos en el HTML:

```html
<input type="text" id="amigo" placeholder="Nombre del amigo">
<button onclick="agregarAmigo()">Agregar</button>
<ul id="listaAmigos"></ul>
<button onclick="sortearAmigo()">Sortear</button>
<div id="resultado"></div>
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Rodrigo Richards - [@rrichards21](https://github.com/rrichards21)