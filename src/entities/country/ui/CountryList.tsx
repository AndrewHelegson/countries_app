import { useGetCountriesQuery } from '../../../shared/api/generated/graphql';
import { useUnit } from 'effector-react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';

import { $currentPage, setPage, ITEMS_PER_PAGE } from '../../../features/Pagination/model';
import { $selectedContinent } from '../../../features/continentFilter/model';
import { ContinentSelect } from '../../../features/continentFilter/ui/ContinentSelect';

export const CountryList = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useGetCountriesQuery();

  const [currentPage, setPageFn] = useUnit([$currentPage, setPage]);
  const [continent] = useUnit([$selectedContinent]);

  if (loading) return <p className="text-center mt-8">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">Ошибка: {error.message}</p>;

  const countries = data?.countries ?? [];

  const filteredCountries = continent
    ? countries.filter((c) => c.continent.name === continent)
    : countries;

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filteredCountries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-4">
      <ContinentSelect />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {paginated.map((country) => (
          <div
            key={country.code}
            onClick={() => navigate(`/country/${country.code}`)}
            className="p-4 border rounded-xl shadow-md hover:shadow-lg transition cursor-pointer bg-white hover:bg-gray-50"
          >
            <div className="flex items-center gap-2 mb-2">
  <img
    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
    alt={`${country.name} flag`}
    className="w-6 h-4 object-cover rounded-sm border"
  />
  <h2 className="text-xl font-semibold">{country.name}</h2>
</div>

            <p className="text-sm text-gray-700">Столица: {country.capital}</p>
            <p className="text-sm text-gray-700">Континент: {country.continent.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => setPageFn(page)}
          color="primary"
        />
      </div>
    </div>
  );
};
