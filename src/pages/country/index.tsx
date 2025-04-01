import { useParams, useNavigate } from 'react-router-dom';
import { useGetCountryQuery } from '../../shared/api/generated/graphql';

export const CountryPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useGetCountryQuery({
    variables: { code: code ?? '' },
    skip: !code,
  });

  if (!code) {
    return <p className="text-center text-red-600 mt-8">Код страны не указан.</p>;
  }

  if (loading) {
    return <p className="text-center mt-8">Загрузка...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 mt-8">Ошибка: {error.message}</p>;
  }

  if (!data?.country) {
    return <p className="text-center mt-8">Страна не найдена.</p>;
  }

  const country = data.country;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Кнопка вернуться */}
      <button
        onClick={() => navigate('/')}
        className="mb-6 inline-block text-blue-600 hover:underline hover:text-blue-800 transition"
      >
        ← Вернуться к списку
      </button>

      <h1 className="text-4xl font-bold mb-4">
        {country.emoji} {country.name}
      </h1>

      <div className="space-y-2 text-lg text-gray-700">
        <p><strong>Код:</strong> {country.code}</p>
        <p><strong>Столица:</strong> {country.capital}</p>
        <p><strong>Континент:</strong> {country.continent.name}</p>
        <p><strong>Валюта:</strong> {country.currency}</p>
        <p>
          <strong>Языки:</strong>{' '}
          {country.languages.length > 0
            ? country.languages.map((lang) => lang.name).join(', ')
            : '—'}
        </p>
      </div>
    </div>
  );
};
