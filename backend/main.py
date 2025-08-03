from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import Column, Integer, String, Boolean, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from typing import Optional

# データベース設定
DATABASE_URL = "sqlite:///./tasks.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# タスクテーブル定義
class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    completed = Column(Boolean, default=False)

Base.metadata.create_all(bind=engine)

# リクエスト・レスポンス用モデル
class TaskCreate(BaseModel):
    title: str

class TaskResponse(BaseModel):
    id: int
    title: str
    completed: bool

    class Config:
        orm_mode = True

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    completed: Optional[bool] = None

# FastAPI アプリ初期化
app = FastAPI()

# CORS設定（フロントエンドとの接続用）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DBセッションの取得
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# タスクリスト取得
@app.get("/tasks", response_model=list[TaskResponse])
def read_tasks(db: Session = Depends(get_db)):
    return db.query(Task).all()

# 新規タスク作成
@app.post("/tasks", response_model=TaskResponse)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    db_task = Task(title=task.title)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

# タスク削除
@app.delete("/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="タスクが見つかりません")
    db.delete(task)
    db.commit()
    return {"message": "削除しました"}

# タスクの完了状態を切り替え
@app.patch("/tasks/{task_id}/toggle", response_model=TaskResponse)
def toggle_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="タスクが見つかりません")
    task.completed = not task.completed
    db.commit()
    db.refresh(task)
    return task

# タイトルや完了状態を個別に更新
@app.patch("/tasks/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task_update: TaskUpdate, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="タスクが見つかりません")
    
    if task_update.title is not None:
        task.title = task_update.title
    if task_update.completed is not None:
        task.completed = task_update.completed
    
    db.commit()
    db.refresh(task)
    return task
