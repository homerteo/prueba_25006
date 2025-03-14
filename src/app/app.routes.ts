import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./pages/todo-app/todo-app.component").then(m => m.TodoAppComponent)
    }
];
