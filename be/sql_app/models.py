from sqlalchemy import Column, Integer, String, ForeignKey

from .database import Base


class Source(Base):
    __tablename__ = "sources"

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)


class Difficulty(Base):
    __tablename__ = "difficulties"

    id = Column(Integer, primary_key=True)
    name = Column(String)

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True)
    source = Column(String, ForeignKey("sources.name"))
    difficulty = Column(String, ForeignKey("difficulties.name"))
    round = Column(String)
    text = Column(String)
    image = Column(String)
    answer = Column(String)
    answerImage = Column(String)
    comment = Column(String)
