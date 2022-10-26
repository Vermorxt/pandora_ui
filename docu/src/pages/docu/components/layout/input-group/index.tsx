import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_InputGroup } from '@/root/src/components-docu/content/input-group'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const InputGroup = () => <Ui_Docu_InputGroup />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_inputGroup', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default InputGroup
