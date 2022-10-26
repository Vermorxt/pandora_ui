import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Range } from '@/root/src/components-docu/content/range'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Range = () => <Ui_Docu_Range />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_range', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Range
