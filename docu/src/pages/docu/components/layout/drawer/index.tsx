import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Drawer } from '@/root/src/components-docu/content/drawer'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Drawer = () => <Ui_Docu_Drawer />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_drawer', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Drawer
