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
    └── selectedSex: "male"

recipes/
 └── {recipeId}
     ├── name: "Dark Chocolate Energy Balls"
     ├── imageName: "dark_chocolate_energy_balls.jpg"
     ├── type: "Sweet"
     ├── description: "description...."
     ├── categories: ["Snack"]
     └── tags: ["Desserts"]


exercises/
└── {exerciseId}
    ├── name: "Leg Curls"
    ├── imageName: "url"
    ├── type: "Hypertrophy"
    ├── description: "description....."
    ├── equipment: ["Machine"]
    └── muscleGroups: ["Leg"]
```

---

## Tour por la Página Web

1. **Pantalla de Login/Registro**  
   > El usuario puede registrarse o iniciar sesión con una cuenta existente.  
   > Cuenta de prueba:  
   > **Email:** pruebaentrega@gmail.com  
   > **Contraseña:** Prueba12*

2. **Home**  
   > Una vez logueado, se accede al panel principal con los tipos de planes y una foto del usuario predeterminada.

3. **Exercises & Recipes**  
   > Páginas con filtros por tipo. Al hacer clic en una imagen, se muestra información detallada.

4. **Settings**  
   > Se puede editar el perfil y guardar los cambios. También se puede eliminar la cuenta tras confirmar contraseña o cambiarla desde un formulario basado en Angular.

5. **Logout**  
   > El botón de cerrar sesión finaliza la sesión del usuario actual.

---

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
