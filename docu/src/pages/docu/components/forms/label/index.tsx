import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Label } from '@/root/src/components-docu/content/label'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Toggle = () => <Ui_Docu_Label />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_label', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Toggle
