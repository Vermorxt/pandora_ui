import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_ButtonGroup_Docu } from '@/root/src/components-docu/content/button-group'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ButtonGroup = () => <Ui_ButtonGroup_Docu />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_buttonGroup', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default ButtonGroup
