import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Divider } from '@/root/src/components-docu/content/divider'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Divider = () => <Ui_Docu_Divider />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_divider', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Divider
