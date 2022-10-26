import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Button } from '@/root/src/components-docu/content/button'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Button = () => <Ui_Docu_Button />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_button', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Button
