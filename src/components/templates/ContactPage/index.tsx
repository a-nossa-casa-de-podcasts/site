import Base from 'components/templates/Base'
import { FullContainer } from 'components/atoms/Container'
import * as S from './styles'
import { MenuLinksProps } from 'components/Menu'
import { FooterLinksProps } from 'components/Footer'

export type ContactPageTemplateProps = {
  Title: string
  Description: string
  outerBarsColor: string
  innerBarsColor: string
  menuListLinks: MenuLinksProps[]
  footerListLinks: FooterLinksProps[]
}

const ContactPage = ({
  Title,
  Description,
  outerBarsColor = '29292B',
  innerBarsColor = '0E3C63',
  menuListLinks,
  footerListLinks
}: ContactPageTemplateProps) => (
  <Base
    outerBarsColor={outerBarsColor}
    innerBarsColor={innerBarsColor}
    menuListLinks={menuListLinks}
    footerListLinks={footerListLinks}
  >
    <FullContainer>
      <S.Section>
        <h3>{Title}</h3>
        <p>{Description}</p>
      </S.Section>
      <S.Section>

      </S.Section>
    </FullContainer>
  </Base>
)

export default ContactPage
