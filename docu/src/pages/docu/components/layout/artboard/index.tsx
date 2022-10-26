import nextI18nextConfig from '@/root/next-i18next.config'
import { Docu_Artboard } from '@/root/src/components-docu/content/artboard'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Artboard = () => <Docu_Artboard />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_artboard', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Artboard
