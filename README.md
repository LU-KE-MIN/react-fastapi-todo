**# ✅ React + FastAPI | Full-Stack Task Management App

![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=flat-square&logo=react)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square&logo=fastapi)
![Python](https://img.shields.io/badge/Language-Python-3776AB?style=flat-square&logo=python)

**A modern full-stack implementation exploring RESTful API integration between React and Python.**

🌐 **English** | 🇯🇵 **日本語** | 🇹🇼 **中文**

---

## 📌 Project Overview / プロジェクト概要

### 🇯🇵 日本語
**【概要】**
React（フロントエンド）と FastAPI（バックエンド）を用いた、フルスタック構成のタスク管理アプリケーションです。
基本的なCRUD機能に加え、ダークモード切り替えやプログレスバーによる進捗可視化を実装しています。

**【👨‍💻 開発の目的（Motivation）】**
普段は **C# / .NET** を中心にバックエンド開発を行っていますが、以下の技術習得を目的として本プロジェクトを作成しました。
1.  **モダンなWeb技術スタック（Python/FastAPI + React）のキャッチアップ**
2.  **フロントエンド（SPA）とバックエンド間のRESTful API設計のベストプラクティス再確認**
3.  **異なる言語間でのデータシリアライズ（JSON）と非同期通信（Axios）の実装**

### 🇺🇸 English
This is a full-stack Todo List app built to demonstrate the integration of **React (Vite)** and **FastAPI**.
The project focuses on clean RESTful API design and modern UI state management. It serves as a technical verification project for transitioning from a C#/.NET background to the Python/JS ecosystem.

### 🇹🇼 中文（繁體）
這是一個使用 **React (Vite)** 搭配 **FastAPI** 建構的全端待辦事項管理系統。
本專案的主要目的是作為從 C#/.NET 背景擴充至 Python 與現代前端技術棧（Modern Web Stack）的技術驗證與實作練習。

---

## 🔧 Tech Stack / 技術構成

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Frontend** | **React (Vite)** | SPA Framework |
| | **Axios** | HTTP Client for API consumption |
| | **CSS / Theme** | Dark/Light Mode switching logic |
| **Backend** | **FastAPI (Python)** | High-performance async API |
| | **Pydantic** | Data validation & serialization |
| **Database** | **SQLite3** | Lightweight relational database |
| **Architecture**| **RESTful API** | JSON-based communication |

---

## 🖼️ Features / 主な機能

* **RESTful CRUD Operations:**
    * Create, Read, Update, Delete tasks via API.
* **State Management:**
    * Real-time UI updates upon data changes (No page reload required).
* **UI/UX:**
    * **Dark / Light Theme Toggle:** CSS variables based theming.
    * **Progress Bar:** Visual feedback based on task completion rate.
    * **Responsive Design:** Optimized for various screen sizes.

---

## 🚀 Local Setup / ローカル環境構築

### 1. Backend (FastAPI)
```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run server (Auto-reload enabled)
uvicorn main:app --reload**

API Documentation: https://www.google.com/search?q=http://127.0.0.1:8000/docs (Swagger UI)

API Endpoint: http://127.0.0.1:8000

cd vite-project

# Install dependencies
npm install

# Run development server
npm run dev

react-fastapi-todo/
│
├── backend/                # FastAPI Application
│   ├── main.py             # API Entry point & Routes
│   ├── models.py           # Database Models
│   ├── schemas.py          # Pydantic Schemas (Request/Response)
│   ├── crud.py             # Database Logic (CRUD)
│   └── database.py         # SQLite Connection
│
├── vite-project/           # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components (TaskList, ThemeToggle)
│   │   ├── api/            # Axios setup
│   │   ├── App.jsx         # Main Logic
│   │   └── main.jsx        # Entry point
│   └── index.html
│
└── tasks.db                # SQLite Database (Auto-generated)
