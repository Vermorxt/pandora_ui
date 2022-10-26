import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_MockupCode } from '@/root/src/components-docu/content/mockup-code'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Code = () => <Ui_Docu_MockupCode />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_code', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Code
