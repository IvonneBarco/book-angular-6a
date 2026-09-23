import { Component, signal } from '@angular/core';
import { Todo } from '../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-todo-list',
  styleUrl: './todo-list.scss',
  templateUrl: './todo-list.html',
})
export class TodoList {
  public todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Comprar víveres',
      description: 'Comprar leche, huevos, pan y verduras en el supermercado local.',
      dueDate: '2026-06-05',
      category: 'Personal',
      priority: 'Alta',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Revisar informes mensuales',
      description: 'Analizar las métricas de ventas del último trimestre y preparar el reporte.',
      dueDate: '2026-06-07',
      category: 'Trabajo',
      priority: 'Urgente',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Rutina de ejercicio',
      description: 'Completar 45 minutos de cardio y estiramientos en casa.',
      dueDate: '2026-06-04',
      category: 'Salud',
      priority: 'Media',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Pagar servicios públicos',
      description: 'Realizar el pago online de la factura de electricidad y agua.',
      dueDate: '2026-06-10',
      category: 'Hogar',
      priority: 'Alta',
      isCompleted: false,
    },
    {
      id: 5,
      title: 'Actualizar portafolio',
      description: 'Subir los últimos proyectos desarrollados a la página web personal.',
      dueDate: '2026-06-15',
      category: 'Estudio',
      priority: 'Baja',
      isCompleted: false,
    },
    {
      id: 6,
      title: 'Llamar al médico',
      description: 'Agendar cita de control general anual con el doctor.',
      dueDate: '2026-06-08',
      category: 'Salud',
      priority: 'Media',
      isCompleted: false,
    },
    {
      id: 7,
      title: 'Limpiar la oficina',
      description: 'Organizar el escritorio, botar papeles innecesarios y limpiar la pantalla.',
      dueDate: '2026-06-06',
      category: 'Hogar',
      priority: 'Baja',
      isCompleted: false,
    },
    {
      id: 8,
      title: 'Reunión con equipo de desarrollo',
      description: 'Discutir los avances del sprint actual y asignar nuevas tareas.',
      dueDate: '2026-06-04',
      category: 'Trabajo',
      priority: 'Urgente',
      isCompleted: false,
    },
    {
      id: 9,
      title: 'Leer un libro',
      description: 'Avanzar al menos dos capítulos del libro de arquitectura de software.',
      dueDate: '2026-06-12',
      category: 'Personal',
      priority: 'Baja',
      isCompleted: true,
    },
    {
      id: 10,
      title: 'Planificar viaje de vacaciones',
      description: 'Cotizar vuelos y hospedaje para las próximas vacaciones de fin de año.',
      dueDate: '2026-06-20',
      category: 'Personal',
      priority: 'Media',
      isCompleted: false,
    },
  ]);
}
