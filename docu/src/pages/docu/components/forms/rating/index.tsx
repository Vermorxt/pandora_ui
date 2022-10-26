import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Rating } from '@/root/src/components-docu/content/rating'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Rating = () => <Ui_Docu_Rating />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_rating', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Rating
