import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Checkbox } from '@/root/src/components-docu/content/checkbox'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Checkbox = () => <Ui_Docu_Checkbox />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_checkbox', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Checkbox
