import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Dropdown } from '@/root/src/components-docu/content/dropdown'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Dropdown = () => <Ui_Docu_Dropdown />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_dropdown', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Dropdown
