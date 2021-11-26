import styled from 'styled-components';

const Card = () => {
  return (
    <StyledCard>
      <div className="card__list-wrapper">
        <ul className="card__list">
          <li className="card__item">
            <div className="item__text">
              <h2>Minicart quebrado</h2>
              <p>
                O MINICART NUM FUNUNCIA <strong>+ Ver mais.</strong>
              </p>
              <p>Arruma aí meo</p>
              <img src="" alt="" />
            </div>
            <span>Status: </span>
            <div className="select">
              <select>
                <option value="0">Selecionar</option>
                <option value="1">Feito</option>
                <option value="2">Em Progresso</option>
                <option value="3">Aguardando Info</option>
                <option value="4">Impossibilitado</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </StyledCard>
  );
};

export default Card;
