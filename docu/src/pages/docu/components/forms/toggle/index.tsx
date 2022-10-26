import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Toggle } from '@/root/src/components-docu/content/toggle'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Toggle = () => <Ui_Docu_Toggle />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_toggle', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Toggle
