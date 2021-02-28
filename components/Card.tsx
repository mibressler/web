import { ReactNode } from 'react';
import cn from 'classnames';

export interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  subtitle?: ReactNode;
}

const Card = ({ children, header, subtitle }: CardProps) => {
  return (
    <div className="flex-col w-full p-6 bg-white rounded shadow-md sm:p-8 dark:bg-gray-800">
      {header && (
        <div
          className={cn('mb-8 text-4xl text-blue-800 dark:text-blue-200 md:text-5xl sm:flex-row', {
            'flex flex-col items-baseline': !!(header && subtitle),
          })}
        >
          {header}
          {subtitle && <div className="text-2xl md:text-3xl">{subtitle}</div>}
        </div>
      )}
      {children}
    </div>
  );
};
export default Card;
