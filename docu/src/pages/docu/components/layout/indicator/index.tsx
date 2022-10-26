import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Indicator } from '@/root/src/components-docu/content/indicator'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Indicator = () => <Ui_Docu_Indicator />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_indicator', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Indicator
