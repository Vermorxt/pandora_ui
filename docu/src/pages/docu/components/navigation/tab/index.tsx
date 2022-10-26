import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Tabs } from '@/root/src/components-docu/content/tab'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Tab = () => <Ui_Docu_Tabs />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_tab', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Tab
