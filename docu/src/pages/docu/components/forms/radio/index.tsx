import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Radio } from '@/root/src/components-docu/content/radio'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Radio = () => <Ui_Docu_Radio />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_radio', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Radio
