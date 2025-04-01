import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Button,
    Stack
  } from '@mui/material';
  import { useUnit } from 'effector-react';
  import {
    $selectedContinent,
    setContinent,
    resetContinent,
    CONTINENTS
  } from '../model';
  import { useEffect } from 'react';
  import { useSearchParams } from 'react-router-dom';
  
  export const ContinentSelect = () => {
    const [continent, setContinentFn, resetContinentFn] = useUnit([
      $selectedContinent,
      setContinent,
      resetContinent
    ]);
  
    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(() => {
      const fromUrl = searchParams.get('continent');
      if (fromUrl) {
        setContinentFn(fromUrl);
      }
    }, []);
  
    useEffect(() => {
      if (continent) {
        setSearchParams({ continent });
      } else {
        setSearchParams({});
      }
    }, [continent]);
  
    return (
      <Stack direction="row" spacing={2} alignItems="center" className="mb-6">
        <FormControl size="small" sx={{ minWidth: 240 }} >
          <InputLabel>Континент</InputLabel>
          <Select
            label="Континент"
            value={continent ?? ''}
            onChange={(e) => setContinentFn(e.target.value || null)}
          >
            <MenuItem value="">Все континенты</MenuItem>
            {CONTINENTS.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
        {continent && (
          <Button size="small" onClick={resetContinentFn}>
            Сбросить
          </Button>
        )}
      </Stack>
    );
  };
  