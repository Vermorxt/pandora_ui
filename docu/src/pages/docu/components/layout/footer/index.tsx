import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Footer } from '@/root/src/components-docu/content/footer'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Footer = () => <Ui_Docu_Footer />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_drawer', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Footer
