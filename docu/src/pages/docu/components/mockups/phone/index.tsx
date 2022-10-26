import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_MockupPhone } from '@/root/src/components-docu/content/mockup-phone'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Phone = () => <Ui_Docu_MockupPhone />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_phone', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Phone
