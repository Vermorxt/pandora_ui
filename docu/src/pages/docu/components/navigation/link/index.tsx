import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Link } from '@/root/src/components-docu/content/link'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Link = () => <Ui_Docu_Link />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_link', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Link
