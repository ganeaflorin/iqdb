from typing import Union
from sqlalchemy.orm import Session
from sql_app import crud, models, schemas
from sql_app.database import SessionLocal, engine

from fastapi import Depends, FastAPI

app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"Hello": "World12356678"}


@app.get("/questions/")
def get_questions(source: str | None = None, difficulty: str | None = None, db: Session = Depends(get_db)):
    return crud.get_questions(db, source, difficulty)


@app.post("/questions/")
def add_question(question: schemas.QuestionCreate, db: Session = Depends(get_db)):
    return crud.create_question(db, question)

@app.delete("/questions/{id}")
def delete_question(id: int, db: Session = Depends(get_db)):
    return crud.delete_question(db, id)

@app.get("/questions/{id}")
def get_question(id: int, db: Session = Depends(get_db)):
    return crud.get_question(db, id)

@app.post("/sources/")
def add_source(source: schemas.SourceCreate, db: Session = Depends(get_db)):
    return crud.create_source(db, source)

@app.get("/sources/")
def get_sources(db: Session = Depends(get_db)):
    return crud.get_sources(db)

@app.delete("/sources/{id}")
def delete_source(id: int, db: Session = Depends(get_db)):
    return crud.delete_source(db, id)

@app.post("/difficulties/")
def add_difficulty(difficulty: schemas.DifficultyCreate, db: Session = Depends(get_db)):
    return crud.create_difficulty(db, difficulty)

@app.get("/difficulties/")
def get_difficulties(db: Session = Depends(get_db)):
    return crud.get_difficulties(db)

@app.delete("/difficulties/{id}")
def delete_difficulty(id: int, db: Session = Depends(get_db)):
    return crud.delete_difficulty(db, id)

