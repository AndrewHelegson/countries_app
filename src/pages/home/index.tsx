import { CountryList } from '../../entities/country/ui/CountryList';

export const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center p-6">Страны мира</h1>
      <CountryList />
    </main>
  );
};
