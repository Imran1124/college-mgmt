import { useAppContext } from '../context';

export default function useTheme() {
  const { theme } = useAppContext();

  const bgSideBar =
    theme === 'primary'
      ? 'bg-blue-900'
      : theme === 'secondary'
      ? 'bg-green-900'
      : theme === 'rose'
      ? 'bg-rose-900'
      : theme === 'warning'
      ? 'bg-yellow-900'
      : theme === 'violet'
      ? 'bg-violet-900'
      : theme === 'purple'
      ? 'bg-purple-900'
      : theme === 'dark'
      ? 'bg-gray-900'
      : theme === 'darkGreen'
      ? 'bg-[#0f766e]'
      : 'bg-[#156361]';

  return {
    bgSideBar
  };
}
