export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'cancelled' | 'to do' | 'in progress' | 'done';
  priority: 'low' | 'medium' | 'high';
};

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'to do',
    priority: 'low',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'in progress',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'done',
    priority: 'high',
  },
];
