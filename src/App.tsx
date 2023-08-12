import {Body} from '@/components/body';
import {DataTable} from './components/table/data-table';
import {tasks} from './models/task';
import {columns} from './components/table/column';

function App() {
  return (
    <Body>
      <div className="h-full flex-1 flex-col gap-8 p-8 md:flex">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground-light dark:text-muted-foreground-dark">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <DataTable data={tasks} columns={columns} />
      </div>
    </Body>
  );
}

export default App;
