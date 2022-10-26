import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Steps } from '@/root/src/components-docu/content/steps'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Steps = () => <Ui_Docu_Steps />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_steps', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Steps
