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


def get_difficulties(db: Session):
    return db.query(models.Difficulty).all()


def create_difficulty(db: Session, difficulty: schemas.DifficultyCreate):
    db_difficulty = models.Difficulty(name=difficulty.name)
    db.add(db_difficulty)
    db.commit()
    db.refresh(db_difficulty)
    return db_difficulty


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

