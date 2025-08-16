# 📘 VISION.md — Proyecto “LSP AI Educator”

## 🧭 Contexto del Proyecto

La Pontificia Universidad Católica del Perú (PUCP) ha desarrollado un **diccionario de Lengua de Señas Peruana (LSP)** con una base de datos sólida, incluyendo videos, anotaciones y modelos de reconocimiento. Este proyecto toma como punto de partida ese esfuerzo y propone una **extensión educativa interactiva con IA**, que no solo reconozca señas, sino que también enseñe, corrija y motive el aprendizaje autónomo.

## 🎯 Objetivo General

Desarrollar una **plataforma educativa inteligente** que:

1. Reconozca el **Lenguaje de Señas Peruano (LSP)** en video, a nivel de **letras, palabras y oraciones**.
2. Evalúe la precisión del gesto del usuario: **posición**, **forma** y **tiempo**.
3. Brinde **correcciones personalizadas** y enseñe la forma correcta de hacer las señas.
4. Funcione como un **diccionario visual interactivo** de LSP.
5. Ofrezca una experiencia de **aprendizaje didáctico y progresivo** mediante tutoriales, juegos y ejercicios.
6. Sea accesible tanto para **personas sordas** como oyentes que deseen aprender.

---

## 🧩 Módulos Principales

### 🖐️ 1. Reconocimiento de Señas
- Entrada: video o stream de cámara.
- Procesamiento:
  - Detección de manos y poses (MediaPipe / OpenPose).
  - Reconocimiento del gesto (letra, palabra u oración).
- Salida: texto interpretado + puntuación de precisión.

### ✅ 2. Evaluación y Corrección
- Comparación entre el gesto del usuario y el gesto correcto.
- Análisis de:
  - Distancia angular entre dedos.
  - Coordenadas relativas entre manos.
  - Tiempo del gesto.
- Retroalimentación:
  - Visual: overlay de esqueleto correcto.
  - Textual: recomendaciones de mejora.
  - Auditiva: lectura de la palabra/frase.

### 📚 3. Diccionario Interactivo LSP
- Entrada: seña por cámara o texto.
- Salida:
  - Traducción en texto y en seña animada/video.
  - Explicación contextual y uso común.
- Función “Practicar esta seña”.

### 🧠 4. Modo Didáctico
- Niveles progresivos:
  - Nivel 1: Abecedario.
  - Nivel 2: Palabras frecuentes.
  - Nivel 3: Oraciones simples y complejas.
- Modalidades de aprendizaje:
  - Juegos, retos, repeticiones, dictados visuales.
  - Evaluaciones automáticas.
- Sistema de progreso y recompensas.

---

## 🧱 Arquitectura General del Sistema

```
Usuario ─┬─> Frontend (Web/Móvil)
         │
         └─> API Gateway
              ├─> Módulo IA de Reconocimiento de Señas
              ├─> Motor de Corrección y Feedback
              ├─> Motor Didáctico (juegos, retos, tutoriales)
              └─> Diccionario Interactivo LSP
```

---

## 📍 Fases del Proyecto

### 📘 Fase 1: Investigación y Diseño
- Investigación lingüística y visual del LSP.
- Recopilación de datos con intérpretes certificados.
- Diseño UX/UI con enfoque accesible (modo oscuro, subtítulos, alto contraste).

### 🗂 Fase 2: Dataset y Preprocesamiento
- Creación de dataset propio:
  - Letras (26).
  - Palabras (~500).
  - Oraciones (~100).
- Anotación con keypoints usando MediaPipe o OpenPose.
- Herramientas: CVAT, Roboflow, MakeSense.ai.

### 🧠 Fase 3: Modelos de IA
- Reconocimiento:
  - Letras: CNN (LeNet, MobileNet).
  - Palabras: CNN + LSTM.
  - Oraciones: Vision Transformers + CTC.
- Motor de corrección:
  - Cálculo de errores angulares y temporales.
  - Comparación con gestos ideales.
  - Generación de feedback inteligente.

### 🛠 Fase 4: Desarrollo de la Aplicación
- **Frontend Web/App:**
  - React.js o Next.js para web.
  - Flutter o React Native para app móvil.
- **Backend:**
  - FastAPI o Flask.
  - APIs REST: predicción, comparación, traducción, progreso.
- **Base de Datos:**
  - PostgreSQL, Supabase o Firebase.

### 🧪 Fase 5: Sistema Didáctico
- Implementación de:
  - Juegos de práctica.
  - Pruebas con puntuación.
  - Modo repetición adaptativo.
- Feedback interactivo:
  - Visual (overlay con corrección).
  - Texto y voz.

### ☁️ Fase 6: Despliegue y Testing
- Hosting del backend: Render, Railway, AWS.
- Frontend: Vercel, Netlify, Firebase Hosting.
- Testing con usuarios reales:
  - Personas sordas.
  - Aprendices y docentes de LSP.

---

## 🗓 Cronograma Estimado

| Mes | Actividades                        |
|-----|------------------------------------|
| 1   | Investigación, diseño, contacto con intérpretes |
| 2   | Grabación y anotación del dataset |
| 3   | Preprocesamiento, entrenamiento inicial de modelos |
| 4   | Prototipo del frontend y backend |
| 5   | Motor de feedback y sistema de corrección |
| 6   | Desarrollo de modo didáctico y juegos |
| 7   | Testing con usuarios reales |
| 8   | Despliegue oficial y mejoras |

---

## 🧰 Stack Tecnológico

| Área         | Herramientas recomendadas       |
|--------------|----------------------------------|
| IA           | TensorFlow, PyTorch, ONNX        |
| Keypoints    | MediaPipe, OpenPose              |
| Backend      | FastAPI, Flask                   |
| Frontend Web | React.js, Next.js, Tailwind CSS  |
| Móvil        | Flutter o React Native           |
| DB           | Supabase, PostgreSQL, Firebase   |
| Hosting      | Render, Vercel, Railway, AWS     |

---

## 🚀 Extensiones Futuras

- Soporte para dialectos regionales del LSP.
- Traducción multilingüe: LSP ↔ Español ↔ ASL ↔ Inglés.
- Reconocimiento multimodal (labios, expresión facial).
- Comunidad educativa: foros, retos grupales, salas de práctica.
- Reconocimiento offline usando modelos exportados a TensorFlow Lite o ONNX.

---

## 👥 Público Objetivo

- Personas sordas que deseen mejorar o practicar LSP.
- Oyentes que quieran aprender a comunicarse en señas.
- Docentes y educadores en instituciones inclusivas.
- Organizaciones que promuevan accesibilidad y diversidad.

---

## ❤️ Impacto Esperado

- Democratización del aprendizaje del LSP.
- Inclusión social y educativa de personas sordas.
- Plataforma moderna y gratuita para aprender lenguaje de señas en Perú.
- Herramienta base para expansión a otros países de Latinoamérica.