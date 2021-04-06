import React, { useState, useEffect } from 'react';
import PlatformCard from './components/PlatformCard';
import { GamePlatform, Game, FormState } from './types';
import { useAlert } from 'react-alert';
import { useForm } from 'react-hook-form';
import { ageValidations, gameIdValidations, nameValidations } from './helpers';
import './styles.css';
import { makeRequest } from 'core/utils/request';

const mapSelectValue = (games: Game[]) => {
  return games.map(game => ({
    ...game,
    label: game.title,
    value: game.id
  }));
}

const Survey = () => {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);  
  const [platform, setPlatform] = useState<GamePlatform>();
  const {register, handleSubmit, formState: { errors, isValid }, setValue, reset} = useForm<FormState>({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });
  const alert = useAlert();

  const handleChangePlatform = (selectedPlatform: GamePlatform) => {
    setPlatform(selectedPlatform);
    const gamesByPlatform = allGames.filter(
      game => game.platform === selectedPlatform
    )
    setFilteredGames(gamesByPlatform);
    setValue('gameId', '', { shouldValidate: true });
  };

  const onSubmit = (data: any) => {
    if (!isValid) return;
    const payload = { 
      name: data.name, 
      age: data.age,
      gameId: data.gameId
    };
    makeRequest({url: '/records', method: 'POST', data: payload})
      .then(() => {
       alert.success('Dados salvos com sucesso!');
        reset();
      })
      .catch(error => {
        if (error.response) {
          alert.error("Erro ao enviar os dados")
        } else {
          alert.error("Erro de conexão");
        }
      });
  }
  
  useEffect(() => {
    makeRequest({url: '/games'})
      .then(response => {
        const selectValues = mapSelectValue(response.data);
        setAllGames(selectValues);
      })
      .catch(error => {
        if (error.response) {
          alert.error("Erro ao carregar lista de jogos")
        } else {
          alert.error("Erro de conexão");
        }
      });
  }, [alert]);

  return (
    <div className="survey-container">
      <form className="survey" onSubmit={handleSubmit(onSubmit)}>
        <div className="survey__content">
          <div className="survey__user-section">
            <div>
              <input
                className={`survey__input ${errors.name && 'invalid'}`}
                {...register('name', nameValidations)}
                placeholder='Nome'
                maxLength={30}
              />
              {errors.name && (<div className="invalid-feedback" >{errors.name.message}</div>)}
            </div>
            <div>
              <input
                className={`survey__input ${errors.age && 'invalid'}`}
                {...register('age', ageValidations)}
                placeholder='Idade'
                maxLength={3}
              />
              {errors.age && (<div className="invalid-feedback" >{errors.age.message}</div>)}
            </div>
          </div>
          <div className="survey__game-section">
            <div className="survey__platforms">
              <PlatformCard 
                platform="PC"
                onChange={handleChangePlatform}
                activePlatform={platform}
              />
              <PlatformCard
                platform="XBOX"
                onChange={handleChangePlatform}
                activePlatform={platform}
              />
              <PlatformCard
                platform="PLAYSTATION"
                onChange={handleChangePlatform}
                activePlatform={platform}
              />
            </div>
            <select
              className={`survey__game-picker ${errors.gameId ? 'invalid' : ''}`}
              {...register('gameId', gameIdValidations)}
            >
              <option hidden></option>
              {filteredGames.map((game: Game) => {
                return <option value={game.value} key={game.value}>{game.label}</option>
              })}
            </select>
            {errors.gameId && (<div className="invalid-feedback">{errors.gameId.message}</div>)}
          </div>
        </div>
        <button className={`survey__submit-button ${!isValid && 'disabled'}`}>SALVAR</button>
      </form>
    </div>
  );
};

export default Survey;