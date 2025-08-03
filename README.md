# ✅ React + FastAPI TODO App

### 🧩 A simple full-stack todo list web app made with React (Vite) and FastAPI.

---

## 🌐 English | 🇯🇵 日本語 | 🇹🇼 中文

---

## 📌 Overview / 概要 / 專案概述

**EN:**  
This is a full-stack Todo List app built with React (frontend) and FastAPI (backend).  
Features include creating, editing, deleting, and completing tasks.  

**JP:**  
React（フロントエンド）と FastAPI（バックエンド）で構築されたフルスタックのToDoアプリです。  
タスクの作成・編集・削除・完了チェック機能を搭載。  

**中文（繁體）：**  
這是一個使用 React + FastAPI 建構的全端待辦事項管理系統。  
可進行新增、編輯、刪除、完成任務等操作。

---

## 🔧 Tech Stack / 技術スタック / 技術組合

- **Frontend / フロントエンド / 前端**: React + Vite + Axios  
- **Backend / バックエンド / 後端**: FastAPI (Python)  
- **Database / データベース / 資料庫**: SQLite3  
- **Style / スタイル / 樣式**: CSS + Dark/Light Theme  
- **API / 通信**: RESTful API (JSON)

---

## 🖼️ Features / 機能 / 功能特色

- ✅ Add / Edit / Delete Tasks  
- ✅ Mark Tasks as Completed (Checkbox)  
- ✅ Dark / Light Theme Toggle  
- ✅ Real-time updates  
- ✅ Progress bar based on task completion  
- ✅ Responsive UI  

---

## 🚀 Local Setup / ローカル環境構築 / 本地端執行方式

### 🧠 Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
cd vite-project
npm install
npm run dev
✅ URLs
Frontend: http://localhost:5173

Backend: http://127.0.0.1:8000

react-fastapi-todo/
│
├── backend/             # FastAPI backend
│   ├── main.py
│   ├── templates/
│   └── ...
│
├── vite-project/        # React frontend
│   ├── src/
│   ├── index.html
│   └── ...
│
└── tasks.db             # SQLite3 database
