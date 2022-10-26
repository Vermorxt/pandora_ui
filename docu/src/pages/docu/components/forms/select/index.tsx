import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Select } from '@/root/src/components-docu/content/select'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Select = () => <Ui_Docu_Select />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_select', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Select
