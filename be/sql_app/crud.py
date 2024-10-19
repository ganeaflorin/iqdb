from http.client import HTTPException
from sqlalchemy.orm import Session

from . import models, schemas


def get_sources(db: Session):
    return db.query(models.Source).all()


def create_source(db: Session, source: schemas.SourceCreate):
    db_source = models.Source(name=source.name)
    db.add(db_source)
    db.commit()
    db.refresh(db_source)
    return db_source


def delete_source(db: Session, source_id: int):
    db_source = db.get(models.Source, source_id)
    if not db_source:
        raise HTTPException(status_code=404, detail="Source ID not found")
    db.delete(db_source)
    db.commit()
    return {"message": "Source successfully deleted"}


def get_difficulties(db: Session):
    return db.query(models.Difficulty).all()


def create_difficulty(db: Session, difficulty: schemas.DifficultyCreate):
    db_difficulty = models.Difficulty(name=difficulty.name)
    db.add(db_difficulty)
    db.commit()
    db.refresh(db_difficulty)
    return db_difficulty


def delete_difficulty(db: Session, difficulty_id: int):
    db_difficulty = db.get(models.Difficulty, difficulty_id)
    if not db_difficulty:
        raise HTTPException(status_code=404, detail="Difficulty ID not found")
    db.delete(db_difficulty)
    db.commit()
    return {"message": "Difficulty successfully deleted"}


def get_questions(db: Session, source, difficulty):
    db_questions = db.query(models.Question)
    if source:
        db_questions = db_questions.filter(models.Question.source == source)
    if difficulty:
        db_questions = db_questions.filter(models.Question.difficulty == difficulty)
    return db_questions.all()


def create_question(db: Session, question: schemas.QuestionCreate):
    db_question = models.Question(source=question.source, difficulty=question.difficulty, round=question.round, text=question.text, image=question.image, answer=question.image, answerImage=question.answerImage, comment=question.comment)
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question


def delete_question(db: Session, question_id: int):
    db_question = db.get(models.Question, question_id)
    if not db_question:
        raise HTTPException(status_code=404, detail="Question ID not found")
    db.delete(db_question)
    db.commit()
    return {"message": "Question successfully deleted"}