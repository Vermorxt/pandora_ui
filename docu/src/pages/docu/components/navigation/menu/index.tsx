import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Menu } from '@/root/src/components-docu/content/menu'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Menu = () => <Ui_Docu_Menu />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_menu', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Menu
