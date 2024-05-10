from fastapi import FastAPI, status
from fastapi.responses import HTMLResponse
from schemas import Profile, Team, Car, News, Assembly, Parts

app = FastAPI()

@app.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    """
    Ruta para la documentación Swagger.
    """
    return HTMLResponse(
        """
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Documentación Swagger</title>
            <link rel="stylesheet" href="/static/swagger-ui.css">
        </head>
        <body>
            <div id="swagger-ui"></div>
            <script src="/static/swagger-ui-bundle.js"></script>
            <script>
                window.onload = function() {
                    const ui = SwaggerUIBundle({
                        url: "/openapi.json",
                        dom_id: '#swagger-ui',
                        presets: [
                            SwaggerUIBundle.presets.apis,
                            SwaggerUIBundle.SwaggerUIStandalonePreset
                        ],
                        layout: "BaseLayout",
                        validatorUrl: "https://validator.swagger.io/validator",
                    });
                };
            </script>
        </body>
        </html>
        """
    )


@app.get("/profile", response_model=Profile)
async def get_profile(email: str):
    """
    Path to get profile info
    """
    # Obtener el valor del parámetro email
    email_value = email

    return Profile(
        id=1,
        username="John",
        name="John",
        surname="Doe",
        email="johndoe@example.com",
        password="1234567890",
        rol="Team Leader",
        creation_date="04/06/2024",
    )

@app.get("/team", response_model=Team, status_code=status.HTTP_200_OK)
def get_team_info():
    # Implementar la lógica para obtener la información del equipo
    # ...
    return team_info

@app.get("/car", response_model=Car, status_code=status.HTTP_200_OK)
def get_car_info():
    # Implementar la lógica para obtener la información del equipo
    # ...
    return car_info

@app.get("/assembly", response_model=Assembly, status_code=status.HTTP_200_OK)
def get_assembly_info():
    # Implementar la lógica para obtener la información del equipo
    # ...
    return assembly_info

@app.get("/parts", response_model=Parts, status_code=status.HTTP_200_OK)
def get_parts_info():
    # Implementar la lógica para obtener la información del equipo
    # ...
    return parts_info

@app.get("/news", response_model=News, status_code=status.HTTP_200_OK)
def get_news_info():
    # Implementar la lógica para obtener la información del equipo
    # ...
    return news_info


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
