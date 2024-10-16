# Tooltip React Basic

Un componente Tooltip simple para React.

## Instalación

Para instalar el componente, puedes usar npm:

```bash
npm install tooltip-react-basic
```

## Uso

Aquí tienes un ejemplo básico de cómo utilizar el componente Tooltip:

```javascript
import React from 'react';
import { Tooltip } from 'tooltip-react-basic';

const App = () => {
    return (
        <div>
            <h1>Ejemplo de Tooltip</h1>
            <Tooltip tooltipText="Este es un tooltip!">
                <button>Hover sobre mí</button>
            </Tooltip>
        </div>
    );
};

export default App;
```

## Props

| Prop            | Tipo     | Descripción                                            | Valor por defecto |
|-----------------|----------|--------------------------------------------------------|-------------------|
| `tooltipText`   | `string` | El texto que aparecerá en el tooltip.                 | -                 |
| `position`      | `string` | La posición del tooltip en relación al elemento.      | `"left"`          |
| `duration`      | `number` | La duración en milisegundos para mostrar el tooltip.   | `2000`            |
| `backgroundColor` | `string` | Color de fondo del tooltip.                           | `black`           |
| `textColor`     | `string` | Color del texto del tooltip.                           | `#fff`            |

## Ejemplos

Puedes agregar ejemplos adicionales y casos de uso aquí.

## Contribuciones

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio y envía un pull request.

## Licencia

Este proyecto está bajo la Licencia GNU.