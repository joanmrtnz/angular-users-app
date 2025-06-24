# Angular Users App

## Visió general

Angular Users App és una aplicació senzilla creada amb Angular que et permet llistar, filtrar i crear usuaris. Utilitza JSON Server per simular una API RESTful durant el desenvolupament.

## Clonar el repositori

Si encara no tens el codi, executa:

```bash
git clone https://github.com/el-teu-usuari/angular-users-app.git
cd angular-users-app
```

## Prerequisits

- Docker (versió 20.10 o superior)
- Docker Compose (v2)

## Execució amb Docker

1. **Situa’t a la carpeta arrel del projecte** (on es troba `docker-compose.yml`):

   ```bash
   cd path/to/angular-users-app
   ```
2. **Construeix les imatges**:

   ```bash
   docker compose build
   ```
3. **Inicia l’aplicació**:

   ```bash
   docker compose up
   ```
4. **Obre el navegador** i accedeix a:

   - Interfície web:      `http://localhost:4200`
   - API d’usuaris:       `http://localhost:3000/users`

> **Contenidors**:
> - **frontend**: serveix l’app Angular via Nginx al port 4200
> - **api**: executa JSON Server amb `db.json` al port 3000

## Model de dades

Les dades de l’aplicació es troben a `db.json` dins l’array `users`. Cada objecte usuari té les propietats següents:

| Propietat    | Tipus  | Descripció                                | Exemple                                               |
|--------------|--------|-------------------------------------------|-------------------------------------------------------|
| **id**       | string | Identificador únic (p. ex., DNI)          | `"4782938L"`                                          |
| **name**     | string | Nom de pila de l’usuari                   | `"Jhon"`                                              |
| **surname**  | string | Cognoms de l’usuari                       | `"Doe"`                                               |
| **email**    | string | Correu electrònic de contacte             | `"jhon.doe@email.com"`                                |
| **imageUrl** | string | URL de la imatge d’avatar (alta qualitat) | `"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"` |

**Exemple complet**:

```json
{
  "id": "4782938L",
  "name": "Jhon",
  "surname": "Doe",
  "email": "jhon.doe@email.com",
  "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
}
```

## Estructura del projecte

```
angular-users-app/
├── db.json               # Dades d’exemple per a JSON Server
├── docker-compose.yml    # Configuració de Docker Compose
└── users-app/            # Codi font de l’aplicació Angular
    ├── Dockerfile        # Imatge Docker per al frontend
    ├── package.json      # Dependències npm i scripts
    ├── angular.json      # Configuració d’Angular CLI
    └── src/              # Codi font (components, serveis, estils)
```
