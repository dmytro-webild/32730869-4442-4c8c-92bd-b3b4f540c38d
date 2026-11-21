import { useNavigate } from 'react-router-dom';
import { MasarSuperEditor } from '@/components/admin/editor/MasarSuperEditor';

export default function EditorPage() {
  const navigate = useNavigate();

  return (
    <MasarSuperEditor
      onBackToAdmin={() => navigate('/admin')}
      isDarkMode={true}
    />
  );
}
