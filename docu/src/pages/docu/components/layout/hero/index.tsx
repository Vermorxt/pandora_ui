import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Hero } from '@/root/src/components-docu/content/hero'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Hero = () => <Ui_Docu_Hero />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_hero', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Hero
