# Task Manager App

A fully-featured **Task Manager** application built with **Angular** that allows users to manage tasks, track progress, and persist data using **localStorage**. The app demonstrates the use of Angular modules, standalone components, and signals for reactive state management.
---

## Features

- View tasks by user
- Add new tasks
- Delete tasks
- Persist tasks in `localStorage`
- Modular architecture using Angular Standalone
- Supports both standalone
- Optimized services using Angular Signals
- Responsive UI and user-friendly design

---

## Tech Stack

- **Frontend:** Angular 16+  
- **State Management:** Angular Signals  
- **Storage:** LocalStorage  
- **Styling:** CSS / SCSS  

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
Navigate to the project folder:

```bash
cd task-manager-app
Install dependencies:
```bash
npm install
Run the development server:

```bash
ng serve
Open your browser and navigate to:

http://localhost:4200
**Usage**
Add Task: Use the input form to add a new task for a specific user.

View Tasks: Tasks are displayed based on the selected user.

Delete Task: Click the delete button next to a task to remove it.

Persistence: Tasks are automatically saved to localStorage for future sessions.

**How It Works**
The app initializes tasks from localStorage if available; otherwise, it uses default dummy tasks.

TaskService manages task operations using Angular signals, allowing reactive updates across components.

Feature modules (e.g., TasksModule) encapsulate task-related components and functionality.

Common Angular modules like CommonModule and FormsModule are imported where needed.

**View**
<img width="1478" height="872" alt="image" src="https://github.com/user-attachments/assets/90905a5c-6e7d-4b07-a443-e6bec42c3c6b" />

**Contribution**
Contributions are welcome! You can:
Fork the repository
Create a feature branch: git checkout -b feature-name
Commit your changes: git commit -m "Add feature"
Push to the branch: git push origin feature-name
Open a Pull Request

Push to the branch: git push origin feature-name

Open a Pull Request
