export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
      {children}
    </div>
  );
}