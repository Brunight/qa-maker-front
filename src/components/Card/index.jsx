import styled from 'styled-components';

const StyledCard = styled.div`
`

const CardListContainer = styled.div`
`

const CardList = styled.ul`
`

const CardListItem = styled.li`
`

const ItemText = styled.div`
`
const ItemTitle = styled.h2`
`
const Description = styled.p`
`
const Image = styled.img`
`
const Span = styled.span`
`

const SelectContainer = styled.div`

`

const Card = () => {
  return (
    <StyledCard>
      <CardListContainer>
        <CardList>
          <CardListItem>
            <ItemText>
              <ItemTitle>Minicart quebrado</ItemTitle>
              <Description>
                O MINICART NUM FUNUNCIA <strong>+ Ver mais.</strong>
              </Description>
              <Description>Arruma aí meo</Description>
              <Image />
            </ItemText>
            <Span>Status: </Span>
            <SelectContainer>
              <select>
                <option value="0">Selecionar</option>
                <option value="1">Feito</option>
                <option value="2">Em Progresso</option>
                <option value="3">Aguardando Info</option>
                <option value="4">Impossibilitado</option>
              </select>
            </SelectContainer>
          </CardListItem>
        </CardList>
      </CardListContainer>
    </StyledCard>
  );
};

export default Card;
