import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Navbar } from '@/root/src/components-docu/content/navbar'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Navbar = () => <Ui_Docu_Navbar />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_navbar', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Navbar
