import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Card } from '@/root/src/components-docu/content/card'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Card = () => <Ui_Docu_Card />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_card', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Card
