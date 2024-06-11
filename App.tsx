import { Navigation } from './src/common/navigation';
import { Providers } from './src/common/providers';

export default function App() {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}