import Container from 'components/Container'
import Heading from 'components/Heading'

import { SectionConceptsProps } from 'types/api'
import * as S from './styles'

const SectionConcepts = ({ concepts, title }: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ title }) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
