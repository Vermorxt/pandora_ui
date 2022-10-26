import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Badge } from '@/root/src/components-docu/content/badge'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Badge = () => <Ui_Docu_Badge />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_badge', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Badge
