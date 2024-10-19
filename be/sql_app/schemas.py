from pydantic import BaseModel

class QuestionBase(BaseModel):
    source: str
    difficulty: str
    text: str
    answer: str
    comment: str | None = None
    image: str | None = None
    answerImage: str | None = None
    round: str | None = None

class QuestionCreate(QuestionBase):
    pass


class Question(QuestionBase):
    id: int

class SourceBase(BaseModel):
    name: str

class SourceCreate(SourceBase):
    pass


class Source(SourceBase):
    id: int


class DifficultyBase(BaseModel):
    name: str

class DifficultyCreate(DifficultyBase):
    pass


class Difficulty(DifficultyBase):
    id: int