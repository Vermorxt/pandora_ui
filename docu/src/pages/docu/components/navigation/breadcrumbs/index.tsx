import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Breadcrumbs_Docu } from '@/root/src/components-docu/content/breadcrumbs'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Breadcrumbs = () => <Ui_Breadcrumbs_Docu />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_breadcrumbs', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Breadcrumbs
