import type {PropsWithChildren} from 'react';

export function Body(props: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-foreground-light dark:text-foreground-dark antialiased font-sans">
      {props.children}
    </div>
  );
}
