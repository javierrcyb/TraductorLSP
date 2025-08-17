# LSP Translator 🌐🤟  
**Traductor de Lengua de Señas Peruana (LSP) en tiempo real**

Este proyecto busca desarrollar una aplicación web interactiva que traduzca la **Lengua de Señas Peruana (LSP)** a texto en español en **tiempo real**. El sistema combina visión por computadora, inteligencia artificial y procesamiento de lenguaje natural para apoyar la accesibilidad y el aprendizaje del LSP.

---

## 🚀 Arquitectura

- **Frontend (Next.js + TypeScript)**
  - Captura de video con `getUserMedia`.
  - Extracción de **keypoints** en navegador usando **MediaPipe Tasks**.
  - Clasificación de **letras estáticas** con modelos ligeros en **TensorFlow.js/ONNX Runtime Web**.
  - Comunicación en tiempo real con el backend mediante **WebSockets**.
  - Interfaz accesible y multilenguaje (ES/EN).

- **Backend (FastAPI + Python)**
  - API REST + WebSocket para inferencia en tiempo real.
  - Modelos de **CSLR (Continuous Sign Language Recognition)** y **Transformers temporales** para palabras y oraciones.
  - Decodificación mediante **CTC** y módulo de **Gloss2Text** para generar oraciones en español.
  - Manejo de sesiones, seguridad y versionado de modelos.

- **Pipeline de AI**
  1. Extracción de keypoints (cliente).
  2. Clasificación de **letras estáticas** (on-device).
  3. Reconocimiento de **palabras/oraciones** (servidor).
  4. Traducción de **gloss → texto natural**.
  5. Streaming de resultados parciales y finales al frontend.

---

## 📂 Estructura del repositorio

```
lsp-translator/
├─ frontend/        # Next.js + TypeScript
│  ├─ src/app/      # Páginas y rutas
│  ├─ src/lib/      # WebSocket, workers y utilidades
│  ├─ src/models/   # Modelos TF.js (clasificador letras)
│  └─ public/       
│
├─ backend/         # FastAPI + Python
│  ├─ app/api/      # Endpoints REST
│  ├─ app/ws/       # WebSocket para streaming de keypoints
│  ├─ app/models/   # Modelos ML (PyTorch/TF)
│  ├─ app/utils/    # Normalización, decodificación
│  └─ tests/
│
├─ serving/         # Configs para TorchServe / Triton
├─ infra/           # Docker, Kubernetes, despliegue
└─ mlops/           # Notebooks, DVC, MLflow
```

---

## ⚙️ Requerimientos

### Frontend
- Node.js 20+
- pnpm / npm / yarn
- Navegador con soporte **WebGL/WebGPU**

### Backend
- Python 3.10+
- FastAPI + Uvicorn
- PyTorch o TensorFlow
- Redis (cache/pub-sub, rate limiting)
- PostgreSQL (metadatos de sesiones)
- (Opcional) NVIDIA GPU + Triton Inference Server

---

## 🛠️ Instalación y ejecución

### 1. Clonar repositorio
```bash
git clone https://github.com/tuusuario/lsp-translator.git
cd lsp-translator
```

### 2. Levantar frontend
```bash
cd frontend
pnpm install
pnpm dev
```
Accede en [http://localhost:3000](http://localhost:3000)

### 3. Levantar backend
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
API disponible en [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 📡 API / WebSocket

- `POST /api/sessions` → crea una nueva sesión de traducción.  
- `WS /ws/translate?sessionId=...` → recibe **keypoints** y responde con hipótesis de traducción.  

Ejemplo de mensaje recibido:
```json
{
  "seqId": 42,
  "partial": true,
  "transcript": "hola",
  "confidence": 0.92,
  "latencyMs": 134
}
```

---

## 🧠 Modelos de AI

- **Fase 1 (MVP):**  
  - Clasificación de **abecedario estático** (MediaPipe + CNN/MLP sobre keypoints).
- **Fase 2:**  
  - Reconocimiento de **palabras** usando **Temporal Convolutional Networks**.
- **Fase 3:**  
  - Reconocimiento de **oraciones** con **CSLR + Transformers**.
- **Fase 4:**  
  - Traducción automática de **gloss → texto natural**.

---

## 🔒 Seguridad y privacidad

- Todos los cálculos iniciales (keypoints) se hacen en el navegador.  
- El video **no se envía al servidor**, solo los keypoints normalizados.  
- Los datos de sesiones se pseudonimizan y se eliminan bajo petición del usuario.  
- TLS habilitado en producción.  

---

## 📈 Roadmap

- [x] MVP: alfabeto estático (cliente).  
- [ ] Palabras en tiempo real (backend).  
- [ ] Oraciones completas.  
- [ ] Gloss2Text avanzado.  
- [ ] Optimización con Triton + WebGPU.  
- [ ] Publicación de dataset abierto (con consentimiento).  

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas!  
1. Haz un fork del repositorio.  
2. Crea una rama para tu feature/fix.  
3. Envía un Pull Request con una descripción clara.  

---

## 📜 Licencia

MIT — Uso libre con atribución.  
