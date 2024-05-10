from pydantic import BaseModel

class Profile(BaseModel):
    id: int
    username: str
    name: str
    surname: str
    email: str
    password: str
    rol: str
    creation_date: str

class Team(BaseModel):
    id: int
    id_profile: int
    name: str

class Car(BaseModel):
    id: int
    id_team: int
    name: str
    brand: str
    model: str
    year: str

class Assembly(BaseModel):
    id: int
    id_car: int
    id_parts: int
    characteristics: str

class Parts(BaseModel):
    id: int
    name: str
    description: str

class News(BaseModel):
    id: int
    title: str
    content: str
    date: str
