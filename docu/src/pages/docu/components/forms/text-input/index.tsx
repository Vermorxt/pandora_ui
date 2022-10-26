import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Input } from '@/root/src/components-docu/content/input'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const TextInput = () => <Ui_Docu_Input />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_textInput', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default TextInput
