import nextI18NextConfig from '@/root/next-i18next.config'
import { Ui_Alert_Docu } from '@/root/src/components-docu/content/alert'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Alert = () => <Ui_Alert_Docu />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_alert', ...GLOBAL_TRANSLATIONS], nextI18NextConfig)),
  },
})

export default Alert
