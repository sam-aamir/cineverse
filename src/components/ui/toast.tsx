import { useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export default function Toast({ message, type = 'info', duration = 3000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  // Auto-hide after duration
  // useEffect(() => {
  //   if (duration > 0) {
  //     const timer = setTimeout(() => setVisible(false), duration);
  //     return () => clearTimeout(timer);
  //   }
  // }, [visible, duration]);

  if (!visible) return null;

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  }[type];

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-md shadow-lg z-50`}>
      {message}
    </div>
  );
}
