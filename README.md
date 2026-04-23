# Red Oriente Web

Base estática para la plataforma web de la consultoría **Red Oriente**, lista para usar en **VS Code**, publicar en **GitHub Pages**, conectar con **dominio propio** y recibir formularios vía **Formspree** en el correo corporativo.

## 1. Estructura del proyecto

```bash
red-oriente-web/
├── index.html
├── formularios.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
└── README.md
```

## 2. Qué incluye

- Página principal de presentación del servicio.
- Secciones de servicios, metodología, equipo y contacto.
- Formulario público de contacto.
- Formulario de levantamiento inicial para visitas.
- Lógica JavaScript para envío vía Formspree.
- Diseño serio y profesional, compatible con GitHub Pages.

## 3. Primeros pasos en VS Code

1. Descarga o clona este proyecto.
2. Abre la carpeta completa en VS Code.
3. Instala una extensión como **Live Server** si quieres previsualizar localmente.
4. Abre `index.html`.

## 4. Configurar formularios con Formspree

### Paso A: crear los formularios

1. Crea una cuenta en Formspree.
2. Crea un formulario para **contacto público**.
3. Crea otro formulario para **levantamiento inicial de visita**.
4. Formspree te entregará un endpoint para cada uno, con un formato similar a este:

```html
https://formspree.io/f/xxxxxxxx
```

### Paso B: reemplazar endpoints

Debes cambiar los endpoints en estos lugares:

#### En `index.html`
Busca:

```html
action="https://formspree.io/f/TU_ENDPOINT_CONTACTO"
```

Y reemplázalo por el endpoint real del formulario público.

#### En `formularios.html`
Busca estas dos líneas:

```html
action="https://formspree.io/f/TU_ENDPOINT_CONTACTO"
```

```html
action="https://formspree.io/f/TU_ENDPOINT_VISITA"
```

Y reemplázalas por sus endpoints reales.

## 5. Configurar correo corporativo

Puedes crear correos como:

- `contacto@tudominio.cl`
- `formularios@tudominio.cl`
- `administracion@tudominio.cl`

### Recomendación

Usa uno de estos servicios:

- Google Workspace
- Zoho Mail

Luego configura los registros **MX** en tu proveedor de dominio.

## 6. Reemplazos importantes antes de publicar

Busca y cambia estos textos:

- `tudominio.cl`
- `contacto@tudominio.cl`
- `formularios@tudominio.cl`
- descripciones del equipo
- nombre definitivo de la consultoría si quieres ajustarlo

## 7. Publicar en GitHub Pages

### Opción simple

1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos de esta carpeta.
3. Ve a **Settings** > **Pages**.
4. En **Source**, selecciona la rama principal (`main`) y la carpeta raíz (`/root`).
5. Guarda.

GitHub publicará el sitio en una URL similar a:

```bash
https://tuusuario.github.io/nombre-del-repositorio/
```

## 8. Conectar dominio propio

Si quieres usar un dominio como `www.redoriente.cl`:

1. Ve a **Settings** > **Pages** en GitHub.
2. En **Custom domain**, escribe tu dominio.
3. En el proveedor del dominio, configura los registros DNS correspondientes.

### Normalmente usarás

- Un registro `CNAME` para `www`
- Registros `A` o la configuración que GitHub indique para el dominio raíz

## 9. Recomendación práctica de trabajo

### Fase 1

Publica esta web como presentación + formularios.

### Fase 2

Agrega:

- logo definitivo
- fotografías o íconos propios
- textos definitivos del equipo
- automatizaciones de correo

### Fase 3

Si el proyecto crece, puedes migrar a una solución con:

- autenticación para formularios internos
- CRM o base de datos
- panel privado
- seguimiento de clientes y visitas

## 10. Nota importante sobre privacidad

Este proyecto está preparado como **sitio estático**. Eso es ideal para partir rápido, pero no convierte el formulario de visita en un sistema privado real. Si luego quieres que esa sección solo la use el equipo con seguridad, conviene pasar esa parte a una solución con autenticación y backend.
