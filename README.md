# PWM-Fitnova-Angular

<a href="https://www.eii.ulpgc.es" target="_blank">
  <img src="https://www.eii.ulpgc.es/sites/default/files/eii-acron-mod.png" alt="EII-ULPGC" style="float: right; width: 516px; height: 150px;" />
</a>

## Fitnova

**Grupo 43.3**

**Integrantes:**
- Joel Santana Alemán
- Raúl Trejo González
- Daniel Moreno López

---

## Descripción del Proyecto

**Fitnova** es una plataforma web diseñada para ayudar a los usuarios a llevar un estilo de vida saludable combinando entrenamiento y nutrición.  
Ofrece herramientas personalizadas como recetas fitness, planificación nutricional y seguimiento del progreso físico, todo a través de una interfaz accesible y moderna construida con Angular y Firebase.

---

## Funcionalidades del Proyecto

- Registro y autenticación de usuarios (Firebase Auth)
- Transición completa del proyecto a Angular
- Almacenamiento y gestión de datos mediante Firebase Firestore
- Visualización de datos (recetas y ejercicios)
- Formulario reactivo para edición de perfil y cambios de contraseña

---

## Estructura del Código (Angular)

```
src/
├── app/
│   ├── assets/                # Recursos estáticos
│   ├── components/            # Páginas completas (Login, Settings, Exercises, Recipes...)
│   ├── Mockups/               # Plantillas o páginas de referencia
│   ├── services/              # Servicios para Firebase
│   ├── templates/             # Vistas reutilizables con estructura común (como Recipes y Exercises)
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
├── firebase/                  # Configuración e inicialización de Firebase
├── index.html                 # Página principal HTML
├── main.ts                    # Punto de entrada de Angular
├── styles.css                 # Estilos generales

```

### Principales componentes:
- **LoginComponent**: Página de acceso mediante email y contraseña (Firebase Auth)
- **RegisterComponent**: Registro de nuevos usuarios
- **HomeComponent**: Página principal tras el login
- **RecipesComponent**: Vista de recetas con filtros
- **ExercisesComponent**: Vista de ejercicios con filtros
- **SettingsComponent**: Edición del perfil, cambio de contraseña, eliminación de cuenta

---

## Estructura de los Datos en Firebase

### Firestore
```
users/
└── {userId}
    ├── email: "usuario@correo.com"
    ├── displayName: "Nombre del usuario"
    ├── birthday: "2025-04-16"
    ├── country: "Spain"
    ├── darkMode: true
    ├── language: "Spanish"
    ├── nameSurname: "usuario"
    ├── notificationsEnabled: "yes"
    ├── privacySetting: "public"
    ├── selectedSex: "male"
    └── saved/
         ├──{id1}
         │   ├── id: exercise/recipe id
         │   └── details: []
         │
         └──{id2}
              ├── id: exercise/recipe id
              └── details: []

recipes/
 └── {recipeId}
     ├── name: "Dark Chocolate Energy Balls"
     ├── imageName: "dark_chocolate_energy_balls.jpg"
     ├── type: "Sweet"
     ├── description: "description...."
     ├── categories: ["Snack"]
     ├── requirements: "Dark chocolate...."
     └── tags: ["Desserts"]


exercises/
└── {exerciseId}
    ├── name: "Leg Curls"
    ├── imageName: "url"
    ├── type: "Hypertrophy"
    ├── description: "description....."
    ├── equipment: ["Machine"]
    ├── requirements: "Leg curl machine...."
    └── muscleGroups: ["Leg"]
```

---

## Tour por la Página Web

### 1. Acceso y Autenticación
- **Pantalla de Login/Registro**  
  > El usuario puede registrarse o iniciar sesión con una cuenta existente.  
  > Cuenta de prueba:  
  > **Email:** pruebaentrega@gmail.com  
  > **Contraseña:** Prueba12*

  La primera interacción del usuario con Fitnova es a través de la página de inicio de sesión o registro, donde se implementa un formulario reactivo de Angular.

### 2. Home
- **Página Principal**  
  > Una vez logueado, se accede al panel principal con los tipos de planes disponibles y el header con la foto de perfil del usuario.
  > Se puede navegar a las diferentes secciones de la aplicación desde el menú principal.

### 3. Exercises & Recipes
- **Catálogo de Ejercicios**  
  > La página de ejercicios permite filtrar por:
  > - Tipo de ejercicio (Hypertrophy, Cardio, etc.)
  > - Grupo muscular (Leg, Arms, Chest, etc.)
  > - Equipamiento necesario
  > 
  > Al hacer clic en un ejercicio, se muestra información detallada del mismo.

- **Catálogo de Recetas**  
  > Similar a los ejercicios, las recetas pueden filtrarse por:
  > - Tipo (Sweet, Savory)
  > - Categoría (Breakfast, Lunch, Dinner, Snack)
  > - Tags específicos
  >
  > Los usuarios pueden guardar recetas favoritas para acceso rápido.

### 4. Detalles y Guardado
- **Visualización Detallada**
  > Al seleccionar cualquier ejercicio o receta, se muestra una vista detallada con toda la información almacenada en Firestore.
  > Los usuarios pueden guardar elementos seleccionados para acceder a ellos posteriormente desde su perfil.

### 5. Settings
- **Gestión de Perfil**  
  > Se puede editar la información personal mediante un formulario reactivo de Angular validado.
  > Los datos modificados se actualizan en tiempo real en Firebase.

- **Configuración de la Cuenta**
  > Opciones para cambiar la contraseña con validación de seguridad.
  > Posibilidad de activar/desactivar notificaciones.
  > Selección de idioma y preferencia de modo oscuro/claro.

- **Eliminación de Cuenta**
  > Los usuarios pueden eliminar su cuenta tras confirmar su contraseña como medida de seguridad.

### 6. Logout
- **Cierre de Sesión**  
  > El botón de cerrar sesión finaliza la sesión del usuario actual usando Firebase Auth.
  > Redirige al usuario a la pantalla de login.

### Ejemplo de uso completo:
1. El usuario inicia sesión con sus credenciales
2. Navega a la sección de recetas y aplica filtros para encontrar snacks saludables
3. Selecciona "Dark Chocolate Energy Balls" para ver detalles completos
4. Guarda la receta en sus favoritos
5. Desde configuración, actualiza sus preferencias de notificación
6. Cierra sesión al finalizar

Todo el proceso utiliza la infraestructura de Firebase para autenticación y almacenamiento de datos, mientras que Angular proporciona la reactividad y una experiencia de usuario fluida a través de componentes bien estructurados.

---

## Evolución del Proyecto (Trello)

A continuación se muestra la evolución del desarrollo del proyecto a través de Trello, siguiendo metodologías se utilizaron listas como "Lista de tareas", "Trabajo en proceso (WIP)", "Revisar" y "Realizado y comprobado" para gestionar las tareas de manera colaborativa.

### Tablero de seguimiento

Evolución del tablero en Trello ![image](https://github.com/user-attachments/assets/94689698-b426-47d4-a724-2d977879a266)

---

## Pasos para ejecutar el proyecto

1. Clonar el repositorio desde GitHub  
2. Instalar las dependencias con `npm install`  
3. Ejecutar el proyecto con `ng serve`  
4. Acceder en el navegador a `http://localhost:4200`  
5. Iniciar sesión con la cuenta de prueba o crear una nueva

---

## Enlaces útiles

- 🔗 **GitHub:**  
  [https://github.com/PWM-Fitnova-Angular/PWM-Fitnova-Angular/tree/sprint3](https://github.com/PWM-Fitnova-Angular/PWM-Fitnova-Angular/tree/sprint3)

- 🔗 **Figma:**  
  [https://www.figma.com/board/7Z4HVWelwCa73XyEUTJWvH/PWM-43.3-GYM?node-id=0-1](https://www.figma.com/board/7Z4HVWelwCa73XyEUTJWvH/PWM-43.3-GYM?node-id=0-1)

- 🔗 **Trello (Evolución del proyecto):**  
  [https://trello.com/invite/b/67c0a115f6554ca4c0bd5e7e/ATTI31645448880685b61b1a17bff4e61b126F26F106/pwm-fitnova](https://trello.com/invite/b/67c0a115f6554ca4c0bd5e7e/ATTI31645448880685b61b1a17bff4e61b126F26F106/pwm-fitnova)

---
