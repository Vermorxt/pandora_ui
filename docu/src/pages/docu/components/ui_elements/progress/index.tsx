import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Progress } from '@/root/src/components-docu/content/progress'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Progress = () => <Ui_Docu_Progress />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_progress', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Progress
