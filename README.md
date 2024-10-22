# TODO List

This project is a simple TODO list application built with React, TypeScript, and Vite. It allows users to add, update, and remove tasks, as well as filter tasks based on their completion status.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Architecture and Folders

The project structure is as follows:

- `src/`: Contains the source code of the application.
  - `components/`: Contains the React components used in the application.
  - `controllers/`: Contains the controller hooks for managing application logic.
  - `schemas/`: Contains the schema definitions for the data models.
  - `services/`: Contains the service files for interacting with external APIs or libraries.
  - `mutations/`: Contains the mutation hooks for performing data mutations.
  - `queries/`: Contains the query hooks for fetching data.
  - `assets/`: Contains the static assets used in the application.
  - `lib/`: Contains utility functions and helper files.
  - `main.tsx`: The entry point of the application.
  - `index.css`: The global CSS file for the application.
